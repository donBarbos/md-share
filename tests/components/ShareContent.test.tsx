import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ShareContent } from '@components/ShareContent'

describe('ShareContent component', () => {
  it('should render the share links', () => {
    const slug = 'example-slug'
    render(<ShareContent slug={slug} />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(7)

    expect(links[0]).toHaveAttribute(
      'href',
      `https://www.facebook.com/sharer/sharer.php?u=https://md-share.vercel.app/${slug}`,
    )
    expect(links[1]).toHaveAttribute(
      'href',
      `https://twitter.com/intent/tweet?text=https://md-share.vercel.app/${slug}`,
    )
    expect(links[2]).toHaveAttribute(
      'href',
      `https://www.linkedin.com/sharing/share-offsite/?url=https://md-share.vercel.app/${slug}`,
    )
    expect(links[3]).toHaveAttribute(
      'href',
      `https://www.instagram.com/?url=https://md-share.vercel.app/${slug}`,
    )
    expect(links[4]).toHaveAttribute(
      'href',
      `https://t.me/share/url?url=https://md-share.vercel.app/${slug}`,
    )
    expect(links[5]).toHaveAttribute(
      'href',
      `https://api.whatsapp.com/send?text=https://md-share.vercel.app/${slug}`,
    )
    expect(links[6]).toHaveAttribute('href', `mailto:?body=https://md-share.vercel.app/${slug}`)
  })

  it('should render the copy link button', () => {
    const slug = 'example-slug'
    render(<ShareContent slug={slug} />)

    const copyButton = screen.getByRole('button', { name: 'Copy Link' })
    expect(copyButton).toBeInTheDocument()

    userEvent.click(copyButton)

    const successMessage = screen.getByText('Link copied to clipboard!')
    expect(successMessage).toBeInTheDocument()
  })

  it('should render the open button', () => {
    const slug = 'example-slug'
    render(<ShareContent slug={slug} />)

    const openButton = screen.getByRole('link', { name: 'open →' })
    expect(openButton).toBeInTheDocument()

    expect(openButton).toHaveAttribute('href', `https://md-share.vercel.app/${slug}`)
    expect(openButton).toHaveAttribute('target', '_blank')
    expect(openButton).toHaveAttribute('rel', 'noopener noreferrer')
    expect(openButton).toHaveAttribute('prefetch', '')
  })
})
