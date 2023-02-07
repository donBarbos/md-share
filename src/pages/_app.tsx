import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'
import { Inter } from '@next/font/google'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import '@styles/global.css'
import 'focus-visible'

NProgress.configure({ showSpinner: false })

const inter = Inter({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteStart = () => NProgress.start()
    const handleRouteDone = () => NProgress.done()

    router.events.on('routeChangeStart', handleRouteStart)
    router.events.on('routeChangeComplete', handleRouteDone)
    router.events.on('routeChangeError', handleRouteDone)

    return () => {
      // Make sure to remove the event handler on unmount!
      router.events.off('routeChangeStart', handleRouteStart)
      router.events.off('routeChangeComplete', handleRouteDone)
      router.events.off('routeChangeError', handleRouteDone)
    }
  }, [router])

  return (
    <ThemeProvider enableSystem={true}>
      <style jsx global>{`
        :root {
          --font-base: ${inter.style.fontFamily}, sans-serif;
        }

        #nprogress .bar {
          background-color: var(--accent-color);
          position: fixed;
          z-index: 99999 !important;
          top: 0;
          left: 0;

          width: 100%;
          height: 3px;
        }
      `}</style>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
