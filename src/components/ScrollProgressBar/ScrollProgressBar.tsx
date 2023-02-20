import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

const ScrollProgressBar = () => {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = +`${Math.min(totalScroll / windowHeight, 1.0)}`

      setScroll(scroll)
    }

    window.addEventListener('scroll', progressBarHandler)

    return () => window.removeEventListener('scroll', progressBarHandler)
  })

  return (
    <div className={styles.progress_bar__container} data-testid="progress-bar-container">
      <div className={styles.progress_bar} style={{ transform: `scale(${scroll}, 1)` }} />
    </div>
  )
}

export { ScrollProgressBar }
