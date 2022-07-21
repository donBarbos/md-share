export type Maybe<T> = T | null
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  JSON: any
}

export type SiteSiteMetadataMenuLinks = {
  __typename?: "SiteSiteMetadataMenuLinks"
  link?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
}
export type SiteSiteMetadataUtterances = {
  __typename?: "SiteSiteMetadataUtterances"
  repo?: Maybe<Scalars["String"]>
}
export type SiteSiteMetadata = {
  __typename?: "SiteSiteMetadata"
  author?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  lang?: Maybe<Scalars["String"]>
  menuLinks?: Maybe<Array<Maybe<SiteSiteMetadataMenuLinks>>>
  postTitle?: Maybe<Scalars["String"]>
  siteUrl?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  utterances?: Maybe<SiteSiteMetadataUtterances>
}
