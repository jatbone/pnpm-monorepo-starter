import * as dotenv from 'dotenv'
import type { Config } from 'drizzle-kit'

dotenv.config()

export default {
  schema: './src/schema.ts',
  out: './drizzle',
  driver: 'pg',
  verbose: true,
  strict: true,
  dbCredentials: {
    user: process.env.POSTGRES_USER!,
    password: process.env.POSTGRES_PASSWORD!,
    database: process.env.POSTGRES_DB!,
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT!),
  },
} satisfies Config
