import express from "express";
import upload from "../utils/diskImg.js";

import { getProducts, getProduct, AddImage } from "../controller/client.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", upload.fields([{ name: "img1" }, { name: "img2" }]), AddImage);

export default router;
