import Link from 'next/link'
import styles from './styles.module.css'
import { Inter } from '@next/font/google'

const inter = Inter({ weight: ['600'], subsets: ['latin'] })

const Footer = () => {
  return (
    <footer className={`${styles.footer} ${inter.className}`}>
      © {new Date().getFullYear()}&nbsp;
      <Link href="https://www.dontkillkenny.com">donBarbos</Link>
    </footer>
  )
}

export { Footer }
