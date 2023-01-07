import type { PushButtonProps } from './types'
import styles from './styles.module.css'

const PushButton = ({ text, type, title, formMethod }: PushButtonProps) => {
  return (
    <>
      <button className={styles.pushable} type={type} title={title} formMethod={formMethod}>
        <span className={styles.shadow}></span>
        <span className={styles.edge}></span>
        <span className={styles.content}>{text}</span>
      </button>
    </>
  )
}

export { PushButton }
