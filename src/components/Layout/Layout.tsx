import type { LayoutProps } from './types'
import * as Styled from './styles'
import Header from '@components/Header'
import Footer from '@components/Footer'

const Layout = ({ children }: LayoutProps) => {
  return (
    <Styled.Wrapper>
      <Header />
      <Styled.Main>{children}</Styled.Main>
      <Footer />
    </Styled.Wrapper>
  )
}

export default Layout
