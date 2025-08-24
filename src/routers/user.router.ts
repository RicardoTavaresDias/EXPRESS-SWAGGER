import { Router } from "express";
import { UserController } from "../controller/user.controller";
import { generateUserIdMiddleware } from "@/middlewares/generateUserIdMiddleware";

const userRouter = Router()
const userController = new UserController()

userRouter.get("/", userController.index)
userRouter.post("/", generateUserIdMiddleware, userController.create)
userRouter.patch("/:id", userController.update)

userRouter.get("/:id", userController.byIndex)
userRouter.delete("/:id", userController.remover)

export { userRouter }