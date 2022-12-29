import { useState, useRef } from 'react'
import { ShareModal } from '@components/ShareModal'
import styles from './styles.module.css'

const UploadForm = () => {
  const [isModalActive, setModalActive] = useState(false)
  const [error, setError] = useState(null)
  const fileInput = useRef(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const file = fileInput.current.files[0]
    const reader = new FileReader()

    reader.readAsText(file)

    reader.onload = async () => {
      await fetch('http://localhost:8000/api/v1/pages/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: reader.result,
          fileName: fileInput.current.value.replace('C:\\fakepath\\', '').replace(/\.[^/.]+$/, ''),
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.message) {
            setError(response.message)
          } else {
            setError(response.slug)
          }
        })
        .catch((error) => {
          setError(error.message)
        })
    }

    setModalActive(true)
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.form__label}>
          <span className={styles.drop__title}>Drag & drop file here</span>
          or
          <input
            className={styles.form__input}
            type="file"
            name="file"
            accept=".md, .txt"
            required
            ref={fileInput}
          />
        </label>
        <button className={styles.form__submit} type="submit">
          SHARE
        </button>
      </form>
      <ShareModal isActive={isModalActive} setActive={setModalActive} slug={error} />
    </>
  )
}

export { UploadForm }
