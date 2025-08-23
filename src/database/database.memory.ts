export type DatabaseMemory = {
  id: string,
  name: string,
  email: string,
  role: string
}

const databaseUsers: DatabaseMemory[] = []

export { databaseUsers }