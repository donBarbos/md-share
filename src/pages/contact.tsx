import type { NextPage, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import Layout from '@components/layout'

const Contact: NextPage = () => {
  return (
    <>
      <NextSeo title="contact" />
      <Layout>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>
          Get started by editing <code>pages/index.tsx</code>
        </p>

        <div>
          <a href="https://nextjs.org/docs">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

export default Contact
