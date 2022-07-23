import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface SEOProps {
  description?: string
  lang?: string
  meta?: []
  title: string
}

const SEO = ({ description, lang, meta, title }: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            lang
            repo
            github
            icon
          }
        }
      }
    `,
  )

  const metaDescription = description || site.siteMetadata.description
  const metaLang = lang || site.siteMetadata.lang
  const metaTitle = title || site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        metaLang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta || [])}
    />
  )
}

export default SEO
