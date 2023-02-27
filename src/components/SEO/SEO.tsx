import Head from 'next/head'

import type { SEOProps } from './types'

const SITE_NAME = 'md share'
const SITE_URL = process.env.APP_URL || 'https://md-share.vercel.app'

export const SEO = ({
  title = '',
  author = 'donBarbos',
  description = 'Best way to share your markdown files.',
  image = '/favicon.svg',
  lang = 'en',
  pathname = '',
}: SEOProps) => {
  const seo = {
    title: `${title ? title + ' | ' : ''}${SITE_NAME}`,
    author: author,
    description: description,
    image: image,
    imageUrl: `${SITE_URL}${image}`,
    lang: lang,
    url: `${SITE_URL}${pathname}`,
    siteUrl: SITE_URL,
  }

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="robots" content="index,follow" />
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.siteUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.imageUrl} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={seo.lang} />
      <meta property="og:site_name" content={seo.title} />
      <meta property="og:image" content={seo.imageUrl} />
    </Head>
  )
}
