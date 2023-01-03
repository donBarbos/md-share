import type { GlowButtonProps } from './types'
import styles from './styles.module.css'

const GlowButton = ({ title, type }: GlowButtonProps) => {
  return (
    <>
      <button className={styles.glow_button} type={type}>
        {title}
      </button>
    </>
  )
}

export { GlowButton }
