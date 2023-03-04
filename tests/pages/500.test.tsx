import { render } from '@testing-library/react'

import NotFoundPage, { getStaticProps } from '@pages/500'

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
  it('should return the correct object from getStaticProps', async () => {
    const context: any = { params: { slug: 'readme-001abc' } }
    const res: any = await getStaticProps(context)
    expect(res).toEqual({ props: {} })
  })

  it('should render the correct title and description for SEO', async () => {
    render(<NotFoundPage />)

    expect(document.title).toEqual('500: Server Error | md share')
  })

  it('should render a heading with the 500 status code and a message', () => {
    const { getByRole } = render(<NotFoundPage />)

    const heading = getByRole('alert')
    expect(heading).toBeInTheDocument()
  })

  it('should render a BackHomeButton component', () => {
    const { getByRole } = render(<NotFoundPage />)
    const backHomeButton = getByRole('button', { name: 'Back to Home' })
    expect(backHomeButton).toBeInTheDocument()
  })
})
