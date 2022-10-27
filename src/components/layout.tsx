import styled from 'styled-components'
import { ReactChild } from 'react'
import Header from '@components/header'
import Footer from '@components/footer'

interface LayoutProps {
  location?: string
  children?: ReactChild | ReactChild[]
}

const Layout = ({ location, children }: LayoutProps) => {
  return (
    <Wrapper>
      <Header />
      <Main className=".main-content">{children}</Main>
      <Footer />
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 0 2rem;
`

const Main = styled.main`
  flex: 1 0 auto;
  overflow: auto;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
