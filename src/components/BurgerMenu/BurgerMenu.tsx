import type { BurgerMenuProps } from './types'
import * as Styled from './styles'

const BurgerMenu = ({ isActive, setActive }: BurgerMenuProps) => {
  return (
    <Styled.Burger className={isActive ? 'active' : undefined} onClick={setActive}>
      <Styled.Bar />
      <Styled.Bar />
      <Styled.Bar />
    </Styled.Burger>
  )
}

export default BurgerMenu
