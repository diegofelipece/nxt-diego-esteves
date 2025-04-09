import { motion, useAnimation } from "framer-motion";
import type { NextPage } from 'next';
import { useState } from 'react';
import AboutMe from '../components/AboutMe';
import BigBanner from '../components/BigBanner';
import ProjectsController from '../components/ProjectsController';
import SeoTags from '../components/SeoTags';
import styles from '../styles/pages/Home.module.scss';

type Props = {
}

const Home: NextPage<Props> = ({}: Props) => {  
  const [projectsMode, setProjectsMode] = useState<boolean>(false);
  const [loaded, setLoaded] = useState(false);
  const controls = useAnimation();

  controls.start({
    opacity: 0,
    transition: { duration: 0.6, delay: 0.3 },
  }).then(() => {
    setLoaded(true);
  })

  return (
    <div className={styles.container}>
      <SeoTags pageDescription="Diego Esteves portfolio" pageTitle='Welcome to my portfolio' />
      <main>
        <div className={styles.home_page}>
          {!loaded ? <motion.span
            animate={controls}
            className={styles.home_page__layover}></motion.span> : null}
          {!projectsMode ? (
            <>
              <BigBanner />
              <AboutMe />
            </>
          ) : null}
          <ProjectsController
            activeProjectChanged={(excerpt) => setProjectsMode(!!excerpt)}
            resetHome={() => setProjectsMode(false)} />
        </div>
      </main>
    </div>
  )
}

export default Home
