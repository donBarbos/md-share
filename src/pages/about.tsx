import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Layout from '@components/Layout'

const About: NextPage = () => {
  return (
    <>
      <NextSeo title="about" />
      <Layout>
        <h1>About this site</h1>
        <br />
        <h3>
          Imagine the situation, you have written a useful Markdown note and you decide to share it.
          Now you just upload a file and get a link to a page with your note that you can share.
        </h3>
        <br />
        <ul>
          <li>
            Go to <Link href="./">Homepage</Link>
          </li>
          <li>Upload your `File.md`</li>
          <li>Send a link to the generated page</li>
        </ul>
      </Layout>
    </>
  )
}

export default About
