import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Layout from '@components/Layout'
import UploadForm from '@components/UploadForm'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="" description="" />
      <Layout>
        <h1>Just Upload Your Markdown Note</h1>
        <UploadForm />
      </Layout>
    </>
  )
}

export default Home
