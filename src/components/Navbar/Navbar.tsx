import { useState } from 'react'
import { useRouter } from 'next/router'
import { StyledNavbar, NavLogo, NavMenu, NavItem, NavLink } from './styles'
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
      <NavLogo>.mdShare</NavLogo>
      <NavMenu className={isActive ? 'active' : ''}>
        <NavItem>
          <NavLink href="/" className={location == '/' ? 'active' : ''}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about" className={location == '/about' ? 'active' : ''}>
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact" className={location == '/contact' ? 'active' : ''}>
            Contact
          </NavLink>
        </NavItem>
        <NavItem>
          <ThemeButton />
        </NavItem>
      </NavMenu>
      <BurgerMenu isActive={isActive} toggleClass={toggleClass} />
    </StyledNavbar>
  )
}

export default Navbar
