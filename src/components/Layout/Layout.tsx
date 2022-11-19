import type { LayoutProps } from './types'
import styles from './styles.module.css'
import Header from '@components/Header'
import Footer from '@components/Footer'

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
