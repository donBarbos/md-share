import { Lato } from 'next/font/google'
import Link from 'next/link'

import styles from './styles.module.css'

import type { BackHomeButtonProps } from './types'

const lato = Lato({ weight: ['700'], subsets: ['latin'] })

export const BackHomeButton = ({
  text = 'go back home',
  title = 'Back to Homepage',
  href = './',
}: BackHomeButtonProps) => {
  return (
    <Link href={href} className={`${styles.backhome_button} ${lato.className}`} title={title}>
      {text}
    </Link>
  )
}
