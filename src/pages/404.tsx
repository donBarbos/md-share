import type { NextPage, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { StatusCode, BackHomeButton } from '@styles/error'
import Layout from '@components/layout'

const NotFoundPage: NextPage = () => {
  return (
    <>
      <NextSeo title="404: Not Found" description="This page could not be found." />
      <Layout>
        <StatusCode>404 | page not found.</StatusCode>
        <Link href="./">
          <BackHomeButton>go back home</BackHomeButton>
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

export default NotFoundPage
