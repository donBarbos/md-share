import Link from 'next/link'

import { SEO } from '@components/SEO'
import { Layout } from '@components/Layout'

import styles from './about.module.css'

import type { NextPage } from 'next'

const About: NextPage = () => {
  return (
    <>
      <SEO title="about" />
      <Layout>
        <h1>About this site</h1>
        <p className={styles.description}>
          &#8195; Imagine the situation, you have written a useful Markdown note and you decide to
          share it. Now you just upload a file and get a link to a page with your note that you can
          share.
        </p>
        <ol className={styles.list}>
          <li>
            Go to <Link href="./">Homepage</Link>
          </li>
          <li>
            Upload your <code className={styles.highlight}>note.md</code>
          </li>
          <li>Share a link to the generated page</li>
        </ol>
      </Layout>
    </>
  )
}

export default About
