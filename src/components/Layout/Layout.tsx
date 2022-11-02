import Header from '@components/Header'
import Footer from '@components/Footer'
import { LayoutProps } from './types'
import { Wrapper, Main } from './styles'

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
