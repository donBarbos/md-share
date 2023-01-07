// type for page
export interface IPage {
  slug: string // a.k.a. `_id`
  title?: string
  author?: string
  text: string
}

// type for array of pages
export interface IPages {
  pages: IPage[]
}

// type of success response after GET:/api/v1/pages/ request
export interface IGetPagesResponse {
  success: true
  pages: IPages
}

// type of success response after GET:/api/v1/pages/:id request
export interface IGetPageResponse {
  success: true
  page: IPage
}

// type of success response after POST:/api/v1/pages/ request
export interface IPostPageResponse {
  success: true
  slug: string
}

// type of error response
export interface IErrorResponse {
  success: false
  message: string
}
