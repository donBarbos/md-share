import type { IPostPageResponse, IErrorResponse } from '@types'
import { useState, useRef } from 'react'
import { GlowButton } from '@components/GlowButton'
import { Spinner } from '@components/Spinner'
import { ShareContent } from '@components/ShareContent'
import { ErrorContent } from '@components/ErrorContent'
import { Modal } from '@components/Modal'
import styles from './styles.module.css'

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:8000'
const API_KEY = process.env.API_KEY || ''

const UploadForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isModalActive, setModalActive] = useState<boolean>(false)
  const [result, setResult] = useState<IPostPageResponse | IErrorResponse | null>(null)
  const fileInput = useRef<any>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const file = fileInput.current.files[0]
    const reader = new FileReader()

    reader.readAsText(file)

    reader.onload = async () => {
      await fetch(`${API_BASE_URL}/api/v1/pages/`, {
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
          setIsLoading(false)
          setResult(response)
          setModalActive(true)
        })
        .catch((error) => {
          setIsLoading(false)
          setResult({ success: false, message: error.message })
          setModalActive(true)
        })
    }

    setIsLoading(true)
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
        <GlowButton text="SHARE" type="submit" title="Share selected file" formMethod="post" />
      </form>
      {isLoading ? <Spinner /> : <></>}
      <Modal isActive={isModalActive} setActive={setModalActive}>
        {result ? (
          result.success ? (
            <ShareContent slug={result.slug} />
          ) : (
            <ErrorContent error={result.message} />
          )
        ) : (
          <></>
        )}
      </Modal>
    </>
  )
}

export { UploadForm }
