import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'
import GlobalStyle from '@styles/global'

// import your default seo configuration
import SEO from '@root/next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <GlobalStyle />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
