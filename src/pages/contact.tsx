import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Layout from '@components/Layout'

const Contact: NextPage = () => {
  return (
    <>
      <NextSeo title="contact" />
      <Layout>
        <h1>Contact</h1>

        <h2>creator: donBaros</h2>
        <ul>
          <li>
            email: <Link href="mailto:donbarbos@proton.me">donbarbos@proton.me</Link>
          </li>
          <li>
            site: <Link href="https://dontkillkenny.com/">dontkillkenny.com</Link>
          </li>
          <li>
            github: <Link href="https://github.com/donBarbos/">donBarbos</Link>
          </li>
        </ul>
      </Layout>
    </>
  )
}

export default Contact
