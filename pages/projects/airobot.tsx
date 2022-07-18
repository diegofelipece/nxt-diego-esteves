import type { NextPage } from 'next'
import Head from 'next/head'
import ProjectsController from '../../components/ProjectsController'
import SeoTags from '../../components/SeoTags'
import { loader } from '../../data/projects/_index'
import styles from '../../styles/pages/Projects.module.scss'

const Projects: NextPage = () => {
  const project = loader('airobot');
  return (
    <div className={styles.container}>
      <SeoTags pageDescription="Diego Esteves porttfolio" pageTitle='Airobot' pageSlug={project.excerpt.slug} />
      <main>
        {project ? <ProjectsController initialProject={project.excerpt} /> : null}
      </main>
    </div>
  )
}

export default Projects
