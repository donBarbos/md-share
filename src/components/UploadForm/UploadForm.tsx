import type { IPostPageResponse, IErrorResponse } from '@types'
import { useState, useRef } from 'react'
import { GlowButton } from '@components/GlowButton'
import { ShareModal } from '@components/ShareModal'
import { ErrorModal } from '@components/ErrorModal'
import styles from './styles.module.css'

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:8000/'
const API_KEY = process.env.API_KEY || ''

const UploadForm = () => {
  const [isModalActive, setModalActive] = useState<boolean>(false)
  const [result, setResult] = useState<IPostPageResponse | IErrorResponse | null>(null)
  const fileInput = useRef<any>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const file = fileInput.current.files[0]
    const reader = new FileReader()

    reader.readAsText(file)

    reader.onload = async () => {
      await fetch(API_BASE_URL + 'api/v1/pages/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: reader.result,
          fileName: fileInput.current.value.replace('C:\\fakepath\\', '').replace(/\.[^/.]+$/, ''),
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          setResult(response)
        })
        .catch((error) => {
          setResult({ success: false, message: error.message })
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
        <GlowButton text="SHARE" type="submit" title="share selected file" formMethod="post" />
      </form>
      {result ? (
        result.success ? (
          <ShareModal isActive={isModalActive} setActive={setModalActive} slug={result.slug} />
        ) : (
          <ErrorModal isActive={isModalActive} setActive={setModalActive} error={result.message} />
        )
      ) : (
        <ErrorModal isActive={isModalActive} setActive={setModalActive} error="result is empty" />
      )}
    </>
  )
}

export { UploadForm }
