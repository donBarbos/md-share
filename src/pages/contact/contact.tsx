import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import styles from './contact.module.css'
import profilePic from '@public/avatar.jpg'
import SEO from '@components/SEO'
import Layout from '@components/Layout'

const Contact: NextPage = () => {
  return (
    <>
      <SEO title="contact" />
      <Layout>
        <h1>Contact</h1>
        <h2 className={styles.person}>
          <Image
            src={profilePic}
            alt=""
            width={30}
            height={30}
            objectFit="cover"
            className={styles.avatar}
          />
          &ensp;donBaros &ndash; creator
        </h2>
        <ul className={styles.list}>
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
        <p>
          source code is available at{' '}
          <Link href="https://github.com/donBarbos/md-share">this link</Link>
        </p>
      </Layout>
    </>
  )
}

export default Contact
