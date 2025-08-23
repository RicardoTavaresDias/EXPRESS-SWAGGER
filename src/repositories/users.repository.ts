import { databaseUsers } from "@/database/database.memory";
import { randomUUID } from "node:crypto"

export function getUsers () {
  return databaseUsers
}

export function getByUser (id: any) {
  return databaseUsers.filter(user => user.id === id)
}

export function createUser (data: any) {
  const result = databaseUsers.push({ 
    id: randomUUID(),
    name: data.name,
    email: data.email,
    role:  data.role
  })

  return databaseUsers[result -1]
}