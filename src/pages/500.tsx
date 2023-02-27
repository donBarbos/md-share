import styles from '@styles/error.module.css'
import { SEO } from '@components/SEO'
import { Layout } from '@components/Layout'
import { BackHomeButton } from '@components/BackHomeButton'

import type { GetStaticProps, NextPage } from 'next'

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
        <h1 className={styles.status_code} role="alert">
          500 | Internal Server Error.
        </h1>
        <BackHomeButton />
      </Layout>
    </>
  )
}

export default ServerErrorPage
