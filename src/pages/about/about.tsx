import type { NextPage } from 'next'
import Link from 'next/link'
import styles from './about.module.css'
import { SEO } from '@components/SEO'
import { Layout } from '@components/Layout'

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
        <ul className={styles.list}>
          <ol>
            <b>1.</b> Go to <Link href="./">Homepage</Link>
          </ol>
          <ol>
            <b>2.</b> Upload your <code className={styles.highlight}>note.md</code>
          </ol>
          <ol>
            <b>3.</b> Share a link to the generated page
          </ol>
        </ul>
      </Layout>
    </>
  )
}

export default About
