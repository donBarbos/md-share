import Link from 'next/link'
import * as Styled from './styles'

const Footer = () => {
  return (
    <Styled.Footer>
      © {new Date().getFullYear()}&nbsp;
      <Link href="https://www.dontkillkenny.com">donBarbos</Link>
    </Styled.Footer>
  )
}

export default Footer
