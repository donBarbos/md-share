import { useTheme } from 'next-themes'
import { StyledButton } from './styles'

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
