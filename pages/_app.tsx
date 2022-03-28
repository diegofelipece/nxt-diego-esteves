import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Footer from '../components/Footer'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
