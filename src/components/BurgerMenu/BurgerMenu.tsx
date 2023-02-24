import type { BurgerMenuProps } from './types'
import styles from './styles.module.css'

export const BurgerMenu = ({ isActive, setActive }: BurgerMenuProps) => {
  return (
    <button
      className={isActive ? `${styles.hamburger} ${styles.active}` : styles.hamburger}
      onClick={() => setActive(!isActive)}
      aria-label="Open or close the menu"
    >
      <span className={styles.bar} />
      <span className={styles.bar} />
      <span className={styles.bar} />
    </button>
  )
}
