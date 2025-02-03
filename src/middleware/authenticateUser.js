import jwt from "jsonwebtoken";
import { jwtSecretKey } from "../utlis/constaints.js";
import user from "../models/user.js";

const authenticate = async (req, res, next) => {
  const { token } = req.cookies;
  try {
    const userInfo = jwt.verify(token, jwtSecretKey);
    const userDetail = await user.findById(userInfo._id);
    if (userDetail) {
      req.userId = userDetail._id;
      return next();
    }
  } catch (err) {
    res.status(401).json({ status: "user must be login " });
  }
};

export default authenticate;
