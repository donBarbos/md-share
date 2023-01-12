import type { ShareContentProps } from './types'
import { CopyLink } from '@components/CopyLink'
import Link from 'next/link'
import styles from './styles.module.css'

const APP_URL = process.env.APP_URL || 'https://md-share.vercel.app'

import Facebook from '@public/svgs/facebook.svg'
import Linkedin from '@public/svgs/linkedin.svg'
import Twitter from '@public/svgs/twitter.svg'
import Instagram from '@public/svgs/instagram.svg'
import Telegram from '@public/svgs/telegram.svg'
import Whatsapp from '@public/svgs/whatsapp.svg'
import Email from '@public/svgs/envelope-solid.svg'

const buttons = [
  { href: 'https://www.facebook.com/sharer/sharer.php?u=', title: 'Facebook', svg: Facebook },
  { href: 'https://twitter.com/intent/tweet?text=', title: 'Twitter', svg: Twitter },
  {
    href: 'https://www.linkedin.com/sharing/share-offsite/?url=',
    title: 'LinkedIn',
    svg: Linkedin,
  },
  { href: 'https://www.instagram.com/?url=', title: 'Instagram', svg: Instagram },
  { href: 'https://t.me/share/url?url=', title: 'Telegram', svg: Telegram },
  { href: 'https://api.whatsapp.com/send?text=', title: 'WhatsApp', svg: Whatsapp },
  { href: 'mailto:?body=', title: 'Email', svg: Email },
]

const ShareContent = ({ slug }: ShareContentProps) => {
  const fullLink = `${APP_URL}/${slug}`

  return (
    <>
      <p className={styles.content__text}>Share this link via:</p>
      <ul>
        {buttons.map((button) => (
          <Link
            className={styles.content__link}
            title={button.title}
            href={button.href + fullLink}
            key={button.href}
          >
            <button.svg height={30} width={30} className={styles.content__icon} />
          </Link>
        ))}
      </ul>
      <p className={styles.content__text}>Or copy link:</p>
      <CopyLink link={fullLink} />
    </>
  )
}

export { ShareContent }
