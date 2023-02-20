import { render, screen, fireEvent } from '@testing-library/react'
import { CopyLink } from '@components/CopyLink'

describe('CopyLink component', () => {
  it('should render an input field with the provided link', () => {
    const testLink = 'https://example.com'
    render(<CopyLink link={testLink} />)
    const input = screen.getByLabelText('copying field')
    expect(input).toHaveValue(testLink)
    expect(input).toBeReadOnly()
  })

  it('should copy the text to clipboard when the copy button is clicked', () => {
    const testLink = 'https://example.com'
    render(<CopyLink link={testLink} />)
    const button = screen.getByTitle('Copy to Clipboard')
    const input = screen.getByLabelText('copying field')
    const mockSelect = jest.fn()
    const mockBlur = jest.fn()
    input.select = mockSelect
    input.blur = mockBlur
    document.execCommand = jest.fn()
    fireEvent.click(button)
    expect(mockSelect).toHaveBeenCalledTimes(1)
    expect(document.execCommand).toHaveBeenCalledWith('copy')
    expect(mockBlur).toHaveBeenCalledTimes(1)
  })
})
