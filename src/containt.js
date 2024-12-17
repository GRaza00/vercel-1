import dotenv from "dotenv";
dotenv.config();

const URI = process.env.MONGO_URI;
const jwtSecretKey = process.env.JWT_SECRET_KEY;

export { URI, jwtSecretKey };
