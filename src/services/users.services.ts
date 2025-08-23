import { getUsers, createUser, getByUser } from "@/repositories/users.repository";
import type { CreateUsersType } from "@/schemas/users.schema"

export function getUsersService () {
  const users = getUsers()
  if (users.length === 0) {
    throw new Error("Usuarios não encontrados.")
  }  

  return users
}

export function getByUserService (id: string) {
  const byUser = getByUser(id)
  if (byUser.length === 0) {
    throw new Error(`Usuario com ${id} não encontrado.`)
  }  
  
  return byUser
}

export function createUserService (data: CreateUsersType) {
  const dataUserCreate = createUser(data)
  
  return dataUserCreate
}