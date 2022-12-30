import type { CopyLinkProps } from './types'
import { useState, useRef } from 'react'
import styles from './styles.module.css'

import Check from '@public/svgs/check-solid.svg'
import Copy from '@public/svgs/copy-regular.svg'

const CopyLink = ({ link }: CopyLinkProps) => {
  const linkRef: any = useRef(null)
  const [isCopied, setCopied] = useState(false)

  const copyText = () => {
    linkRef.current.select()
    document.execCommand('copy')
    linkRef.current.blur()
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2500)
  }

  return (
    <div className={styles.copy_link}>
      <input className={styles.copy_link__input} type="text" value={link} ref={linkRef} readOnly />
      <button
        className={
          isCopied ? `${styles.copy_link__button} ${styles.active}` : styles.copy_link__button
        }
        type="button"
        onClick={copyText}
        title="copy to clipboard"
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

export { CopyLink }
