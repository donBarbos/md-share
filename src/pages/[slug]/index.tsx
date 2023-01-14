import type { IPage, IGetPagesResponse, IGetPageResponse, IErrorResponse } from '@types'
import type { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'
import styles from './markdown.module.css'
import md from 'markdown-it'

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:8000'
const API_KEY = process.env.API_KEY || ''

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query
  const res = await fetch(`${API_BASE_URL}/api/v1/pages/${slug}`)
  const pageData: IGetPageResponse | IErrorResponse = await res.json()

  if (!res.ok || pageData.success === false) {
    return {
      notFound: true,
    }
  }

  const page: IPage = pageData.page

  return {
    props: {
      page,
    },
  }
}

export default function PostPage({ page }: { page: IPage }) {
  const text = page.text
  const title = page.title || 'note'
  const author = page.author || 'anon'
  // const description = page.text[]

  return (
    <div>
      <SEO title={title} author={author} />
      <Layout>
        <div
          className={styles.markdown__body}
          dangerouslySetInnerHTML={{ __html: md().render(text) }}
        />
      </Layout>
    </div>
  )
}
