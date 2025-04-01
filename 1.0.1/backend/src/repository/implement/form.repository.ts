import { Form } from "@/model/form.model";
import { IForm } from "@/interface"
import { IFormRepository } from "../interface";

export class FormRepository implements IFormRepository<IForm> {
    async getAllForm(): Promise<IForm[]> {
        return await Form.find({}).lean()
    }

    async createForm(data: IForm): Promise<IForm> {
        return await Form.create(data)
    }
}