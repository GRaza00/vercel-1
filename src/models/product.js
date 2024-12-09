import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: [true, "is required"] },
  price: { type: Number, required: [true, "is required"] },
  rating: { type: Number, min: [0, "more than 0"], max: [5, "less then 5"] },
});

const product = model("product", productSchema);

export default product;