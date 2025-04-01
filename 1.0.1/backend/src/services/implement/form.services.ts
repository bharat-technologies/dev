import { IForm } from "@/interface";
import { IFormServices } from "../interface";
import { createHttpError } from "@/utils/http-error.utils";
import { HttpResponse, HttpStatus } from "@/constants";
import { IFormRepository } from "@/repository/interface";
import { verifyEmail } from "@devmehq/email-validator-js"

export class FormServices implements IFormServices {
    constructor(private readonly formRepository: IFormRepository<IForm>) {

    }
    async getForm(): Promise<IForm[]> {
        try {
            const data = await this.formRepository.getAllForm()

            if (!data || data.length === 0) {
                throw createHttpError(HttpStatus.NOT_FOUND, HttpResponse.NOT_FOUND);
            }

            return data;

        } catch (error) {
            console.error("Error fetching forms:", error);
            throw createHttpError(HttpStatus.INTERNAL_SERVER_ERROR, HttpResponse.SERVER_ERROR);
        }
    }
    async setForm(data: IForm): Promise<IForm> {
        try {
            const { email, name, phone, text } = data;
    
            if (!email || !name || !phone || !text) {
                throw createHttpError(HttpStatus.BAD_REQUEST, HttpResponse.REQUIRED_ALL_FIELD);
            }
    
            const { validMx, validSmtp } = await verifyEmail({ emailAddress: email, verifyMx: true, verifySmtp: true, timeout: 3000 });
    
            if (!validSmtp || !validMx) {
                throw createHttpError(HttpStatus.BAD_REQUEST, HttpResponse.INVALID_EMAIL);
            }
    
            return await this.formRepository.createForm(data);
        } catch (error:any) {
            throw createHttpError(HttpStatus.INTERNAL_SERVER_ERROR, error.message || HttpResponse.SERVER_ERROR);
        }
    }
    
}