import Link from 'next/link'
import styles from './styles.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      © {new Date().getFullYear()}&nbsp;
      <Link href="https://www.dontkillkenny.com">donBarbos</Link>
    </footer>
  )
}

export { Footer }
