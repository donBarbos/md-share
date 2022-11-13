import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Image from 'next/image'
import profilePic from '@public/avatar.jpeg'
import Layout from '@components/Layout'

const Contact: NextPage = () => {
  return (
    <>
      <NextSeo title="contact" />
      <Layout>
        <h1>Contact</h1>
        <br />
        <h2>
          <Image
            src={profilePic}
            alt="profile picture of the creator"
            width={30}
            height={30}
            style={{ borderRadius: '30px', position: 'relative', top: '5px' }}
          />
          &ensp;donBaros &ndash; creator
        </h2>
        <br />
        <ul>
          <li>
            email: <Link href="mailto:donbarbos@proton.me">donbarbos@proton.me</Link>
          </li>
          <li>
            site: <Link href="https://dontkillkenny.com">dontkillkenny.com</Link>
          </li>
          <li>
            github: <Link href="https://github.com/donBarbos">@donBarbos</Link>
          </li>
          <li>
            telegram: <Link href="https://t.me/donbarbos">@donbarbos</Link>
          </li>
        </ul>
      </Layout>
    </>
  )
}

export default Contact
