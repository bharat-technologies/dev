import { Document } from "mongoose"

export interface IForm extends Document {
    name: string;
    email: string;
    phone: string;
    text: string;
} 