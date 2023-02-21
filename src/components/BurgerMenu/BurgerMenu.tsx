import type { BurgerMenuProps } from './types'
import styles from './styles.module.css'

const BurgerMenu = ({ isActive, setActive }: BurgerMenuProps) => {
  return (
    <div
      className={isActive ? `${styles.hamburger} ${styles.active}` : styles.hamburger}
      onClick={() => setActive(!isActive)}
      data-testid="burger-menu"
    >
      <span className={styles.bar} />
      <span className={styles.bar} />
      <span className={styles.bar} />
    </div>
  )
}

export { BurgerMenu }
