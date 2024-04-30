import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Contact from './routes/Contact.tsx'
import Freestyle from './routes/Freestyle.tsx'
import Home from './routes/Home.tsx'
import './styles/index.scss'

// Create a client
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
  {
    path: '/freestyle',
    element: <Freestyle />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
