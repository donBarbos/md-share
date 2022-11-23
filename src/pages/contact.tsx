import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import profilePic from '@public/avatar.jpg'
import SEO from '@components/SEO'
import Layout from '@components/Layout'

const Contact: NextPage = () => {
  return (
    <>
      <SEO title="contact" />
      <Layout>
        <h1>Contact</h1>
        <br />
        <div>
          <h2>
            <Image
              src={profilePic}
              alt=""
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
        </div>
        <br />
        <div>
          source code is available at{' '}
          <Link href="https://github.com/donBarbos/md-share">this link</Link>
        </div>
      </Layout>
    </>
  )
}

export default Contact
