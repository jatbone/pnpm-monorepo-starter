import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify'
import 'fastify'

export function createFastifyContext({
  req,
  res,
}: CreateFastifyContextOptions) {
  return { req, res, user: 'anonymous' }
}
export type FastifyContext = Awaited<ReturnType<typeof createFastifyContext>>
