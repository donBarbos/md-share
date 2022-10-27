import type { NextPage, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import styled from 'styled-components'
import Layout from '@components/layout'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="500: Server Error"
        description="Sorry, we had some technical problems during your last operation."
      />
      <Layout>
        <H1>500 | Internal Server Error.</H1>
        <Link href="./">
          <StyledButton>go back home</StyledButton>
        </Link>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

export default Home

const H1 = styled.h1`
  font-size: 4rem;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
`

const StyledButton = styled.a`
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  font-size: 26px;
  cursor: pointer;
  outline: none;
  padding: 10px 25px;
  border: 2px solid var(--fg);
  transition: all 300ms ease;
  position: relative;
  display: inline-block;

  color: var(--bg);
  background: var(--fg);

  &:hover {
    color: var(--fg);
    border: 2px solid var(--fg);
    background: transparent;
  }

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`
