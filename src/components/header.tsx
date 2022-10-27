import Navbar from '@components/navbar'

interface HeaderProps {
  location?: string
  title?: string
}

const Header = ({ location, title }: HeaderProps) => {
  // const rootPath = '/'
  // let header

  return <Navbar />
}

export default Header
