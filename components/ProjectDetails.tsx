import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { loader } from '../data/projects/_index';
import styles from '../styles/components/ProjectDetails.module.scss';
import { Project, ProjectExerpt } from '../types/Project';
import ContentBlock from './ContentBlock';

type Props = {
  excerpt: ProjectExerpt;
}

const ProjectDetails = ({ excerpt }: Props) => {
  const router = useRouter();
  const matchProjects = router.route.match('/projects/'); 

  const [expanded, setExpanded] = useState<boolean>(!!matchProjects);
  const [project, setProject] = useState<Project|null>(null);

  const onExpandClick = () => {
    setExpanded(!expanded);

    if (!expanded) return router.push(`/projects/${excerpt.slug}`);
    router.push('/');
  }

  useEffect(() => {
    if (expanded && !project) {
      const project = loader(excerpt.slug);
      setProject(project);
    }
  }, [expanded, project, excerpt]);

  return (
    <div className={styles.project_details}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{duration: 0.6}}
        className={styles.project_head}
        style={{backgroundImage: `url(${excerpt.coverImage})`}}>
        <button className={styles.project_head__expand} onClick={onExpandClick}></button>
        <div className={styles.project_head__box}>
          <h3 className={styles.project_head__box__title}>{excerpt.title}</h3>
          <p className={styles.project_head__box__category}>{excerpt.category}</p>
        </div>
      </motion.div>
      <AnimatePresence>
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
      </AnimatePresence>
    </div>
  );
}

export default ProjectDetails;