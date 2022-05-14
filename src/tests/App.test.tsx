import App from '../App'
import React from 'react'
import { render, screen } from '@testing-library/react'

test('aikak es el señor', () => {
  render(<App />)
  const linkElement = screen.getByText(/aikak/i)
  expect(linkElement).toBeInTheDocument()
})
