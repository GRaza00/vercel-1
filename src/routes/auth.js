import express from "express";
import { login, signUp, resetPassword } from "../controller/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signUp);
router.post("/resetpassword", resetPassword);

export default router;
