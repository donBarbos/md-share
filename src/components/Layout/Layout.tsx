import styled from 'styled-components'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { LayoutProps } from './types'

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

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  padding: 0 2rem;
`

const Main = styled.main`
  font-family: -apple-system, BlinkMacSystemFont, Arial, sans-serif;
  margin-top: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 4rem;
`
