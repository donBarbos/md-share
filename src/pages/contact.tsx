import type { NextPage, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import Layout from '@components/layout'

const Contact: NextPage = () => {
  return (
    <>
      <NextSeo title="contact" />
      <Layout>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>
          Get started by editing <code>pages/index.tsx</code>
        </p>

        <div>
          <a href="https://nextjs.org/docs">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <p>
            Группы применяются в различных областях математики. Например, в топологии, введя понятие
            фундаментальной группы[10]. Помимо теоретического применения групп существует множество
            способов применения групп на практике. К примеру, они применяются в криптографии,
            которая опирается на вычислительную теорию групп и знания в области алгоритмов.
            Применение теории групп не ограничивается только математикой, её широко используют в
            таких науках как физика, химия и информатика.{' '}
          </p>

          <a href="https://nextjs.org/learn">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </Layout>
    </>
  )
}

export default Contact
