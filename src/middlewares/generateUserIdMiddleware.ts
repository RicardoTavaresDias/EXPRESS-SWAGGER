import { Request, Response, NextFunction } from "express";
import { randomUUID } from "node:crypto"

function generateUserIdMiddleware (request: Request, response: Response, next: NextFunction) {
  if (request.body.id) {
    return next()
  }

  const createRequest = {
    ...request.body,
    id: randomUUID()
  }

  request.body = createRequest

  next()
}

export { generateUserIdMiddleware }