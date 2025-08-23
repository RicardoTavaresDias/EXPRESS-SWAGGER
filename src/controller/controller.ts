import { Request, Response } from "express";

class ExpressController {
  get (request: Request, response: Response) {
    response.status(200).json({ message: "Controller rodando!" })
  }
}

export { ExpressController }