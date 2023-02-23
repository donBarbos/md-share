import { render } from '@testing-library/react'
import { Header } from '@components/Header'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ pathname: '/' })),
}))

describe('Header component', () => {
  it('should render ScrollProgressBar component', () => {
    const { getByTestId } = render(<Header />)
    const progressBar = getByTestId('progress-bar-container')
    expect(progressBar).toBeInTheDocument()
  })

  it('should render Navbar component', () => {
    const { getByTestId } = render(<Header />)
    const navbar = getByTestId('navbar')
    expect(navbar).toBeInTheDocument()
  })
})
