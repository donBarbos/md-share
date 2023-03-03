import { render } from '@testing-library/react'

import { SEO } from '@components/SEO'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>
    },
  }
})

describe('SEO component', () => {
  const mockProps = {
    title: 'Test Title',
    author: 'Test Author',
    description: 'Test Description',
    image: '/test-image.png',
    lang: 'en',
    pathname: '/test',
  }

  it('should render the correct page title', async () => {
    render(<SEO {...mockProps} />, { container: document.head })

    expect(document.title).toBe('Test Title | md share')
  })

  it('should render the correct page title without props', async () => {
    render(<SEO />, { container: document.head })

    expect(document.title).toBe('md share')
  })

  it('should render the correct meta tags', async () => {
    render(<SEO {...mockProps} />, { container: document.head })

    const expectedTitle = `${mockProps.title} | md share`
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toBe(
      'Test Description',
    )
    expect(document.querySelector('meta[name="twitter:title"]')?.getAttribute('content')).toBe(
      expectedTitle,
    )
    expect(
      document.querySelector('meta[name="twitter:description"]')?.getAttribute('content'),
    ).toBe('Test Description')
    expect(document.querySelector('meta[name="twitter:card"]')?.getAttribute('content')).toBe(
      'summary_large_image',
    )
    expect(document.querySelector('meta[property="og:title"]')?.getAttribute('content')).toBe(
      expectedTitle,
    )
    expect(document.querySelector('meta[property="og:description"]')?.getAttribute('content')).toBe(
      'Test Description',
    )
    expect(document.querySelector('meta[property="og:locale"]')?.getAttribute('content')).toBe('en')
    expect(document.querySelector('meta[property="og:type"]')?.getAttribute('content')).toBe(
      'website',
    )
    expect(document.querySelector('meta[property="og:site_name"]')?.getAttribute('content')).toBe(
      expectedTitle,
    )
  })
})
