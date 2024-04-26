import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

export const getDb = ({
  host,
  port,
  user,
  password,
  database,
}: {
  host: string
  port: number
  user: string
  password: string
  database: string
}) => {
  const connection = postgres(
    `postgres://${user}:${password}@${host}:${port}/${database}`,
  )

  return drizzle(connection)
}
