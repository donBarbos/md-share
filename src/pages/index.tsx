import type { NextPage } from 'next'
import { SEO } from '@components/SEO'
import { Layout } from '@components/Layout'
import { UploadForm } from '@components/UploadForm'

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Layout>
        <h1>Just Upload Your Markdown Note</h1>
        <UploadForm />
      </Layout>
    </>
  )
}

export default Home
