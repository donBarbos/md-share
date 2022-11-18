import styled from 'styled-components'

export const StatusCode = styled.h1`
  line-height: 1.4;
  margin-bottom: 20px;
  font-size: 4rem;

  @media only screen and (max-width: 768px) {
    margin-bottom: 16px;
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
  display: inline-block;
  position: relative;
  margin: 0 auto;

  color: var(--bg);
  background: var(--fg);
  transition: all 0.4s ease-in-out;

  &:hover {
    color: var(--fg);
    background: var(--bg);
  }

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`
