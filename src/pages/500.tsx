import type { NextPage, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import styles from '@styles/error.module.css'
import Layout from '@components/Layout'

const ServerErrorPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="500: Server Error"
        description="Sorry, we had some technical problems during your last operation."
      />
      <Layout>
        <h1 className={styles.status_code}>500 | Internal Server Error.</h1>
        <Link href="./">
          <button className={styles.backhome}>go back home</button>
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
