import { useState } from 'react'
import Link from 'next/link'
import ThemeChanger from '@components/ThemeChanger'
import BurgerMenu from '@components/BurgerMenu'
import { StyledNavbar } from './styles'

const Navbar = () => {
  const [isActive, setActive] = useState(false)
  const toggleClass = () => {
    setActive(!isActive)
  }

  return (
    <StyledNavbar>
      <a className="nav-logo">.mdShare</a>
      <ul className={isActive ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <Link href="./" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link href="about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link href="contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li className="nav-item theme-btn">
          <ThemeChanger />
        </li>
      </ul>
      <BurgerMenu isActive={isActive} toggleClass={toggleClass} />
    </StyledNavbar>
  )
}

export default Navbar
