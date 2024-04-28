import { getDb } from 'db'

export const db = getDb({
  host: process.env.DB_HOST!,
  port: Number(process.env.DB_PORT!),
  user: process.env.POSTGRES_USER!,
  password: process.env.POSTGRES_PASSWORD!,
  database: process.env.POSTGRES_DB!,
})
