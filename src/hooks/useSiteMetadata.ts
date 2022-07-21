import { useStaticQuery, graphql } from "gatsby"
import type { SiteSiteMetadata } from "@types"

interface SiteMetaData {
  site: {
    siteMetadata: SiteSiteMetadata
  }
}

const useSiteMetadata = () => {
  const { site } = useStaticQuery<SiteMetaData>(
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
  return site.siteMetadata
}

export type UseSiteMetaDataReturnType = ReturnType<typeof useSiteMetadata>

export default useSiteMetadata
