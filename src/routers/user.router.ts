import { Router } from "express";
import { User } from "../controller/user.controller";

const userRouter = Router()
const userController = new User()

userRouter.get("/", userController.index)
userRouter.get("/:id", userController.byIndex)
userRouter.post("/", userController.create)

export { userRouter }