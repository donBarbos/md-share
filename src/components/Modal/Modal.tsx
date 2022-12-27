import type { ModalProps } from './types'
import styles from './styles.module.css'

const Modal = ({ isActive, setActive, children }: ModalProps) => {
  return (
    <div
      className={isActive ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => setActive(false)}
    >
      <section
        className={isActive ? `${styles.modal__content} ${styles.active}` : styles.modal__content}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        {children}
      </section>
    </div>
  )
}

export { Modal }
