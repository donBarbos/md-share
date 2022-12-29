import type { ShareModalProps } from './types'
import { useRef } from 'react'
import { Modal } from '@components/Modal'
import Link from 'next/link'
import styles from './styles.module.css'

const SITE_URL = process.env.SITE_URL || 'https://md-share.vercel.app/'

import Facebook from '@public/social_networks/facebook.svg'
import Messenger from '@public/social_networks/facebook-messenger.svg'
import Twitter from '@public/social_networks/twitter.svg'
import Instagram from '@public/social_networks/instagram.svg'
import Telegram from '@public/social_networks/telegram.svg'
import Whatsapp from '@public/social_networks/whatsapp.svg'
import Email from '@public/social_networks/envelope-solid.svg'

const buttons = [
  { href: 'https://www.facebook.com/sharer/sharer.php?u=', title: 'Facebook', svg: Facebook },
  { href: 'fb-messenger://share?link=', title: 'Messenger', svg: Messenger },
  { href: 'https://twitter.com/intent/tweet?text=', title: 'Twitter', svg: Twitter },
  { href: 'https://www.instagram.com/?url=', title: 'Instagram', svg: Instagram },
  { href: 'https://t.me/share/url?url=', title: 'Telegram', svg: Telegram },
  { href: 'whatsapp://send?text=', title: 'WhatsApp', svg: Whatsapp },
  { href: 'mailto:?body=', title: 'Email', svg: Email },
]

const ShareModal = ({ isActive, setActive, slug }: ShareModalProps) => {
  const fullLink = SITE_URL + slug
  const linkRef: any = useRef(null)

  const copyText = () => {
    linkRef.current.select()
    document.execCommand('copy')
    linkRef.current.blur()
  }

  // TODO: recreate component <CopiedInput href="https://md-share.vercel.app/about" text="about" />

  return (
    <Modal isActive={isActive} setActive={setActive}>
      <p className={styles.modal__text}>Share this link via:</p>
      <ul>
        {buttons.map((button) => (
          <Link
            className={styles.modal__link}
            title={button.title}
            href={button.href + fullLink}
            key={button.href}
          >
            <button.svg height={30} width={30} className={styles.modal__icon} />
          </Link>
        ))}
      </ul>
      <p className={styles.modal__text}>Or copy link:</p>
      <input className={styles.modal__input} type="text" value={fullLink} ref={linkRef} readOnly />
      <button className={styles.modal__copy_button} onClick={copyText}>
        copy
      </button>
    </Modal>
  )
}

export { ShareModal }
