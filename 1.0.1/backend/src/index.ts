import app from "@/app";
import { config } from "dotenv";
config();
import { connectDB } from "@/config/db.config";

const PORT = process.env.PORT

const bootstrap = async () => {
    await connectDB();

    app.listen(PORT, () => console.log(`🚀 Server started successfully on port ${PORT}`));
};

bootstrap();
