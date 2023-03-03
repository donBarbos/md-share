import { render, fireEvent } from '@testing-library/react'

import { ThemeToggle } from '@components/ThemeToggle'

jest.mock('next-themes', () => ({
  useTheme: () => ({ theme: 'light', setTheme: jest.fn() }),
}))

describe('ThemeToggle component', () => {
  it('renders the component correctly', () => {
    const { getByRole } = render(<ThemeToggle />)
    expect(getByRole('button')).toBeInTheDocument()
  })

  it('toggles the theme when the button is clicked', () => {
    const { getByRole } = render(<ThemeToggle />)
    const button = getByRole('button')
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-label', 'auto')
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-label', 'auto')
  })
})
