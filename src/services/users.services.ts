import { getUsers, createUser, getByUser, updateUser, removeUser } from "@/repositories/users.repository";
import type { CreateUsersType, UpdateUserType } from "@/schemas/users.schema"

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

export function updateUserServices (data: UpdateUserType & { id: string }) {
  const result = updateUser(data)

  return result
}

export function removeUserServices (id: string) {
  const result = removeUser(id)

  return result
}