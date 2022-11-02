import Link from 'next/link'
import { StyledFooter } from './styles'

const Footer = () => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()}&nbsp;
      <Link href="https://www.dontkillkenny.com">donBarbos</Link>
    </StyledFooter>
  )
}

export default Footer
