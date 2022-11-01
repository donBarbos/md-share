import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Layout from '@components/Layout'
import UploadButton from '@components/UploadButton'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="" description="" />
      <Layout>
        <UploadButton />
      </Layout>
    </>
  )
}

export default Home
