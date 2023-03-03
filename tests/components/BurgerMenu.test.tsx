import { render, fireEvent } from '@testing-library/react'

import { BurgerMenu } from '@components/BurgerMenu'

describe('BurgerMenu component', () => {
  it('should render with the correct CSS class', () => {
    const { container } = render(<BurgerMenu isActive={false} setActive={() => {}} />)
    const burgerMenu = container.firstChild as HTMLElement

    expect(burgerMenu).toHaveClass('hamburger')
  })

  it('should render with the active class when isActive is true', () => {
    const { container } = render(<BurgerMenu isActive={true} setActive={() => {}} />)
    const burgerMenu = container.firstChild as HTMLElement

    expect(burgerMenu).toHaveClass('hamburger active')
  })

  it('should calls setActive when clicked', () => {
    const setActive = jest.fn()
    const { container } = render(<BurgerMenu isActive={false} setActive={setActive} />)
    const burgerMenu = container.firstChild as HTMLElement

    fireEvent.click(burgerMenu)

    expect(setActive).toHaveBeenCalledTimes(1)
  })
})
