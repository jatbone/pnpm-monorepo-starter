import { createTRPCClient, httpBatchLink } from '@trpc/client'
import type { AppRouter } from 'trpc-router'

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
})

export default trpc
