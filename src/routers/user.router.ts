import { Router } from "express";
import { UserController } from "../controller/user.controller";
import { generateUserIdMiddleware } from "@/middlewares/generateUserIdMiddleware";

const userRouter = Router()
const userController = new UserController()

userRouter.get("/", userController.index)
userRouter.get("/:id", userController.byIndex)
userRouter.post("/", generateUserIdMiddleware, userController.create)

export { userRouter }