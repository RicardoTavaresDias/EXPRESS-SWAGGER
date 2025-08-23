import { Router } from "express";
import { User } from "../controller/user.controller";

const userRouter = Router()
const userController = new User()

userRouter.get("/", userController.get)

export { userRouter }