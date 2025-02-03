import jwt from "jsonwebtoken";
import { jwtSecretKey } from "../utils/containt.js";

const authenticate = async (req, res, next) => {
  const barerToken = req.headers.authorization;
  try {
    const token = barerToken.split(" ")[1];
    const result = jwt.verify(token, jwtSecretKey);
    next();
  } catch (error) {
    res.status(401).json({ status: "cannot login" });
  }
};

export default authenticate;
