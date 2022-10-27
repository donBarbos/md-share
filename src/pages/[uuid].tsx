import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Header from '@components/header'
import Footer from '@components/footer'
import Layout from '@components/layout'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="" description="" />
      <Layout>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </Layout>
    </>
  )
}

export default Home
