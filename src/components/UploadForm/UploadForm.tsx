import styles from './styles.module.css'

const UploadForm = () => {
  return (
    <form className={styles.form} action="/api/form" method="post">
      <label className={styles.form__label}>
        <span className={styles.drop__title}>Drag & drop file here</span>
        or
        <input className={styles.form__input} type="file" accept=".md, .txt" required />
      </label>
      <button className={styles.form__submit} type="submit">
        SHARE
      </button>
    </form>
  )
}

export default UploadForm
