import { Router } from "express";
import { routerGet } from "./routerGet.router"

const router = Router()

router.use("/", routerGet)

export { router }