import type { BackHomeButtonProps } from './types'
import Link from 'next/link'
import styles from './styles.module.css'
import { Lato } from '@next/font/google'

const lato = Lato({ weight: ['700'], subsets: ['latin'] })

const BackHomeButton = ({
  text = 'go back home',
  title = 'Back to Homepage',
  href = './',
}: BackHomeButtonProps) => {
  return (
    <>
      <Link href={href} className={`${styles.backhome_button} ${lato.className}`}>
        {text}
      </Link>
    </>
  )
}

export { BackHomeButton }
