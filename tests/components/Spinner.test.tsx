import { render, screen } from '@testing-library/react'
import { Spinner } from '@components/Spinner'

describe('Spinner component', () => {
  it('should render spinner', () => {
    render(<Spinner />)
    const loader = document.querySelector('.loader')
    expect(loader).toBeInTheDocument()
  })

  it('should render spinner with the correct CSS class', () => {
    render(<Spinner />)
    const spinner = screen.getByRole('div')
    expect(spinner).toHaveClass('background')
    const loader = screen.getByRole('img')
    expect(loader).toHaveClass('loader')
  })
})
