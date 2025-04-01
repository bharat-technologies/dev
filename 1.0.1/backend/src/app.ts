import express, { NextFunction, Request, Response } from 'express'
import compression from "compression"
import cors from "cors"
import { config } from 'dotenv'
config()
import formRouter from "@/routes/formRouter"

const app = express();

app.use(cors())
app.use(compression())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1/api/", formRouter)


app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status || 500).json({
        success: false,
        message: error.message || "Internal Server Error",
    });
});


export default app;