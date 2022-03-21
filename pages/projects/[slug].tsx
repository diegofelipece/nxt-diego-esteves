import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/pages/Projects.module.scss'

const Projects: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query
    
  return (
    <div className={styles.container}>
      <Head>
        <title>Diego Esteves – portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        at {slug}
        <br />
      </main>
    </div>
  )
}

export default Projects
