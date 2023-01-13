import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '@styles/global.css'
import 'focus-visible'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider enableSystem={true}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
