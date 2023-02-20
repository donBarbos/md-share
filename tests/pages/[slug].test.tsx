import { render } from '@testing-library/react'
import { PostPage, getServerSideProps } from '@pages/[slug]'
import md from 'markdown-it'

jest.mock('node-fetch')
const { Response } = jest.requireActual('node-fetch')
import fetchMock from 'node-fetch'

const mockPage = {
  title: 'Test Page',
  author: 'John Doe',
  text: '## Test Heading\nThis is a test page.',
}

describe('[slug] page', () => {
  it('should render markdown text', () => {
    const { getByText } = render(<PostPage page={mockPage} />)
    expect(getByText('Test Heading')).toBeInTheDocument()
    expect(getByText('This is a test page.')).toBeInTheDocument()
  })

  it('should return notFound when API response is not ok', async () => {
    const context = { query: { slug: 'test-page' } }
    fetchMock.mockReturnValue(Promise.resolve(new Response(JSON.stringify({ success: false }))))
    const response = await getServerSideProps(context)
    expect(response).toEqual({ notFound: true })
  })

  it('should return props when API response is ok', async () => {
    const context = { query: { slug: 'test-page' } }
    fetchMock.mockReturnValue(Promise.resolve(new Response(JSON.stringify({ page: mockPage }))))
    const response = await getServerSideProps(context)
    expect(response.props.page).toEqual(mockPage)
  })

  it('should render the correct metadata', () => {
    render(<PostPage page={mockPage} />)
    const titleElement = document.querySelector('title')
    expect(titleElement.textContent).toEqual(mockPage.title)
    const authorElement = document.querySelector('meta[name="author"]')
    expect(authorElement.getAttribute('content')).toEqual(mockPage.author)
  })

  it('should render the correct markdown styles', () => {
    const { getByTestId } = render(<PostPage page={mockPage} />)
    const markdownElement = getByTestId('markdown-body')
    const style = window.getComputedStyle(markdownElement)
    expect(style.fontSize).toEqual('16px')
    expect(style.color).toEqual('rgb(68, 68, 68)')
    expect(style.lineHeight).toEqual('1.5')
    expect(style.fontFamily).toContain('Inter')
  })
})
