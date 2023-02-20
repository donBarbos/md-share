import { render, screen } from '@testing-library/react'
import { GlowButton } from '@components/GlowButton'

describe('GlowButton component', () => {
  it('should render button with the correct text', () => {
    const buttonText = 'Click me!'
    render(<GlowButton text={buttonText} />)

    const button = screen.getByRole('button', { name: buttonText })
    expect(button).toBeInTheDocument()
  })

  it('should render button with the correct type, title, and form method', () => {
    const buttonType = 'submit'
    const buttonTitle = 'Submit form'
    const buttonFormMethod = 'post'
    render(
      <GlowButton
        text="Click me!"
        type={buttonType}
        title={buttonTitle}
        formMethod={buttonFormMethod}
      />,
    )

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', buttonType)
    expect(button).toHaveAttribute('title', buttonTitle)
    expect(button).toHaveAttribute('formMethod', buttonFormMethod)
  })

  it('should render button with the correct CSS class', () => {
    render(<GlowButton text="Click me!" />)

    const button = screen.getByRole('button')
    expect(button).toHaveClass('glow_button')
  })
})
