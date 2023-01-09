import type { ErrorModalProps } from './types'
import { Modal } from '@components/Modal'
import Link from 'next/link'
import styles from './styles.module.css'

const ErrorModal = ({ isActive, setActive, error }: ErrorModalProps) => {
  return (
    <Modal isActive={isActive} setActive={setActive}>
      <h1 className={styles.modal__title}>Ooops! Internal Server Error</h1>
      <h2 className={styles.modal__subtitle}>Cannot complete your request.</h2>
      <h3 className={styles.modal__subtitle}>
        Try to refresh this page of feel free <Link href="./contact">contact us</Link> if the
        problem persists.
      </h3>
      <p className={styles.modal__description}>messege error: {error}</p>
    </Modal>
  )
}

export { ErrorModal }
