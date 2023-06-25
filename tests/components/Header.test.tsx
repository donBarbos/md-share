import { render } from '@testing-library/react'

import { Header } from '@components/Header'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ pathname: '/' })),
}))

describe('Header component', () => {
  it('should render Navbar component', () => {
    const { getByRole } = render(<Header />)
    const navbar = getByRole('navigation')
    expect(navbar).toBeInTheDocument()
  })
})
