import { useQuery } from '@tanstack/react-query'

const getContact = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    name: 'John Doe',
    email: 'j@m.com',
  }
}

export default function Contact() {
  const { data, isPending } = useQuery({
    queryKey: ['contact', 1],
    queryFn: () => {
      return getContact()
    },
  })

  if (isPending) return <div>Loading...</div>

  return <div>{JSON.stringify(data, null, 2)}</div>
}
