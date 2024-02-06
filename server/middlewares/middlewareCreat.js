import bcrypt from "bcrypt";
import userModel from '../db/models/users.js';

export const middlewareCreat = async (req, res, next) => {
  try {
    const { user_name, email, password } = req.body;
    const existingUserEmail = await userModel
      .findOne({ email });
      const existingUser = await userModel
      .findOne({ user_name });
    if (existingUser || existingUserEmail) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    req.body.password = hashedPassword;
    next();
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}