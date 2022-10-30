import styled from 'styled-components'

export const StatusCode = styled.h1`
  font-size: 4rem;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
`

export const BackHomeButton = styled.button`
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  font-size: 26px;
  cursor: pointer;
  outline: none;
  padding: 10px 25px;
  border: 2px solid var(--fg);
  transition: all 300ms ease;
  position: relative;
  display: inline-block;

  color: var(--bg);
  background: var(--fg);

  &:hover {
    color: var(--fg);
    border: 2px solid var(--fg);
    background: transparent;
  }

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`
