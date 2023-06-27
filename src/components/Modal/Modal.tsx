import { useEffect, useRef } from 'react'

import styles from './styles.module.css'

import type { ModalProps } from './types'

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
      if (focusableElements.length === 0) {
        return
      }
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]
      let isActiveElementInFocusableElements = false
      for (let i = 0; i < focusableElements.length; i++) {
        if (focusableElements[i] === document.activeElement) {
          isActiveElementInFocusableElements = true
          break
        }
      }

      if (
        event.shiftKey &&
        (document.activeElement === firstElement || !isActiveElementInFocusableElements)
      ) {
        event.preventDefault()
        lastElement.focus()
      } else if (
        !event.shiftKey &&
        (document.activeElement === lastElement || !isActiveElementInFocusableElements)
      ) {
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
