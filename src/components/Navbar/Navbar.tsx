import { useState } from 'react'
import { useRouter } from 'next/router'
import * as Styled from './styles'
import ThemeToggle from '@components/ThemeToggle'
import BurgerMenu from '@components/BurgerMenu'

const Navbar = () => {
  const location = useRouter().pathname.toString()
  const [isActive, setActive] = useState(false)

  return (
    <Styled.Navbar>
      <Styled.NavLogo>.mdShare</Styled.NavLogo>
      <Styled.NavMenu className={isActive ? 'active' : undefined}>
        <Styled.NavItem>
          <Styled.NavLink href="/" className={location == '/' ? 'active' : ''}>
            Home
          </Styled.NavLink>
        </Styled.NavItem>
        <Styled.NavItem>
          <Styled.NavLink href="/about" className={location == '/about' ? 'active' : ''}>
            About
          </Styled.NavLink>
        </Styled.NavItem>
        <Styled.NavItem>
          <Styled.NavLink href="/contact" className={location == '/contact' ? 'active' : ''}>
            Contact
          </Styled.NavLink>
        </Styled.NavItem>
        <Styled.NavItem>
          <ThemeToggle />
        </Styled.NavItem>
      </Styled.NavMenu>
      <BurgerMenu isActive={isActive} setActive={() => setActive(!isActive)} />
    </Styled.Navbar>
  )
}

export default Navbar
