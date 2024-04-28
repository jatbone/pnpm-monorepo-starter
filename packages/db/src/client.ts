import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const conn = postgres({
  user: process.env.POSTGRES_USER!,
  password: process.env.POSTGRES_PASSWORD!,
  db: process.env.POSTGRES_DB!,
  host: process.env.DB_HOST!,
  port: Number(process.env.DB_PORT!),
})

export const db = drizzle(conn)
