import { HttpStatus } from "@/constants";
import { FormServices } from "@/services/implement";
import { NextFunction, Request, Response } from "express"

export class FormController {
    constructor(private readonly formService: FormServices) {

    }
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await this.formService.setForm(req.body);
            return res.status(HttpStatus.OK).json({ success: true, data });
        } catch (error) {
            next(error);
        }
    }
    
    async getAllform(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await this.formService.getForm();
            return res.status(HttpStatus.OK).json({ success: true, data });
        } catch (error) {
            next(error); 
        }
    }
    
}