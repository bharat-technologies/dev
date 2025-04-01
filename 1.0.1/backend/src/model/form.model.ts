import { IForm } from "@/interface"
import { encrypt, decrypt } from "@/utils/encypt.utils"
import mongoose, { Schema } from "mongoose"

const formSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        set: encrypt,
        get: decrypt
    },
    phone: {
        type: String,
        required: true,
        set: encrypt,
        get: decrypt
    },
    text: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 100
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
}, { toJSON: { getters: true }, toObject: { getters: true }, timestamps: true })



export const Form = mongoose.model<IForm>("Form", formSchema)

