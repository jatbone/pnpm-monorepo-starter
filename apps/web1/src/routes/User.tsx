import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import trpc from '../trpc'

export default function User() {
  const params = useParams()

  const { data } = useQuery({
    enabled: !!params.userId,
    queryKey: ['userById', params.id],
    queryFn: async () => {
      const users = await trpc.userById.query(params.userId ?? '')
      return users
    },
    retry: 0,
  })

  const { data: data2 } = useQuery({
    enabled: !!params.userId,
    queryKey: ['userPosts', params.id],
    queryFn: async () => {
      const usersPosts = await trpc.userPosts.query(params.userId ?? '')
      return usersPosts
    },
    retry: 0,
  })

  console.log('user', data)
  console.log('user posts', data2)

  return (
    <div>
      <h1>User</h1>
    </div>
  )
}
