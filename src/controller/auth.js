import { jwtSecretKey } from "../utils/containt.js";
import user from "../models/user.js";
import jwt from "jsonwebtoken";
import { verifyPassword, encPassword } from "../utils/password.js";

//login
const login = async (req, res) => {
  const { email, password } = req.body;
  const query = await user
    .findOne({ email: email.toLowerCase() })
    .select("password");
  try {
    const userInfo = await query.exec();
    const hashPassword = userInfo.password;
    const userObjectId = userInfo.toObject();
    const isMatch = await verifyPassword(password, hashPassword);
    console.log({ isMatch, userObjectId });
    if (isMatch) {
      const token = jwt.sign(userObjectId, jwtSecretKey, { expiresIn: "1d" });
      userInfo.token = token;
      await userInfo.save();
      res.cookie("token", token, {
        maxAge: 1000 * 60 * 60 * 24 * 30,
        httpOnly: true,
      });
      res.status(200).json({ staus: "login page" });
    } else {
      res.status(401).json({ staus: "wrong password" });
    }
  } catch (error) {
    res.status(401).json({ status: "email password wrong" });
  }
};

//signUp
const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  const hashPassword = await encPassword(password);
  const newUser = new user({ name, email, password: hashPassword });
  const resultObject = newUser.toObject();
  const token = jwt.sign(resultObject, jwtSecretKey, { expiresIn: "7d" });
  newUser.token = token;
  try {
    const doc = await newUser.save();
    res.cookie("token", token, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });
    res.status(201).json(doc);
  } catch (e) {
    res.status(400).json(e);
  }
};

//resetPassword
const resetPassword = async (req, res) => {
  res.send("reset password in website");
};

export { login, signUp, resetPassword };
