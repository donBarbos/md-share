const seo = {
  title: 'md share',
  author: 'donBarbos',
  description: 'application for share Markdown files',
  icon: './favicon.ico',
  github: 'https://github.com/donBarbos/md-share',
  repo: 'donBarbos/md-share',
  siteUrl: 'https://md-share.netlify.app',
  lang: 'en',
}

const SEO = {
  // title: defined   => title would be titleTemplate
  // title: undefined => title would be defaultTitle
  titleTemplate: `%s | ${seo.title}`,
  defaultTitle: seo.title,
  description: seo.description,
  canonical: seo.siteUrl,
  openGraph: {
    type: 'website',
    locale: seo.lang,
    url: seo.siteUrl,
    siteName: seo.title,
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: './favicon.ico',
    },
  ],
}

export default SEO
