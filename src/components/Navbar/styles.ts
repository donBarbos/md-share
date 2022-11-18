import styled from 'styled-components'
import Link from 'next/link'

export const Navbar = styled.nav`
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

export const NavLogo = styled.a`
  color: inherit;
  font-weight: 700;
  font-size: 2.1rem;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */

  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 250px) {
    font-size: 0;
  }
`

export const NavMenu = styled.ul`
  z-index: 999;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    position: fixed;
    left: -100%;
    top: 5rem;
    flex-direction: column;
    background: var(--bg);
    width: 100%;
    border-radius: 10px;
    text-align: center;
    transition: left 0.3s, color 0.1s, background 0.1s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);

    &.active {
      left: 0;
    }
  }
`

export const NavItem = styled.li`
  list-style: none;
  float: right;

  @media only screen and (max-width: 768px) {
    margin: 0.5rem 0;
  }
`

export const NavLink = styled(Link)`
  font-size: 18px;
  color: inherit;
  display: block;
  text-align: center;
  padding: 14px 25px;
  text-decoration: none;

  &:hover,
  &.active {
    color: var(--accent-color);
  }
`
