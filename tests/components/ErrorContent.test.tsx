import { render } from '@testing-library/react'

import { Modal } from '@components/Modal'
import { ErrorContent } from '@components/ErrorContent'

describe('ErrorContent in Modal component', () => {
  it('should render error message', async () => {
    const { getByText } = render(
      <Modal isActive={true} setActive={jest.fn()}>
        <ErrorContent error="uniq test error" />
      </Modal>,
    )
    const message = getByText('message error: uniq test error')
    expect(message).toBeInTheDocument()
  })
})
