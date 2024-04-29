import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import App from '../App'

describe('App', () => {
  it('should be equal to 2', () => {
    expect(1 + 1).toEqual(2)
  })
  it('renders the App component', () => {
    render(<App />)
    expect(screen.getByTestId('app-title')).toBeInTheDocument()
  })
})
