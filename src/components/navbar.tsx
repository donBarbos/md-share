import styled from 'styled-components'
import Link from 'next/link'
import ThemeChanger from '@components/ThemeChanger'
import BurgerMenu from '@components/burger'

const Navbar = () => {
  return (
    <StyledNavbar>
      <a className="nav-logo">.mdShare</a>
      <ul className="nav-menu">
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
      <BurgerMenu />
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

  .hamburger {
    display: none;
  }

  .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: var(--fg);
  }

  @media only screen and (max-width: 768px) {
    .nav-menu {
      position: fixed;
      left: -100%;
      top: 5rem;
      flex-direction: column;
      background-color: #fff;
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

    .hamburger {
      display: block;
      cursor: pointer;
    }

    .hamburger.active .bar:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
      -webkit-transform: translateY(8px) rotate(45deg);
      transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
      -webkit-transform: translateY(-8px) rotate(-45deg);
      transform: translateY(-8px) rotate(-45deg);
    }
  }
`
