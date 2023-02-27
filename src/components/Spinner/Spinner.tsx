import Loader from '@public/svgs/loading-spinning-bubbles.svg'

import styles from './styles.module.css'

export const Spinner = () => {
  return (
    <div className={styles.background}>
      <Loader height={60} width={60} className={styles.loader} />
    </div>
  )
}
