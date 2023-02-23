import { render, fireEvent } from '@testing-library/react'
import { Navbar } from '@components/Navbar'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ pathname: '/' })),
}))

describe('Navbar component', () => {
  it('should render the logo', () => {
    const { getByText } = render(<Navbar />)

    expect(getByText('.mdShare')).toBeInTheDocument()
  })

  it('should render the correct number of navigation links', () => {
    const { getAllByRole } = render(<Navbar />)
    const navLinks = getAllByRole('link')

    expect(navLinks.length).toEqual(4)
  })

  it('should have the active class on the current page link', () => {
    const { getByText } = render(<Navbar />)
    const aboutLink = getByText('About')

    expect(aboutLink).toHaveClass('active')
  })

  it('should call setActive when clicking on the burger menu button', () => {
    const setActive = jest.fn()
    const { getByTestId } = render(<Navbar />)

    const button = getByTestId('burger-menu')
    fireEvent.click(button)

    expect(setActive).toHaveBeenCalledWith(true)
  })

  it('should toggle the active class on the menu when clicking on the burger menu button', () => {
    const { getByTestId, getByRole } = render(<Navbar />)

    const button = getByTestId('burger-menu')
    fireEvent.click(button)

    const menu = getByRole('menu')
    expect(menu).toHaveClass('active')

    fireEvent.click(button)

    expect(menu).not.toHaveClass('active')
  })
})
