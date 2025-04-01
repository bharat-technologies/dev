import CryptoJS from "crypto-js"

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY as string;

export const encrypt = (text: string): string => {
    let cipher = CryptoJS.AES.encrypt(text, ENCRYPTION_KEY).toString();
    return cipher
}

export const decrypt = (text: string): string => {
    const bytes = CryptoJS.AES.decrypt(text, ENCRYPTION_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
};