import type { NextPage } from 'next'
import Head from 'next/head'
import AboutMe from '../components/AboutMe';
import BigBanner from '../components/BigBanner';
import Footer from '../components/Footer';
import styles from '../styles/pages/Home.module.scss'

const Home: NextPage = () => {      
  return (
    <div className={styles.container}>
      <Head>
        <title>Diego Esteves – portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        <BigBanner />
        <AboutMe />
        <Footer />
      </main>
    </div>
  )
}

export default Home
