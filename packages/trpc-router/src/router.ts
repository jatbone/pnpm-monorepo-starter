import { users, insertUserSchema, db, posts } from 'db'
import { eq } from 'drizzle-orm'
import z from 'zod'

import { publicProcedure, router } from './fastify-trpc.js'

export const appRouter = router({
  userList: publicProcedure.query(async (opts) => {
    console.log('ctx user', opts.ctx.user)

    const allUsers = await db.select().from(users)
    return allUsers
  }),
  userById: publicProcedure.input(z.string()).query(async (opts) => {
    console.log('ctx', opts.ctx)
    const { input } = opts

    const found = await db
      .select()
      .from(users)
      .where(eq(users.id, Number(input)))

    return found
  }),
  createUser: publicProcedure.input(insertUserSchema).mutation(async (opts) => {
    console.log('ctx', opts.ctx)
    const { input } = opts

    const insertedId = await db
      .insert(users)
      .values(input)
      .returning({ id: users.id })

    return insertedId?.[0]
  }),
  deleteUser: publicProcedure.input(z.string()).mutation(async (opts) => {
    console.log('ctx', opts.ctx)
    const { input } = opts

    const deletedId = await db
      .delete(users)
      .where(eq(users.id, Number(input)))
      .returning({
        id: users.id,
      })

    return deletedId?.[0]
  }),
  userPosts: publicProcedure.input(z.string()).query(async (opts) => {
    console.log('ctx', opts.ctx)
    const { input } = opts

    const all = await db
      .select()
      .from(posts)
      .where(eq(posts.authorId, Number(input)))

    return all
  }),
})

export type AppRouter = typeof appRouter
