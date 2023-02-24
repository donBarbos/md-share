import type { ModalProps } from './types'
import { useRef, useEffect } from 'react'
import styles from './styles.module.css'

export const Modal = ({ isActive, setActive, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isActive) {
      modalRef.current?.focus()
    }
  }, [isActive])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Tab') {
      const focusableElements =
        modalRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ) || []
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    } else if (event.key === 'Escape') {
      setActive(false)
    }
  }

  return (
    <div
      className={isActive ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => setActive(false)}
      onKeyDown={handleKeyDown}
      ref={modalRef}
      tabIndex={isActive ? 0 : -1}
      role="dialog"
      aria-modal="true"
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
