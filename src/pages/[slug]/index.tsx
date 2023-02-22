import type { IPage, IGetPageResponse, IErrorResponse } from '@interfaces'
import type { GetServerSideProps } from 'next'
import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'
import styles from './markdown.module.css'
import md from 'markdown-it'

const APP_URL = process.env.APP_URL || 'http://localhost:3000'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query
  const res = await fetch(`${APP_URL}/api/v1/pages/${slug}`)
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
    <>
      <SEO title={title} author={author} />
      <Layout>
        <section
          className={styles.markdown__body}
          dangerouslySetInnerHTML={{ __html: md().render(text) }}
        />
      </Layout>
    </>
  )
}
