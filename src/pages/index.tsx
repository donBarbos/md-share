import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Layout from '@components/Layout'
import UploadButton from '@components/UploadButton'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="" description="" />
      <Layout>
        <h1>Just Upload Your Markdown Note</h1>
        <br />
        <UploadButton />
      </Layout>
    </>
  )
}

export default Home
