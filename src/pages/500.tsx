import type { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'
import styles from '@styles/error.module.css'
import { SEO } from '@components/SEO'
import { Layout } from '@components/Layout'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

const ServerErrorPage: NextPage = () => {
  return (
    <>
      <SEO
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

export default ServerErrorPage
