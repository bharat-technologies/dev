import { IForm } from "@/interface";

export interface IFormServices {
    getForm(): Promise<IForm[]>
    setForm(data: IForm): Promise<IForm>
}