import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { loader } from '../projects/_index';
import styles from '../styles/components/ProjectDetails.module.scss';
import { Project, ProjectExerpt } from '../types/Project';
import LinksList from './LinksList';

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
  
  const elmRef = useRef<HTMLDivElement>(null);
  
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
    setExpanded(!!alwaysExpanded);
  }, [alwaysExpanded]);
  
  const [isOnPageNow, setIsOnPageNow] = useState<boolean>(!!matchProjects);
  useEffect(() => {
    if (!expanded) return;
    const handleScroll = () => {
      const rect = elmRef?.current?.getBoundingClientRect();
      const isOnRectRange = !!rect && rect.top <= 0 && rect.bottom > 0;
      setIsOnPageNow(isOnRectRange);
      if (isOnRectRange) {
        const url = `/projects/${excerpt.slug}`;
        if (url !== window.history.state.as) {
          return window.history.pushState({
            ...window.history.state,
            as: url,
          }, '', url);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOnPageNow, expanded, excerpt.slug]);

  return (
    <div className={styles.project_details} ref={elmRef}>
      <div
        className={styles.project_head}
        style={{backgroundImage: `url(/images/projects/${excerpt.coverImage})`}}>
        {!expanded ? <div className={styles.project_head__expander} onClick={onExpandClick}>
          <div className={styles.project_head__expander__icon}>
            <span className={styles.project_head__expander__icon__a}></span>
            <span className={styles.project_head__expander__icon__b }></span>
          </div>
        </div> : null}
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
          {project?.content || null}
          {project?.links ? <LinksList links={project.links || []}/> : null}
        </motion.div>        
      ) : null}
    </div>
  );
}

export default ProjectDetails;