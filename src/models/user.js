import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: [true, "is requied"], unique: true },
  email: { type: String, required: [true, "is requied"], unique: true },
  password: { type: String, required: [true, "is requied"] },
});

const user = model("user", userSchema);

export default user;
