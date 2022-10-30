import type { NextPage, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import Layout from '@components/layout'
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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

export default Home
