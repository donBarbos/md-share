import { render } from '@testing-library/react'

import { Navbar } from '@components/Navbar'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ pathname: '/about' })),
}))

describe('Navbar component', () => {
  it('should render the logo', () => {
    const { getByText } = render(<Navbar />)
    const banner = getByText('.mdShare')
    expect(banner).toBeInTheDocument()
  })

  it('should render the correct number of navigation links', () => {
    const { getAllByRole } = render(<Navbar />)
    const navLinks = getAllByRole('link')
    expect(navLinks.length).toEqual(4)
  })

  it('should have the active class on the current page link', () => {
    const { getByText } = render(<Navbar />)
    const homeLink = getByText('Home')
    const aboutLink = getByText('About')
    const contactLink = getByText('Contact')
    expect(homeLink).not.toHaveClass('active')
    expect(aboutLink).toHaveClass('active')
    expect(contactLink).not.toHaveClass('active')
  })
})
