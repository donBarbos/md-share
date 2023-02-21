import { ScrollProgressBar } from '@components/ScrollProgressBar'
import { Navbar } from '@components/Navbar'

const Header = () => {
  return (
    <header data-testid="header">
      <ScrollProgressBar />
      <Navbar />
    </header>
  )
}

export { Header }
