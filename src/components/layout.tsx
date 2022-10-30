import { ReactChild } from 'react'
import styled from 'styled-components'
import Header from '@components/header'
import Footer from '@components/footer'

interface LayoutProps {
  children?: ReactChild | ReactChild[]
}

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
  flex: 1 0 auto;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`
