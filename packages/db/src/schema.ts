import {
  timestamp,
  pgTable,
  serial,
  text,
  varchar,
  integer,
} from 'drizzle-orm/pg-core'
import { createInsertSchema } from 'drizzle-zod'

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull(),
  full_name: varchar('full_name', { length: 256 }),
  phone: varchar('phone', { length: 256 }),
  created_at: timestamp('created_at', {
    withTimezone: true,
  }).defaultNow(),
})

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  content: text('content'),
  authorId: integer('author_id').references(() => users.id),
})

// Schema for inserting a user - can be used to validate API requests
export const insertUserSchema = createInsertSchema(users)
