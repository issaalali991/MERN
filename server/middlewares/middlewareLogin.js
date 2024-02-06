import bcrypt from "bcrypt";
import userModel from '../db/models/users.js';

export const middlewareLogin = async (req, res, next) => {
  try {
    const { user_name, password } = req.body;
    const existingUser = await userModel.findOne({ user_name });
    if (!existingUser) {
      return res.status(404).json({ message: "User doesn't exist" });
    }
    req.body = existingUser;
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    next();
  }

 catch (error) {
  res.status(500).json({ message: error.message });
}
}
