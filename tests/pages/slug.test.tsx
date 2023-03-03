import { render } from '@testing-library/react'

import PostPage from '@pages/[slug]'

import type { IPage } from '@interfaces'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>
    },
  }
})

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ pathname: '/404' })),
}))

describe('[slug] page', () => {
  const mockPage = {
    _id: 'uniq-a1b2c3',
    title: 'Test Page',
    author: 'John Doe',
    text: '## Test Heading\nThis is a test page.',
  } as IPage

  it('should render markdown text', () => {
    const { getByText } = render(<PostPage page={mockPage} />)
    expect(getByText('Test Heading')).toBeInTheDocument()
    expect(getByText('This is a test page.')).toBeInTheDocument()
  })

  it('should render the correct metadata', () => {
    render(<PostPage page={mockPage} />)

    const expectedTitle = `${mockPage.title} | md share`
    expect(document.title).toBe(expectedTitle)
    expect(document.querySelector('meta[name="twitter:title"]')!.getAttribute('content')).toBe(
      expectedTitle,
    )
    expect(document.querySelector('meta[property="og:title"]')!.getAttribute('content')).toBe(
      expectedTitle,
    )
  })

  it('should render the correct markdown styles', () => {
    const { getByRole } = render(<PostPage page={mockPage} />)
    const markdownElement = getByRole('heading')
    const style = window.getComputedStyle(markdownElement)
    expect(style.fontSize).toEqual('1.5em')
    expect(style.fontWeight).toEqual('bold')
  })
})
