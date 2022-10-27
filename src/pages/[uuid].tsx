import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Layout from '@components/layout'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="post" description="" />
      <Layout>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </Layout>
    </>
  )
}

export default Home
