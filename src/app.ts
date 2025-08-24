import express from "express";
import cors from "cors"
import { router } from "./routers";
import { setupSwagger } from "@/config/swagger.config";

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

// Swagger
setupSwagger(app);

export { app }