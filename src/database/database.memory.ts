export type DatabaseMemory = {
  id: string,
  name: string,
  email: string,
  role: string
}

let databaseUsers: DatabaseMemory[] = []

export { databaseUsers }