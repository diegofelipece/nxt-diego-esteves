import { useRouter } from 'next/router';
import { useState } from 'react';
import { loader } from '../data/projects/_index';
import styles from '../styles/components/ProjectDetails.module.scss';
import { Project, ProjectExerpt } from '../types/Project';
import ContentBlock from './ContentBlock';

interface ProjectDetailsProps {
  excerpt: ProjectExerpt;
}

const ProjectDetails = ({ excerpt }: ProjectDetailsProps) => {
  const router = useRouter();

  const [project, setProject] = useState<Project|null>(null);
  const [expanded, setExpanded] = useState<boolean>(true);

  const onExpandClick = () => {
    console.log('hey');
    router.push(`/projects/${excerpt.slug}`);
    setExpanded(true);
  }

  if (expanded && !project) {
    const project = loader(excerpt.slug);
    setProject(project);
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
      <div className={styles.project_body}>
        {project ? (
          project.blocks.map((block, i) => <ContentBlock key={`block_${i}`} block={block}></ContentBlock>)                  
        ) : null}
      </div>
    </div>
  );
}

export default ProjectDetails;