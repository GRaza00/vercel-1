import bcrypt from "bcrypt";

const saltRound = 10;

const encPassword = async (password) => {
  try {
    const hashPassword = await bcrypt.hash(password, saltRound);
    return hashPassword;
  } catch (e) {
    throw new Error(e);
  }
};

const verifyPassword = async (password, hashPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, hashPassword);
    return isMatch;
  } catch (e) {
    throw new Error(e);
  }
};

export { encPassword, verifyPassword };
