import styles from '@styles/error.module.css'
import { SEO } from '@components/SEO'
import { Layout } from '@components/Layout'
import { BackHomeButton } from '@components/BackHomeButton'

import type { NextPage } from 'next'

const NotFoundPage: NextPage = () => {
  return (
    <>
      <SEO title="404: Not Found" description="This page could not be found." />
      <Layout>
        <h1 className={styles.status_code} role="alert">
          404 | page not found.
        </h1>
        <BackHomeButton />
      </Layout>
    </>
  )
}

export default NotFoundPage
