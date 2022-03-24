import { useRouter } from 'next/router';
import styles from '../styles/components/ProjectDetails.module.scss';
import { ProjectExerpt } from '../types/Project';

interface ProjectDetailsProps {
  excerpt: ProjectExerpt;
}

const ProjectDetails = ({ excerpt }: ProjectDetailsProps) => {
  const router = useRouter();

  const onExpandClick = () => {
    console.log('hey');
    router.push(`/projects/${excerpt.slug}`);
  }

  return (
    <div className={styles.project_details}>
      <div className={styles.project_head} style={{backgroundImage: `url(${excerpt.coverImage})`}}>
        <button className={styles.project_head__expand} onClick={onExpandClick}></button>
        <div className={styles.project_head__box}>
          <h3 className={styles.project_head__box__title}>{excerpt.title}</h3>
          <p className={styles.project_head__box__category}>{excerpt.category}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;