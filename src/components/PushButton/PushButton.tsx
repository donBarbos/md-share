import type { PushButtonProps } from './types'
import styles from './styles.module.css'

const PushButton = ({ title, type }: PushButtonProps) => {
  return (
    <>
      <button className={styles.pushable} type={type}>
        <span className={styles.shadow}></span>
        <span className={styles.edge}></span>
        <span className={styles.content}>{title}</span>
      </button>
    </>
  )
}

export { PushButton }
