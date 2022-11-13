import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { StyledNavbar } from './styles'
import ThemeButton from '@components/ThemeButton'
import BurgerMenu from '@components/BurgerMenu'

const Navbar = () => {
  const location = useRouter().pathname.toString()
  const [isActive, setActive] = useState(false)
  const toggleClass = () => {
    setActive(!isActive)
  }

  return (
    <StyledNavbar>
      <a className="nav-logo">.mdShare</a>
      <ul className={isActive ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <Link href="/" className={location == '/' ? 'nav-link active' : 'nav-link'}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about" className={location == '/about' ? 'nav-link active' : 'nav-link'}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact" className={location == '/contact' ? 'nav-link active' : 'nav-link'}>
            Contact
          </Link>
        </li>
        <li className="nav-item theme-btn">
          <ThemeButton />
        </li>
      </ul>
      <BurgerMenu isActive={isActive} toggleClass={toggleClass} />
    </StyledNavbar>
  )
}

export default Navbar
