import type { LayoutProps } from './types'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { Inter } from '@next/font/google'
import styles from './styles.module.css'

const inter = Inter({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`${styles.wrapper} ${inter.className}`}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export { Layout }
