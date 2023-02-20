import { render } from '@testing-library/react'
import { SEO } from '@components/SEO'

describe('SEO component', () => {
  const mockProps = {
    title: 'Test Title',
    author: 'Test Author',
    description: 'Test Description',
    image: '/test-image.png',
    lang: 'en',
    pathname: '/test',
  }

  it('should render the correct home title', () => {
    render(<SEO />)
    expect(document.title).toEqual('md share')
  })

  it('should render the correct page title', () => {
    render(<SEO {...mockProps} />)
    expect(document.title).toBe('Test Title | md share')
  })

  it('should render the correct meta description', () => {
    render(<SEO {...mockProps} />)
    const meta = document.querySelector('meta[name="description"]')
    expect(meta?.getAttribute('content')).toBe('Test Description')
  })

  it('should render the correct canonical link', () => {
    render(<SEO {...mockProps} />)
    const link = document.querySelector('link[rel="canonical"]')
    expect(link?.getAttribute('href')).toBe('https://md-share.vercel.app')
  })

  it('should render the correct open graph metadata', () => {
    render(<SEO {...mockProps} />)
    expect(document.querySelector('meta[property="og:title"]')?.getAttribute('content')).toBe(
      'Test Title | md share',
    )
    expect(document.querySelector('meta[property="og:description"]')?.getAttribute('content')).toBe(
      'Test Description',
    )
    expect(document.querySelector('meta[property="og:url"]')?.getAttribute('content')).toBe(
      'https://md-share.vercel.app/test',
    )
    expect(document.querySelector('meta[property="og:type"]')?.getAttribute('content')).toBe(
      'website',
    )
    expect(document.querySelector('meta[property="og:locale"]')?.getAttribute('content')).toBe('en')
    expect(document.querySelector('meta[property="og:site_name"]')?.getAttribute('content')).toBe(
      'Test Title | md share',
    )
    expect(document.querySelector('meta[property="og:image"]')?.getAttribute('content')).toBe(
      'https://md-share.vercel.app/test-image.png',
    )
  })

  it('should render the correct Twitter card metadata', () => {
    render(<SEO {...mockProps} />)
    expect(document.querySelector('meta[name="twitter:card"]')?.getAttribute('content')).toBe(
      'summary_large_image',
    )
    expect(document.querySelector('meta[name="twitter:url"]')?.getAttribute('content')).toBe(
      'https://md-share.vercel.app/test',
    )
    expect(document.querySelector('meta[name="twitter:title"]')?.getAttribute('content')).toBe(
      'Test Title | md share',
    )
    expect(
      document.querySelector('meta[name="twitter:description"]')?.getAttribute('content'),
    ).toBe('Test Description')
    expect(document.querySelector('meta[name="twitter:image"]')?.getAttribute('content')).toBe(
      'https://md-share.vercel.app/test-image.png',
    )
  })
})
