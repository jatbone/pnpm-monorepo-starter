import { render, fireEvent, screen } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest'

import Fetch from '../components/Fetch'

const server = setupServer(
  http.get('/greeting', () => {
    return HttpResponse.json({ greeting: 'hello there1' })
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Fetch', async () => {
  it('fetches a greeting', async () => {
    render(<Fetch url="/greeting" />)

    fireEvent.click(screen.getByText('Load Greeting'))
    await screen.findByTestId('fetch-greeting')

    expect(screen.getByTestId('fetch-greeting')).toHaveTextContent(
      'hello there',
    )
    expect(screen.getByTestId('fetch-button')).toBeDisabled()
  })

  it('fetcher with error', async () => {
    server.use(
      http.get('/greeting', () => {
        return new HttpResponse(null, { status: 500 })
      }),
    )

    render(<Fetch url="/greeting" />)

    fireEvent.click(screen.getByTestId('fetch-button'))

    await screen.findByTestId('fetch-error')

    expect(screen.getByTestId('fetch-button')).not.toBeDisabled()
    expect(screen.getByTestId('fetch-error')).toHaveTextContent(
      'Failed to fetch',
    )
  })
})
