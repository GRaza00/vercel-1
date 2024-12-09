import user from "../models/user.js";

//login
const login = async (req, res) => {
  res.send("create account in website");
};

//signUp
const signUp = async (req, res) => {
  const newUser = new user(req.body);
  try {
    const doc = await newUser.save();
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
