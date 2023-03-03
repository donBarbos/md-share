import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { ScrollProgressBar } from '@components/ScrollProgressBar'

describe('ScrollProgressBar component', () => {
  it('should render progress bar with correct CSS classes', () => {
    const { getByRole } = render(<ScrollProgressBar />)
    const progressBar = getByRole('scrollbar')
    expect(progressBar).toHaveClass('progress_bar')
  })

  it('should render progress bar scales correctly as user scrolls', () => {
    const { getByRole } = render(<ScrollProgressBar />)
    const progressBar = getByRole('scrollbar')

    act(() => {
      // simulate scrolling down the page
      document.documentElement.scrollTop = 1000
      window.dispatchEvent(new Event('scroll'))
    })

    expect(progressBar).toHaveStyle('transform: scale(1, 1)')
  })

  it('should the event listener is removed when component unmounts', () => {
    const removeEventListener = jest.spyOn(window, 'removeEventListener')
    const { unmount } = render(<ScrollProgressBar />)
    unmount()
    expect(removeEventListener).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
