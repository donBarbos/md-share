import { render } from '@testing-library/react'

import { Layout } from '@components/Layout'
import { Header } from '@components/Header'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ pathname: '/' })),
}))

describe('Layout component', () => {
  it('should render Navbar component', () => {
    const { getByRole } = render(<Header />)
    const navbar = getByRole('navigation')
    expect(navbar).toBeInTheDocument()
  })

  it('should render Footer component', () => {
    const { getByRole } = render(
      <Layout>
        <p>test content</p>
      </Layout>,
    )
    const footer = getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it('should render ScrollToTop component', () => {
    const { getByTitle } = render(
      <Layout>
        <p>test content</p>
      </Layout>,
    )
    const scrollToTop = getByTitle('Scroll to top')
    expect(scrollToTop).toBeInTheDocument()
  })

  it('should render children to main element', () => {
    const { container } = render(
      <Layout>
        <p>test content</p>
      </Layout>,
    )
    expect(container.firstChild).toHaveTextContent('test content')
  })

  it('should render wrapper with the correct CSS class', () => {
    const { container } = render(
      <Layout>
        <p>test content</p>
      </Layout>,
    )
    const wrapper = container.querySelector('.wrapper')
    expect(wrapper).toBeInTheDocument()
  })

  it('contains the expected child components', () => {
    const { container } = render(
      <Layout>
        <p>test content</p>
      </Layout>,
    )
    const wrapper = container.querySelector('.wrapper')
    expect(wrapper).toContainElement(container.querySelector('header'))
    expect(wrapper).toContainElement(container.querySelector('main'))
    expect(wrapper).toContainElement(container.querySelector('footer'))
    expect(wrapper).toContainElement(container.querySelector('svg'))
  })
})
