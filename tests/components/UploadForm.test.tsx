import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { UploadForm } from '@components/UploadForm'

describe('UploadForm component', () => {
  const mockFetch = jest.fn()

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => mockFetch)
  })

  afterEach(() => {
    global.fetch.mockClear()
    delete global.fetch
  })

  it('should render the form', () => {
    const { getByRole } = render(<UploadForm />)
    const form = getByRole('form')
    const input = getByRole('textbox', { name: 'Drag & drop file here or' })
    const button = getByRole('button', { name: 'Share selected file' })

    expect(form).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should upload the file on form submission', async () => {
    const fakeText = 'This is a fake file'
    const fakeName = 'test'
    const fakeSlug = 'abc123'

    mockFetch.mockResolvedValueOnce({
      json: async () => ({ success: true, slug: fakeSlug }),
    })

    render(<UploadForm />)
    const input = screen.getByLabelText(/Drag & drop file here/)
    const file = new File([fakeText], fakeName, { type: 'text/plain' })

    fireEvent.change(input, { target: { files: [file] } })
    fireEvent.submit(screen.getByRole('form'))

    expect(mockFetch).toHaveBeenCalledWith('/api/v1/pages/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: fakeText,
        fileName: fakeName,
      }),
    })

    await waitFor(() => {
      expect(screen.getByText(`/${fakeSlug}`)).toBeInTheDocument()
    })
  })

  it('should show error message on failed upload', async () => {
    const fakeError = { message: 'Failed to upload file' }

    mockFetch.mockRejectedValueOnce(fakeError)

    render(<UploadForm />)
    const input = screen.getByLabelText(/Drag & drop file here/)
    const file = new File(['This is a fake file'], 'test', { type: 'text/plain' })

    fireEvent.change(input, { target: { files: [file] } })
    fireEvent.submit(screen.getByRole('form'))

    expect(mockFetch).toHaveBeenCalledWith('/api/v1/pages/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: 'This is a fake file',
        fileName: 'test',
      }),
    })

    await waitFor(() => {
      expect(screen.getByText(fakeError.message)).toBeInTheDocument()
    })
  })
})
