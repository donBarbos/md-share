import styled from 'styled-components'

export const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  padding: 0 2rem;
`

export const Main = styled.main`
  font-family: -apple-system, BlinkMacSystemFont, Arial, sans-serif;
  margin-top: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 4rem;

  @media only screen and (max-width: 768px) {
    padding: 2rem 0rem;
  }

  /* Link styles */
  a {
    color: inherit;
    text-decoration: none;
    font-style: italic;
    border-bottom: 0.5px solid var(--fg);
    transition: color 0.1s, background 0.1s, border 0.1s;
  }
  a:hover {
    color: var(--accent-color);
    border-bottom: 0.5px solid var(--accent-color);
  }
  a:active {
    position: relative;
    border-bottom: none;
    top: 2px;
    left: 2px;
  }
`
