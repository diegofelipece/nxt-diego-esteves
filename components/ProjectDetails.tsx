import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { loader } from '../data/projects/_index';
import styles from '../styles/components/ProjectDetails.module.scss';
import { Project, ProjectExerpt } from '../types/Project';
import ContentBlock from './ContentBlock';

type Props = {
  excerpt: ProjectExerpt,
  alwaysExpanded?: boolean,
  expandProject: (elmRef:any) => void,
}

const ProjectDetails = ({ excerpt, expandProject, alwaysExpanded }: Props) => {
  const router = useRouter();
  const matchProjects = router.route.match('/projects/'); 

  const [expanded, setExpanded] = useState<boolean>(!!matchProjects);
  const [project, setProject] = useState<Project|null>(null);

  const elmRef = useRef(null);

  const onExpandClick = () => {
    setExpanded(true);
    expandProject(elmRef);
  }

  useEffect(() => {
    if (expanded && !project) {
      const project = loader(excerpt.slug);
      setProject(project);
    }
  }, [expanded, project, excerpt]);

  useEffect(() => {
    if (alwaysExpanded) setExpanded(true);
  }, [alwaysExpanded]);

  return (
    <div className={styles.project_details} ref={elmRef}>
      <div
        className={styles.project_head}
        style={{backgroundImage: `url(${excerpt.coverImage})`}}>
        {!expanded ? <div className={styles.project_head__expander} onClick={onExpandClick}></div> : null}
        <button className={styles.project_head__icon}></button>
        <div className={styles.project_head__box}>
          <h3 className={styles.project_head__box__title}>{excerpt.title}</h3>
          <p className={styles.project_head__box__category}>{excerpt.category}</p>
        </div>
      </div>
      {expanded ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{duration: 0.6}}
          className={styles.project_body}>
          {project ? (
            project.blocks.map((block, i) => <ContentBlock key={`block_${i}`} block={block}></ContentBlock>)                  
          ) : null}
        </motion.div>
      ) : null}
    </div>
  );
}

export default ProjectDetails;