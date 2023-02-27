import Link from 'next/link'

import styles from './styles.module.css'

import type { ErrorContentProps } from './types'

export const ErrorContent = ({ error }: ErrorContentProps) => {
  return (
    <>
      <h1 className={styles.content__title}>Ooops! Internal Server Error</h1>
      <h2 className={styles.content__subtitle}>Cannot complete your request.</h2>
      <h3 className={styles.content__subtitle}>
        Try to refresh this page of feel free <Link href="./contact">contact us</Link> if the
        problem persists.
      </h3>
      <p className={styles.content__description} role="alert">
        message error: {error}
      </p>
    </>
  )
}
