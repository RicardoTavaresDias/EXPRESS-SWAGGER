import { Router } from "express";
import { ExpressController } from "../controller/controller";

const routerGet = Router()
const expressController = new ExpressController()

routerGet.get("/", expressController.get)

export { routerGet }