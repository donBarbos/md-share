import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './styles.module.css'
import ThemeToggle from '@components/ThemeToggle'
import BurgerMenu from '@components/BurgerMenu'

const Navbar = () => {
  const location = useRouter().pathname.toString()
  const [isActive, setActive] = useState(false)

  return (
    <nav className={styles.navbar}>
      <a className={styles.navbar__logo} href="#">
        .mdShare
      </a>
      <ul
        className={isActive ? `${styles.navbar__menu} ${styles.active_menu}` : styles.navbar__menu}
      >
        <li className={styles.navbar__item}>
          <Link
            href="/"
            className={
              location == '/' ? `${styles.navbar__link} ${styles.active_link}` : styles.navbar__link
            }
          >
            Home
          </Link>
        </li>
        <li className={styles.navbar__item}>
          <Link
            href="/about"
            className={
              location == '/about'
                ? `${styles.navbar__link} ${styles.active_link}`
                : styles.navbar__link
            }
          >
            About
          </Link>
        </li>
        <li className={styles.navbar__item}>
          <Link
            href="/contact"
            className={
              location == '/contact'
                ? `${styles.navbar__link} ${styles.active_link}`
                : styles.navbar__link
            }
          >
            Contact
          </Link>
        </li>
        <li className={styles.navbar__item}>
          <ThemeToggle />
        </li>
      </ul>
      <BurgerMenu isActive={isActive} setActive={() => setActive(!isActive)} />
    </nav>
  )
}

export default Navbar
