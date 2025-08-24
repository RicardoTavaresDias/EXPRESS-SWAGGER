import { Request, Response } from "express";
import { createUserService, getByUserService, getUsersService, updateUserServices, removeUserServices } from "@/services/users.services"
import { createUserSchema, idParamsSchema, updateUserSchema } from "@/schemas/users.schema"
import type { idParamsType } from "@/schemas/users.schema"

class UserController {

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retorna todos os usuários
 *     tags:
 *       - Users
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:                  
 *                 type: object
 *                 properties:
 *                   id:                
 *                     type: string
 *                     example: "2ee99bd4-4f82-4121-b331-300a1b5550d8"
 *                   name:              
 *                     type: string
 *                     example: "João Silva"
 *                   email:             
 *                     type: string
 *                     example: "joao@email.com"
 *                   role:
 *                     type: string
 *                     enum:
 *                       - member
 *                       - admin
 *                     example: "member"
 *       500:
 *         description: Usuarios não encontrados
 * 
 */

  index (request: Request, response: Response) {
    const result = getUsersService()

    response.status(200).json(result)
  }

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retorna usuario especifico
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário
 *         schema:
 *           type: string
 *           example: "2ee99bd4-4f82-4121-b331-300a1b5550d8"
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "2ee99bd4-4f82-4121-b331-300a1b5550d8"
 *                 name:
 *                   type: string
 *                   example: "João Silva"
 *                 email:
 *                   type: string
 *                   example: "joao@email.com"
 *                 role:
 *                   type: string
 *                   enum:
 *                     - member
 *                     - admin
 *                   example: "member"
 *       400:
 *         description: Erro de validação
 *       500:
 *         description: Usuario não encontrado
 */

  byIndex (request: Request, response: Response) {
    const idSchema = idParamsSchema.safeParse(request.params)
    if(!idSchema.success) {
      return response.status(400).json({ message: idSchema.error.issues[0].message })
    }

    const { id }: idParamsType = idSchema.data

    const result = getByUserService(id)

    response.status(200).json(result)
  }

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Criar um usuario novo
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Ricardo"
 *               email:
 *                 type: string
 *                 example: "ricardo@email.com"
 *               role:
 *                 type: string
 *                 enum:
 *                   - member
 *                   - admin
 *                 example: "member"
 *     responses:
 *       201:
 *         description: Usuario criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Usuario criado com sucesso!"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "2ee99bd4-4f82-4121-b331-300a1b5550d8"
 *                     name:
 *                       type: string
 *                       example: "João Silva"
 *                     email:
 *                       type: string
 *                       example: "joao@email.com"
 *                     role:
 *                       type: string
 *                       enum:
 *                         - member
 *                         - admin
 *                       example: "member"
 */

  create (request: Request, response: Response) {
    const createData = createUserSchema.safeParse(request.body)
    if(!createData.success) {
      return response.status(400).json({ message: createData.error.issues[0].message })
    }

    const result = createUserService(createData.data)

    response.status(201).json({ message: "Usuario criado com sucesso!", data: result })
  }

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualiza dados do usuário
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do usuário a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Ricardo"
 *               email:
 *                 type: string
 *                 example: "ricardo@email.com"
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Usuário atualizado com sucesso!"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "2ee99bd4-4f82-4121-b331-300a1b5550d8"
 *                     name:
 *                       type: string
 *                       example: "João Silva"
 *                     email:
 *                       type: string
 *                       example: "joao@email.com"
 *                     role:
 *                       type: string
 *                       enum:
 *                         - member
 *                         - admin
 *                       example: "member"
 *       400:
 *         description: Erro de validação
 */

  update (request: Request, response: Response) {
    const idSchema = idParamsSchema.safeParse(request.params)
    if(!idSchema.success) {
      return response.status(400).json({ message: idSchema.error.issues[0].message })
    }

    if (!request.body.length) {
      return response.status(400).json({ messsage: "Não há dados para atualizar." })
    }

    const updateData = updateUserSchema.safeParse(request.body)
    if(!updateData.success) {
      return response.status(400).json({ message: updateData.error.issues[0].message })
    }

    const data = { ...updateData.data, ...idSchema.data }

    const result = updateUserServices(data)

    response.status(200).json(result)
  }

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Remove usuário
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário para ser removido
 *         schema:
 *           type: string
 *           example: "2ee99bd4-4f82-4121-b331-300a1b5550d8"
 *     responses:
 *       200:
 *         description: Usuário removido com sucesso.
 *       400:
 *         description: Erro de validação
 */

  remover (request: Request, response: Response) {
    const idSchema = idParamsSchema.safeParse(request.params)
    if(!idSchema.success) {
      return response.status(400).json({ message: idSchema.error.issues[0].message })
    }

    const { id } = idSchema.data

    removeUserServices(id)

    response.status(200).json({ message: "Usuário removido com sucesso." })
  }
}

export { UserController }