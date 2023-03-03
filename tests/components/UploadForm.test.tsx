import { render } from '@testing-library/react'

import { UploadForm } from '@components/UploadForm'

describe('UploadForm component', () => {
  it('should render the form', () => {
    const { getByRole, getByText } = render(<UploadForm />)
    const input = getByText('Drag & drop file here')
    const button = getByRole('button', { name: 'SHARE' })

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
})
