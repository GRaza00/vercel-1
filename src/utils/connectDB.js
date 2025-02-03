import mongoose from "mongoose";
import { URI } from "./containt.js";

async function connectDB() {
  try {
    await mongoose.connect(URI);
    console.log(`Connected to MongoDB`);
  } catch (e) {
    console.log(`Error Connection tO MongoDB ${e}`);
  }
}

export default connectDB;
