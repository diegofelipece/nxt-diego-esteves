import styles from '../styles/components/ProjectDetails.module.scss';
import { Project } from '../types/Project';

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <div className={styles.project_details}>
      <div className={styles.project_head} style={{backgroundImage: `url(${project.coverImage})`}}>
        <div className={styles.project_head__box}>
          <h3 className={styles.project_head__box__title}>{project.title}</h3>
          <p className={styles.project_head__box__category}>{project.category}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;