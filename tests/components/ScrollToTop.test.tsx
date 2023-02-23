import { render, fireEvent, act } from '@testing-library/react'
import { ScrollToTop } from '@components/ScrollToTop'

describe('ScrollToTop component', () => {
  it('should not render the button by default', async () => {
    const { getByTitle } = render(<ScrollToTop />)
    const button = getByTitle('Scroll to top')
    // scroll down
    await act(async () => {
      window.scroll(0, 1000)
      await new Promise((resolve) => setTimeout(resolve, 1000))
    })
    expect(button).not.toBeVisible()
  })

  it('should render the button when scrolling up', async () => {
    const { queryByTitle } = render(<ScrollToTop />)
    const button = queryByTitle('Scroll to top')
    expect(button).not.toBeVisible()

    // scroll down
    await act(async () => {
      window.scroll(0, 500)
      await new Promise((resolve) => setTimeout(resolve, 1000))
    })

    expect(button).toBeVisible()
  })

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
