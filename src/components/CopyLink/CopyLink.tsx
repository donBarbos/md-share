import { useRef, useState } from 'react'

import Check from '@public/svgs/check-solid.svg'
import Copy from '@public/svgs/copy-regular.svg'

import styles from './styles.module.css'

import type { CopyLinkProps } from './types'

export const CopyLink = ({ link, id = 'copylink' }: CopyLinkProps) => {
  const linkRef = useRef<any>(null)
  const [isCopied, setCopied] = useState<boolean>(false)

  const copyText = () => {
    linkRef.current.select()
    document.execCommand('copy')
    linkRef.current.blur()
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2100)
  }

  return (
    <div className={styles.copy_link}>
      <input
        className={styles.copy_link__input}
        type="text"
        id={id}
        aria-label="copying field"
        value={link}
        ref={linkRef}
        readOnly
      />
      <button
        className={
          isCopied ? `${styles.copy_link__button} ${styles.active}` : styles.copy_link__button
        }
        type="button"
        onClick={copyText}
        title="Copy to Clipboard"
      >
        {isCopied ? (
          <Check height={20} width={20} className={styles.clipboard_check_icon} />
        ) : (
          <Copy height={20} width={20} className={styles.clipboard_copy_icon} />
        )}
      </button>
    </div>
  )
}
