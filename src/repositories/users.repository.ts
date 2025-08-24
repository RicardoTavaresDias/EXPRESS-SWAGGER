import { databaseUsers } from "@/database/database.memory";
import type { CreateUsersType, UpdateUserType } from "@/schemas/users.schema"

export function getUsers () {
  return databaseUsers
}

export function getByUser (id: string) {
  return databaseUsers.filter(user => user.id === id)
}

export function createUser (data: CreateUsersType) {
  const result = databaseUsers.push({ 
    id: data.id,
    name: data.name,
    email: data.email,
    role:  data.role
  })

  return databaseUsers[result -1]
}

export function updateUser (dataUpdate: UpdateUserType & { id: string }) {
  const result = databaseUsers.map(user => 
    user.id === dataUpdate.id ? { ...user, ...dataUpdate } : user
  )

  databaseUsers.length = 0
  databaseUsers.push(...result)

  const returnResult = databaseUsers.filter(user => user.id === dataUpdate.id)

  return returnResult
}

export function removeUser (id: string) {
  const result = databaseUsers.filter(remove => remove.id !== id)

  databaseUsers.length = 0

  databaseUsers.push(...result)
}