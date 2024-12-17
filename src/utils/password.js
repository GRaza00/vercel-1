import bcrypt from "bcrypt";

const saltRound = 10;

const encPassword = async (password) => {
  try {
    const hashPassword = bcrypt.hash(password, saltRound);
    return hashPassword;
  } catch (e) {
    throw new Error(e);
  }
};

const verifyPassword = async (password, hashPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, hashPassword);
    return isMatch;
  } catch (error) {
    throw new Error(e);
  }
};

// console.error('Password comparison error:', error);
//         let message = 'Password comparison error';
//         if (error instanceof Error) message = error.message;
//         throw new Error(message);

export { encPassword, verifyPassword };
