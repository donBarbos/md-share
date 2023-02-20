import { render, screen } from '@testing-library/react'
import Home from '@pages/index'
import { useRouter } from 'next/router'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>
    },
  }
})

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('Home', () => {
  beforeEach(() => {
    ;(useRouter as jest.Mock).mockReturnValue({
      pathname: '/',
    })
  })

  it('should render the correct title and description for SEO', () => {
    render(<Home />, { container: document.head })

    expect(document.title).toEqual('md share')
  })

  it('should render a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Just Upload Markdown File/i,
    })
    expect(heading).toBeInTheDocument()
  })
})
