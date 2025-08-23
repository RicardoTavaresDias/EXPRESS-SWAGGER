import { getUsers, createUser, getByUser } from "@/repositories/users.repository";

export function getUsersService () {
  const users = getUsers()
  if (users.length === 0) {
    throw new Error("Usuarios não encontrados.")
  }  

  return users
}

export function getByUserService (id: any) {
  const byUser = getByUser(id)
  if (byUser.length === 0) {
    throw new Error(`Usuario com ${id} não encontrado.`)
  }  
  
  return byUser
}

export function createUserService (data: any) {
  const dataUserCreate = createUser(data)
  
  return dataUserCreate
}