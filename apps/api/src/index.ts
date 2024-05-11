import cors from '@fastify/cors'
import {
  fastifyTRPCPlugin,
  FastifyTRPCPluginOptions,
} from '@trpc/server/adapters/fastify'
import * as dotenv from 'dotenv'
import Fastify from 'fastify'
import { appRouter, type AppRouter, createFastifyContext } from 'trpc-router'

import helloRoutes from './route/hello/index.js'

dotenv.config()

const isDev = process.env.NODE_ENV === 'development'

const PORT = process.env.PORT || 3000
const HOST = isDev ? 'localhost' : '0.0.0.0'

const fastify = Fastify({
  maxParamLength: 5000,
  logger: isDev,
})

fastify.register(cors)

fastify.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  trpcOptions: {
    createContext: createFastifyContext,
    router: appRouter,
    onError({ path, error }) {
      console.error(`Error in tRPC handler on path '${path}':`, error)
    },
  } satisfies FastifyTRPCPluginOptions<AppRouter>['trpcOptions'],
})

fastify.register(helloRoutes, { prefix: '/hello' })

const start = async () => {
  try {
    await fastify.listen({ host: HOST, port: Number(PORT) })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
