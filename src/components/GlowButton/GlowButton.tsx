import styles from './styles.module.css'

import type { GlowButtonProps } from './types'

export const GlowButton = ({ text, type, title, formMethod, disabled }: GlowButtonProps) => {
  return (
    <button
      className={styles.glow_button}
      type={type}
      title={title}
      formMethod={formMethod}
      disabled={disabled}
    >
      {text}
    </button>
  )
}
