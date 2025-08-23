import { Request, Response } from "express";
import { randomUUID } from "node:crypto"
import { databaseUsers } from "../database/database.memory";

class User {
  index (request: Request, response: Response) {
    response.status(200).json(databaseUsers)
  }

  create (request: Request, response: Response) {
    databaseUsers.push({ 
      id: randomUUID(),
      name: "Ricardo  Tavares",
      email: "ricardo@email.com",
      role:  "user"
    })

    response.status(201).json({ message: "Usuario criado com sucesso!" })
  }
}

export { User }