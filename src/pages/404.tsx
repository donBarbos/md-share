import type { NextPage } from 'next'
import styles from '@styles/error.module.css'
import { SEO } from '@components/SEO'
import { Layout } from '@components/Layout'
import { BackHomeButton } from '@components/BackHomeButton'
import { Inter } from '@next/font/google'

const inter = Inter({ weight: ['900'], subsets: ['latin'] })

const NotFoundPage: NextPage = () => {
  return (
    <>
      <SEO title="404: Not Found" description="This page could not be found." />
      <Layout>
        <h1 className={`${styles.status_code} ${inter.className}`}>404 | page not found.</h1>
        <BackHomeButton />
      </Layout>
    </>
  )
}

export default NotFoundPage
