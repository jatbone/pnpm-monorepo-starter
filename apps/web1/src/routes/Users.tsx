import { useQuery } from '@tanstack/react-query'
import { Outlet } from 'react-router-dom'

import trpc from '../trpc'

export default function Users() {
  const { data } = useQuery({
    queryKey: ['userList'],
    queryFn: async () => {
      const users = await trpc.userList.query()
      return users
    },
  })

  console.log('users', data)

  return (
    <div>
      <h1>Users</h1>
      <Outlet />
    </div>
  )
}
