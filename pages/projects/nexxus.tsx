import ProjectsController from '../../components/ProjectsController';
import { loader } from '../../projects/_index';
import styles from '../../styles/pages/Projects.module.scss';

import type { NextPage } from 'next'
const Projects: NextPage = () => {
  const project = loader('nexxus');
  return (
    <div className={styles.container}>
      <main>
        {project ? <ProjectsController initialProject={project.excerpt} /> : null}
      </main>
    </div>
  )
}

export default Projects