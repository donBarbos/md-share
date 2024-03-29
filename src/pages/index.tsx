import { SEO } from '@components/SEO'
import { Layout } from '@components/Layout'
import { UploadForm } from '@components/UploadForm'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Layout>
        <h1>Just Upload Markdown File</h1>
        <UploadForm />
      </Layout>
    </>
  )
}

export default Home
