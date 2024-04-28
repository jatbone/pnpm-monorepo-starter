import { users, insertUserSchema, db } from 'db'
import { eq } from 'drizzle-orm'
import z from 'zod'

import { publicProcedure, router } from './trpc.js'

export const appRouter = router({
  userList: publicProcedure.query(async () => {
    const allUsers = await db.select().from(users)
    return allUsers
  }),
  userById: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts

    const found = await db
      .select()
      .from(users)
      .where(eq(users.id, Number(input)))

    return found
  }),
  createUser: publicProcedure.input(insertUserSchema).mutation(async (opts) => {
    const { input } = opts

    const insertedId = await db
      .insert(users)
      .values(input)
      .returning({ id: users.id })

    return insertedId?.[0]
  }),
  deleteUser: publicProcedure.input(z.string()).mutation(async (opts) => {
    const { input } = opts

    const deletedId = await db
      .delete(users)
      .where(eq(users.id, Number(input)))
      .returning({
        id: users.id,
      })

    return deletedId?.[0]
  }),
})

export type AppRouter = typeof appRouter
