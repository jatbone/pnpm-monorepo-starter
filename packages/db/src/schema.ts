import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('full_name'),
  full_name: varchar('full_name', { length: 256 }),
  phone: varchar('phone', { length: 256 }),
})
