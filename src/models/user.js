import { model, Schema } from "mongoose";
import validator from "validator";

const userSchema = new Schema({
  name: { type: String, required: [true, "is requied"] },
  email: {
    type: String,
    required: [true, "is requied"],
    unique: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return validator.isEmail(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  password: {
    type: String,
    required: [true, "is requied"],
    minlength: [6, "more than 6 letter"],
  },
  token: String,
});

const user = model("user", userSchema);

export default user;
