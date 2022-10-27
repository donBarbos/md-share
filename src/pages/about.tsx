import type { NextPage } from 'next'
import type { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import styles from '@styles/Home.module.css'
import Header from '@components/header'
import Footer from '@components/footer'
import Layout from '@components/layout'

const About: NextPage = () => {
  return (
    <>
      <NextSeo title="about" />
      <Layout>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (_context) => {
  return {
    props: {},
  }
}

export default About
