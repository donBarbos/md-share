import { render } from '@testing-library/react'
import { Footer } from '@components/Footer'

describe('Footer component', () => {
  it('should render the current year', () => {
    const currentYear = new Date().getFullYear()
    const { getByText } = render(<Footer />)
    expect(getByText(`© ${currentYear}`)).toBeInTheDocument()
  })

  it('should render the author link', () => {
    const { getByText } = render(<Footer />)
    expect(getByText('donBarbos')).toHaveAttribute('href', 'https://www.dontkillkenny.com')
  })
})
