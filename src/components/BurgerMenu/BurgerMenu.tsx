import type { BurgerMenuProps } from './types'
import { StyledBurger, StyledBar } from './styles'

const BurgerMenu = ({ isActive, toggleClass }: BurgerMenuProps) => {
  return (
    <StyledBurger className={isActive ? 'active' : undefined} onClick={toggleClass}>
      <StyledBar />
      <StyledBar />
      <StyledBar />
    </StyledBurger>
  )
}

export default BurgerMenu
