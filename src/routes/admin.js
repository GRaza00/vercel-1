import express from "express";
import {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  replaceProduct,
  deleteProduct,
} from "../controller/admin.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.put("/:id", replaceProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
