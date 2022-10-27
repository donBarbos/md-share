import { useTheme } from 'next-themes'
import styled from 'styled-components'

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()
  let button

  if (theme === 'light') {
    button = <StyledButton onClick={() => setTheme('dark')}>🌞</StyledButton>
  } else {
    button = <StyledButton onClick={() => setTheme('light')}>🌜</StyledButton>
  }

  return button
}

export default ThemeChanger

const StyledButton = styled.button`
  font-size: 0.9rem;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid;
  padding: 5px;
  text-align: center;
  margin: 0;
  cursor: pointer;
  outline: none;
  display: block;
  background-color: var(--bg);

  &:hover {
    border: 1px solid var(--accent-color);
  }

  &:active {
    border: 2px solid var(--accent-color);
  }
`
