import { render, fireEvent } from '@testing-library/react'

import { ScrollToTop } from '@components/ScrollToTop'

global.scrollTo = jest.fn(() => {
  fireEvent.scroll(window, { target: { scrollY: 0 } })
})

describe('ScrollToTop component', () => {
  it('should renders without crashing', async () => {
    const { getByTitle } = render(<ScrollToTop />)
    const button = getByTitle('Scroll to top')
    expect(button).toBeInTheDocument()
  })

  it('should scroll to top when button is clicked', async () => {
    const { getByTitle } = render(<ScrollToTop />)
    const button = getByTitle('Scroll to top')

    // scroll down
    fireEvent.scroll(window, { target: { scrollY: 500 } })

    expect(window.scrollY).toEqual(500)
    fireEvent.click(button)
    expect(window.scrollY).toEqual(0)
  })
})
