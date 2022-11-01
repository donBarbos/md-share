import type { NextPage, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { StatusCode, BackHomeButton } from '@styles/error'
import Layout from '@components/Layout'

const ServerErrorPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="500: Server Error"
        description="Sorry, we had some technical problems during your last operation."
      />
      <Layout>
        <StatusCode>500 | Internal Server Error.</StatusCode>
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

export default ServerErrorPage
