import { render, fireEvent } from '@testing-library/react'
import user from '@testing-library/user-event'

import { Modal } from '@components/Modal'

describe('Modal component', () => {
  it('should focus on button when pressing Tab', async () => {
    const { getByTestId } = render(
      <Modal isActive={true} setActive={jest.fn()}>
        <button data-testid="first-button">first button</button>
        <button data-testid="second-button">second button</button>
      </Modal>,
    )
    const firstBtn = getByTestId('first-button')
    const secondBtn = getByTestId('second-button')

    firstBtn.focus()
    expect(firstBtn).toHaveFocus()
    await user.keyboard('{Tab}')
    expect(secondBtn).toHaveFocus()
  })

  it('should render with class active when isActive is true', () => {
    const { container } = render(
      <Modal isActive={true} setActive={jest.fn()}>
        <p>Modal content</p>
      </Modal>,
    )
    const modal = container.firstChild

    expect(modal).toHaveClass('active')
  })

  it('should render without class active when isActive is false', () => {
    const { container } = render(
      <Modal isActive={false} setActive={jest.fn()}>
        <p>Modal content</p>
      </Modal>,
    )
    const modal = container.firstChild

    expect(modal).not.toHaveClass('active')
  })

  it('should call setActive with false when clicking on the modal background', () => {
    const setActive = jest.fn()
    const { container } = render(
      <Modal isActive={true} setActive={setActive}>
        <p>Modal content</p>
      </Modal>,
    )
    const modal = container.firstChild as Element | Node | Document | Window

    fireEvent.click(modal)

    expect(setActive).toHaveBeenCalledWith(false)
  })

  it('should not call setActive when clicking on the modal content', () => {
    const setActive = jest.fn()
    const { getByText } = render(
      <Modal isActive={true} setActive={setActive}>
        <p>Modal content</p>
      </Modal>,
    )

    fireEvent.click(getByText('Modal content'))

    expect(setActive).not.toHaveBeenCalled()
  })
})
