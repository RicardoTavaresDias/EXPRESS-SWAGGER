import { Request, Response } from "express";
import { randomUUID } from "node:crypto"

class User {
  get (request: Request, response: Response) {
    response.status(200).json({ 
      id: randomUUID(),
      name: "Ricardo  Tavares",
      email: "ricardo@email.com",
      role:  "user"
    })
  }
}

export { User }