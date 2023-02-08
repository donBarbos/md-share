import React, { useState, useLayoutEffect } from 'react'
import styles from './styles.module.css'

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false)

  useLayoutEffect(() => {
    let lastScrollPos = 0
    const handleScrollEvent = () => {
      const currentScrollPos = window.pageYOffset
      if (currentScrollPos > lastScrollPos) {
        setTimeout(() => {
          setShowButton(false)
        }, 500)
      } else if (currentScrollPos < lastScrollPos) {
        if (currentScrollPos > 100) {
          setShowButton(true)
        }
      }
      lastScrollPos = currentScrollPos

      if (currentScrollPos === 0) {
        setTimeout(() => {
          setShowButton(false)
        }, 500)
      }
    }
    window.addEventListener('scroll', handleScrollEvent)
    return () => window.removeEventListener('scroll', handleScrollEvent)
  }, [setShowButton])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={showButton ? `${styles.top_link} ${styles.active}` : `${styles.top_link}`}
      onClick={handleClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" role="presentation">
        <path
          fill-rule="evenodd"
          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  )
}

export { ScrollToTop }
