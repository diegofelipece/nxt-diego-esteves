import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Footer from '../components/Footer'
import sitePath from '../utils/sitePath'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href={sitePath('/favicon.ico')} />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
