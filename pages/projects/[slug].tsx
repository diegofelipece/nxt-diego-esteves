import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ProjectDetails from '../../components/ProjectDetails'
import { loader } from '../../data/projects/_index'
import styles from '../../styles/pages/Projects.module.scss'

const Projects: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query;  

  const project = loader(slug as string);

  return (
    <div className={styles.container}>
      <Head>
        <title>Diego Esteves – portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        {project ? <ProjectDetails excerpt={project.excerpt} /> : null}
      </main>
    </div>
  )
}

export default Projects
