import { render, screen, fireEvent } from '@testing-library/react'
import { CopyLink } from '@components/CopyLink'

describe('CopyLink component', () => {
  const mockProps = {
    link: 'https://example.com',
  }

  it('should render', () => {
    render(CopyLink)
  })

  it('should render an input field with the provided link', () => {
    render(<CopyLink {...mockProps} />)
    const input = screen.getByLabelText('copying field')
    expect(input).toHaveValue(/example.com/i)
    expect(input).toBeReadOnly()
  })

  it('should copy the text to clipboard when the copy button is clicked', () => {
    render(<CopyLink {...mockProps} />)
    const button = screen.getByTitle('Copy to Clipboard')
    const input = screen.getByLabelText('copying field')
    const mockSelect = jest.fn()
    const mockBlur = jest.fn()
    input.onselect = mockSelect
    input.blur = mockBlur
    document.execCommand = jest.fn()
    fireEvent.click(button)
    expect(mockSelect).toHaveBeenCalledTimes(1)
    expect(document.execCommand).toHaveBeenCalledWith('copy')
    expect(mockBlur).toHaveBeenCalledTimes(1)
  })
})
