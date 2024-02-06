import { Router } from "express";
import { createUser, getUsers, loginUser } from "../controllers/usersController.js";
import { middlewareCreat } from "../middlewares/middlewareCreat.js";
import { middlewareLogin } from "../middlewares/middlewareLogin.js";

const userRouter = Router();

userRouter.route('/').get(getUsers);
userRouter.route('/register').post(middlewareCreat,createUser);
userRouter.route('/login').post(middlewareLogin,loginUser);

export default userRouter;