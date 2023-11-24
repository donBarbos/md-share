import { render, screen } from '@testing-library/react'

import Contact from '@pages/contact'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>
    },
  }
})

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ pathname: '/contact' })),
}))

describe('Contact', () => {
  /**
  it('should render the navbar item with accent color', () => {
    render(<Contact />)
  })
  */

  it('should render the correct title and description for SEO', () => {
    render(<Contact />)

    expect(document.title).toEqual('contact | md share')
  })

  it('should render a heading and subtitles', () => {
    render(<Contact />)
    const heading = screen.getByRole('heading', { name: /Contact/i, level: 1 })
    const mastermind = screen.getByRole('heading', { name: 'my cat – mastermind', level: 2 })
    const creator = screen.getByRole('heading', { name: 'donBaros – creator', level: 2 })

    expect(heading).toBeInTheDocument()
    expect(mastermind).toBeInTheDocument()
    expect(creator).toBeInTheDocument()
  })

  it('should render the correct contact information', () => {
    render(<Contact />)
    const email = screen.getByText(/donbarbos@proton.me/i)
    const site = screen.getByText(/donbarbos.vercel.app/i)
    const github = screen.getAllByText(/@donBarbos/i)[0]
    const telegram = screen.getAllByText(/@donBarbos/i)[1]
    const sourceCodeLink = screen.getByText(/this link/i)

    expect(email).toBeInTheDocument()
    expect(site).toBeInTheDocument()
    expect(github).toBeInTheDocument()
    expect(telegram).toBeInTheDocument()
    expect(sourceCodeLink).toBeInTheDocument()
  })
})
