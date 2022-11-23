import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './styles.module.css'
import ThemeToggle from '@components/ThemeToggle'
import BurgerMenu from '@components/BurgerMenu'

const items = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const Navbar = () => {
  const location = useRouter().pathname.toString()
  const [isActive, setActive] = useState(false)

  return (
    <nav className={styles.navbar}>
      <a className={styles.navbar__logo} href="#">
        .mdShare
      </a>
      <ul className={isActive ? `${styles.navbar__menu} ${styles.active}` : styles.navbar__menu}>
        {items.map((item) => (
          /* Use the `active` state to conditionally style the active item. */
          <li className={styles.navbar__item} key={item.href}>
            <Link
              href={item.href}
              className={
                location === item.href
                  ? `${styles.navbar__link} ${styles.active}`
                  : styles.navbar__link
              }
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li className={styles.navbar__item}>
          <ThemeToggle />
        </li>
      </ul>
      <BurgerMenu isActive={isActive} setActive={() => setActive(!isActive)} />
    </nav>
  )
}

export default Navbar
