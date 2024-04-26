import { users } from 'db'
import type { FastifyInstance } from 'fastify'

import { db } from '../../client.js'

export default async function (fastify: FastifyInstance) {
  fastify.get('/', async () => {
    const res = await db.select().from(users)

    console.log('users: ', res)

    return { message: 'Hello' }
  })
}
