import { render, screen } from '@testing-library/react'
import { BackHomeButton } from '@components/BackHomeButton'

describe('BackHomeButton component', () => {
  it('should render a link with the correct text and title', () => {
    const expectedText = 'go back home'
    const expectedTitle = 'Back to Homepage'
    const { getByText } = render(<BackHomeButton text={expectedText} title={expectedTitle} />)
    const link = getByText(expectedText)

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('title', expectedTitle)
  })

  it('should render a link with the correct href', () => {
    const expectedHref = '/'
    const { container } = render(<BackHomeButton href={expectedHref} />)
    const link = container.querySelector('a')

    expect(link).toHaveAttribute('href', expectedHref)
  })

  it('should render a link with the correct CSS class', () => {
    render(<BackHomeButton />)

    const button = screen.getByRole('link')
    expect(button).toHaveClass('backhome_button')
  })
})
