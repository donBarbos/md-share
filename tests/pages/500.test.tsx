import React from 'react'
import { render, screen } from '@testing-library/react'
import NotFoundPage from '@pages/500'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>
    },
  }
})

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ pathname: '/500' })),
}))

jest.mock('@components/BackHomeButton', () => ({
  BackHomeButton: () => <button>Back to Home</button>,
}))

describe('NotFoundPage', () => {
  it('should render the correct title and description for SEO', () => {
    render(<NotFoundPage />)

    expect(document.title).toEqual('500: Server Error | md share')
  })

  it('should render a heading with the 500 status code and a message', () => {
    render(<NotFoundPage />)

    const heading = screen.getByRole('alert')
    expect(heading).toBeInTheDocument()
  })

  it('should render a BackHomeButton component', () => {
    render(<NotFoundPage />)
    const backHomeButton = screen.getByRole('button', { name: 'Back to Home' })
    expect(backHomeButton).toBeInTheDocument()
  })
})
