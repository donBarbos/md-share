export const keywords = {
  title: 'md share',
  author: 'donBarbos',
  description: 'Best way to share your files in markdown.',
  icon: './favicon.ico',
  github: 'https://github.com/donBarbos/md-share',
  repo: 'donBarbos/md-share',
  siteUrl: 'https://md-share.vercel.app',
  lang: 'en',
}

export const SEO = {
  // if title: defined   => title would be titleTemplate
  // if title: undefined => title would be defaultTitle
  titleTemplate: `%s | ${keywords.title}`,
  defaultTitle: keywords.title,
  description: keywords.description,
  canonical: keywords.siteUrl,
  openGraph: {
    type: 'website',
    locale: keywords.lang,
    url: keywords.siteUrl,
    siteName: keywords.title,
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: keywords.icon,
    },
  ],
}
