import type { NextPage } from 'next'
import Head from 'next/head'
import AboutMe from '../components/AboutMe';
import BigBanner from '../components/BigBanner';
import ProjectDetails from '../components/ProjectDetails';
import styles from '../styles/pages/Home.module.scss'
import projects from '../data/projects/_index';

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
        {projects.map(projectExcerpt => <ProjectDetails key={projectExcerpt.slug} excerpt={projectExcerpt} />)}
      </main>
    </div>
  )
}

export default Home
