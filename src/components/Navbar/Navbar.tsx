import { useState } from 'react'
import { useRouter } from 'next/router'
import { StyledNavbar, NavLogo, NavMenu, NavItem, NavLink } from './styles'
import ThemeToggle from '@components/ThemeToggle'
import BurgerMenu from '@components/BurgerMenu'

const Navbar = () => {
  const location = useRouter().pathname.toString()
  const [isActive, setActive] = useState(false)

  return (
    <StyledNavbar>
      <NavLogo>.mdShare</NavLogo>
      <NavMenu className={isActive ? 'active' : undefined}>
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
          <ThemeToggle />
        </NavItem>
      </NavMenu>
      <BurgerMenu isActive={isActive} setActive={() => setActive(!isActive)} />
    </StyledNavbar>
  )
}

export default Navbar
