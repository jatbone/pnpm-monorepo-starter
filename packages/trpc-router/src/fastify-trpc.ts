import { initTRPC } from '@trpc/server'

import { FastifyContext } from './fastify-context.js'

const t = initTRPC.context<FastifyContext>().create()

export const router = t.router
export const publicProcedure = t.procedure
