import { render, screen } from '@testing-library/react'
import { ErrorContent } from '@components/ErrorContent'

describe('ErrorContent component', () => {
  const mockProps = {
    error: 'Some error message',
  }

  it('should render error title', () => {
    render(<ErrorContent {...mockProps} />)
    const titleElement = screen.getByText(/Ooops! Internal Server Error/i)
    expect(titleElement).toBeInTheDocument()
  })

  it('should render error subtitle', () => {
    render(<ErrorContent {...mockProps} />)
    const subtitleElement = screen.getByText(/Cannot complete your request/i)
    expect(subtitleElement).toBeInTheDocument()
  })

  it('should render error contact link', () => {
    render(<ErrorContent {...mockProps} />)
    const linkElement = screen.getByRole('link', { name: /contact us/i })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement.getAttribute('href')).toEqual('./contact')
  })

  it('should render error message', () => {
    render(<ErrorContent {...mockProps} />)
    const messageElement = screen.getByText(/message error:/i)
    expect(messageElement).toBeInTheDocument()
    const errorMessageElement = screen.getByText(/Some error message/i)
    expect(errorMessageElement).toBeInTheDocument()
  })
})
