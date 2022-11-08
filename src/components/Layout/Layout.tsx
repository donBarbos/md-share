import type { LayoutProps } from './types'
import { Wrapper, Main } from './styles'
import Header from '@components/Header'
import Footer from '@components/Footer'

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  )
}

export default Layout
