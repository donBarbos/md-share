import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    let lastScrollPos = 0
    const handleScrollEvent = () => {
      const currentScrollPos = window.pageYOffset
      if (currentScrollPos > lastScrollPos + 10) {
        setShowButton(false)
      } else if (currentScrollPos < lastScrollPos - 10) {
        if (currentScrollPos > 100) {
          setShowButton(true)
        }
      }
      lastScrollPos = currentScrollPos

      if (currentScrollPos === 0) {
        setShowButton(false)
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
      title="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" role="presentation">
        <path
          fillRule="evenodd"
          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  )
}

export { ScrollToTop }
