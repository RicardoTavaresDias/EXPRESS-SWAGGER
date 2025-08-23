import { Request, Response } from "express";
import { createUserService, getByUserService, getUsersService } from "@/services/users.services"
import { createUserSchema, idParamsSchema } from "@/schemas/users.schema"
import type { idParamsType } from "@/schemas/users.schema"

class User {
  index (request: Request, response: Response) {
    const result = getUsersService()

    response.status(200).json(result)
  }

  byIndex (request: Request, response: Response) {
    const idSchema = idParamsSchema.safeParse(request.params)
    if(!idSchema.success) {
      return response.status(400).json({ message: idSchema.error.issues[0].message })
    }

    const { id }: idParamsType = idSchema.data

    const result = getByUserService(id)

    response.status(200).json(result)
  }

  create (request: Request, response: Response) {
    const createData = createUserSchema.safeParse(request.body)
    if(!createData.success) {
      return response.status(400).json({ message: createData.error.issues[0].message })
    }

    const result = createUserService(createData.data)

    response.status(201).json({ message: "Usuario criado com sucesso!", data: result })
  }
}

export { User }