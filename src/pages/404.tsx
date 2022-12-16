import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '@styles/error.module.css'
import { SEO } from '@components/SEO'
import { Layout } from '@components/Layout'

const NotFoundPage: NextPage = () => {
  return (
    <>
      <SEO title="404: Not Found" description="This page could not be found." />
      <Layout>
        <h1 className={styles.status_code}>404 | page not found.</h1>
        <Link href="./">
          <button className={styles.backhome}>go back home</button>
        </Link>
      </Layout>
    </>
  )
}

export default NotFoundPage
