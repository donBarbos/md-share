import type { BurgerMenuProps } from './types'
import { StyledBurger, StyledBar } from './styles'

const BurgerMenu = ({ isActive, setActive }: BurgerMenuProps) => {
  return (
    <StyledBurger className={isActive ? 'active' : undefined} onClick={setActive}>
      <StyledBar />
      <StyledBar />
      <StyledBar />
    </StyledBurger>
  )
}

export default BurgerMenu
