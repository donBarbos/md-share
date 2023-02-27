import { useState } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'

import { ThemeToggle } from '@components/ThemeToggle'
import { BurgerMenu } from '@components/BurgerMenu'

import styles from './styles.module.css'

const pages = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export const Navbar = () => {
  const location: string = useRouter().pathname.toString()
  const [isActive, setActive] = useState<boolean>(false)

  return (
    <nav className={styles.navbar} role="navigation">
      <a className={styles.navbar__logo} href="#">
        .mdShare
      </a>
      <ul className={isActive ? `${styles.navbar__menu} ${styles.active}` : styles.navbar__menu}>
        {pages.map((page) => (
          <li className={styles.navbar__item} key={page.href}>
            <Link
              href={page.href}
              className={
                location === page.href
                  ? `${styles.navbar__link} ${styles.active}`
                  : styles.navbar__link
              }
            >
              {page.label}
            </Link>
          </li>
        ))}
        <li className={styles.navbar__item}>
          <ThemeToggle />
        </li>
      </ul>
      <BurgerMenu isActive={isActive} setActive={setActive} />
    </nav>
  )
}
