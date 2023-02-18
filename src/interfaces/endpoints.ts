import mongoose from 'mongoose'

// type for page
export interface IPage extends mongoose.Document {
  _id: string // a.k.a. `slug`
  title?: string
  author?: string
  text: string
}

// type of success response after GET:/api/v1/pages/ request
export interface IGetPagesResponse {
  success: true
  pages: IPage[]
}

// type of success response after GET:/api/v1/pages/:id request
export interface IGetPageResponse {
  success: true
  page: IPage
}

// type of success response after POST:/api/v1/pages/ request
export interface IPostPageResponse {
  success: true
  status: string
  slug: string
}

// type of error response
export interface IErrorResponse {
  success: false
  message: string
}
