
import userModel from "../db/models/users.js";
import jwt from "jsonwebtoken";



export const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
export const createUser = async (req, res) => {
  const { user_name, email, password } = req.body;
  try {
    console.log(req.body);
    // const hashedPassword = await bcrypt.hash(password, 12);
    const user = await userModel.create({ user_name, email, password});
    const token = jwt.sign({ email: user.email, id: user
      ._id }, "test", { expiresIn: "1h" });   

    res.status(201).json({ user, token });
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export const loginUser = async (req, res) => {
  
  try { 
    const existingUser= req.body;
    
    const token = jwt.sign({ email: existingUser.email, id: existingUser._id
    }, "test", { expiresIn: "1h" });
    res.status(200).json({ result: existingUser, token });
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }

}
