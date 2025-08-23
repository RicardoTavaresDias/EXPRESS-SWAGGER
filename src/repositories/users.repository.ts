import { databaseUsers } from "@/database/database.memory";
import type { CreateUsersType } from "@/schemas/users.schema"

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