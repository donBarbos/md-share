import styled from 'styled-components'

export const StyledNavbar = styled.div`
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  .nav-logo {
    color: inherit;
    font-weight: 700;
    font-size: 2.1rem;
    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
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

  .nav-link.active {
    color: var(--accent-color);
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
      transition: left 0.3s;
      box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    }

    .nav-menu.active {
      left: 0;
    }

    .nav-item {
      margin: 0.5rem 0;
    }
  }
`
