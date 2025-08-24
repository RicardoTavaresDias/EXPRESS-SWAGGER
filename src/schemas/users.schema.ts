import z from "zod"

export const createUserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, { message: "name: Campo obrigatório." }),
  email: z.string().email({ message: "Email inválido" }),
  role: z.string().default("member")
})

export type CreateUsersType = z.infer<typeof createUserSchema>

export const idParamsSchema = z.object({
  id: z.string().uuid()
})

export type idParamsType = z.infer<typeof idParamsSchema>

export const updateUserSchema = z.object({
  ...createUserSchema.omit({
    id: true,
    role: true
  }).shape
}).partial()

export type UpdateUserType = z.infer<typeof updateUserSchema>