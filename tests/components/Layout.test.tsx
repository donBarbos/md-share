import { render } from '@testing-library/react'
import { Layout } from '@components/Layout'
import { Header } from '@components/Header'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ pathname: '/' })),
}))

describe('Layout component', () => {
  it('should render Header component', () => {
    const { getByTestId } = render(<Layout>test content</Layout>)
    const header = getByTestId('header')
    expect(header).toBeInTheDocument()
  })

  it('should render Navbar component', () => {
    const { getByTestId } = render(<Header />)
    const navbar = getByTestId('navbar')
    expect(navbar).toBeInTheDocument()
  })

  it('should render Footer component', () => {
    const { getByTestId } = render(<Layout>test content</Layout>)
    const footer = getByTestId('footer')
    expect(footer).toBeInTheDocument()
  })

  it('should render ScrollToTop component', () => {
    const { getByTitle } = render(<Layout>test content</Layout>)
    const scrollToTop = getByTitle('Scroll to top')
    expect(scrollToTop).toBeInTheDocument()
  })

  it('should render children to main element', () => {
    const { container } = render(<Layout>test content</Layout>)
    expect(container.firstChild).toHaveTextContent('test content')
  })

  it('should render wrapper with the correct CSS class', () => {
    const { container } = render(<Layout>test content</Layout>)
    const wrapper = container.querySelector('.wrapper')
    expect(wrapper).toBeInTheDocument()
  })

  it('contains the expected child components', () => {
    const { container } = render(<Layout>test content</Layout>)
    const wrapper = container.querySelector('.wrapper')
    expect(wrapper).toContainElement(container.querySelector('header'))
    expect(wrapper).toContainElement(container.querySelector('main'))
    expect(wrapper).toContainElement(container.querySelector('footer'))
    expect(wrapper).toContainElement(container.querySelector('[data-testid="scroll-to-top"]'))
  })
})
