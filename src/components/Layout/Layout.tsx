import type { LayoutProps } from './types'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { ScrollToTop } from '@components/ScrollToTop'
import styles from './styles.module.css'

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export { Layout }
