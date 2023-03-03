import React from 'react'

import { render, screen } from '@testing-library/react'

import About from '@pages/about'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>
    },
  }
})

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ pathname: '/about' })),
}))

describe('About', () => {
  it('should render the correct title and description for SEO', () => {
    render(<About />, { container: document.head })

    expect(document.title).toEqual('about | md share')
  })

  it('should render a heading and a description', () => {
    render(<About />)

    const heading = screen.getByRole('heading', { name: /About this site/i })
    const description = screen.getByText(/Imagine the situation/i)

    expect(heading).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('should render a list of instructions', () => {
    render(<About />)

    const instructions = screen.getAllByRole('list')

    expect(instructions).toHaveLength(5)

    expect(instructions[2]).toHaveTextContent('1. Go to Homepage')
    expect(instructions[2].querySelector('a')).toHaveAttribute('href', './')
    expect(instructions[3]).toHaveTextContent('2. Upload your note.md')
    expect(instructions[4]).toHaveTextContent('3. Share a link to the generated page')
  })
})
