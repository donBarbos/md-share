import { render, fireEvent, act } from '@testing-library/react'

import { ScrollToTop } from '@components/ScrollToTop'

global.scroll = jest.fn()

describe('ScrollToTop component', () => {
  // TODO: it('should not render the button by default', async () => {})

  // TODO: it('should render the button after scrolling up', async () => {})

  it('should scroll to top when button is clicked', async () => {
    const { getByTitle } = render(<ScrollToTop />)
    const button = getByTitle('Scroll to top')

    await fireEvent.scroll(window, { target: { scrollY: 500 } })
    // scroll down
    await act(async () => {
      window.scroll(500, 500)
      await new Promise((resolve) => setTimeout(resolve, 1000))
    })
    setTimeout(() => {
      expect(button).toBeInTheDocument()
      expect(window.scrollY).toEqual(0)
    }, 1000)

    // fireEvent.click(button)

    expect(window.pageYOffset).toEqual(0)
  })
})
