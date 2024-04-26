import 'dotenv/config'
import Fastify from 'fastify'

import helloRoutes from './route/hello/index.js'

const isDev = process.env.NODE_ENV === 'development'

const PORT = process.env.PORT || 3000
const HOST = isDev ? 'localhost' : '0.0.0.0'

const fastify = Fastify({
  logger: isDev,
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
