import { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import ThemeChanger from '@components/ThemeChanger'
import BurgerMenu from '@components/burger'

const Navbar = () => {
  const [isActive, setActive] = useState(false)
  const toggleClass = () => {
    setActive(!isActive)
  }

  return (
    <StyledNavbar>
      <a className="nav-logo">.mdShare</a>
      <ul className={isActive ? 'nav-menu.active' : 'nav-menu'}>
        <li className="nav-item">
          <Link href="./">
            <a className="nav-link">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="about">
            <a className="nav-link">About</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="contact">
            <a className="nav-link">Contact</a>
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

const StyledNavbar = styled.div`
  flex: 0 0 auto;
  padding: 10px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-logo {
    color: inherit;
    font-weight: 700;
    font-size: 2.1rem;
  }

  .nav-menu {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-item {
    list-style: none;
    float: right;
  }

  .nav-link {
    font-size: 18px;
    color: inherit;
    display: block;
    text-align: center;
    padding: 14px 25px;
    text-decoration: none;
  }

  .nav-link:hover {
    color: var(--accent-color);
  }

  .theme-btn {
    padding: 8px;
  }

  @media only screen and (max-width: 768px) {
    .nav-menu {
      position: fixed;
      left: -100%;
      top: 5rem;
      flex-direction: column;
      background-color: var(--bg);
      width: 100%;
      border-radius: 10px;
      text-align: center;
      transition: 0.3s;
      box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    }

    .nav-menu.active {
      left: 0;
    }

    .nav-item {
      margin: 2.5rem 0;
    }
  }
`
