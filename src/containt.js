import dotenv from "dotenv";
dotenv.config();

const URI = process.env.MONGO_URI;

export { URI };
