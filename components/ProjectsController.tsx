import { useEffect, useState } from "react";
import { ProjectExerpt } from "../types/Project";
import projects from '../data/projects/_index';
import ProjectDetails from "./ProjectDetails";
import Logo from "./Logo";
import styles from '../styles/components/ProjectsController.module.scss';
import { useRouter } from "next/router";

type Props = {
  initialProject?: ProjectExerpt | null,
  activeProjectChanged?: (excerpt: ProjectExerpt | null) => void,
  resetHome?: () => void
}

type VisibleProject = {
  index: number,
  excerpt: ProjectExerpt,
}

const ProjectsController = ({ initialProject, activeProjectChanged, resetHome }: Props) => {
  const router = useRouter();

  const [alwaysExpanded, setAlwaysExpanded] = useState<boolean>(false);
  const [visibleProjects, setVisibleProjects] = useState<VisibleProject[]>([]);

  const showAllProjectsThumbs = () => {
    const result = projects.map((excerpt, index) => ({ index, excerpt }));
    setAlwaysExpanded(false);
    return setVisibleProjects(result);
  };

  useEffect(() => {
    if (!initialProject) {
      return showAllProjectsThumbs();
    };

    const result = projects
      .filter(excerpt => initialProject.slug === excerpt.slug)
      .map((excerpt, index) => ({ index, excerpt }));

    setAlwaysExpanded(true);
    return setVisibleProjects(result);
  }, [initialProject]);

  const onExpansionRequested = (elmRef: any, excerpt: ProjectExerpt, index: number) => {
    setTimeout(() => {
      elmRef.current.scrollIntoView({ behavior: "smooth", inline: "nearest" });
      window.history.pushState({}, '', `/projects/${excerpt.slug}`);
      setTimeout(() => {
        setVisibleProjects([{excerpt, index}]);
        setAlwaysExpanded(true);
        document.body.scrollIntoView();
        if (activeProjectChanged) activeProjectChanged(excerpt);
      }, 1000);
    }, 600);
  };

  const [reachedTheBottom, setReachedTheBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const end = document.body.offsetHeight - window.innerHeight; 
      const depth = Math.round(window.innerHeight / 2); 
      const hitTheBottom = window.scrollY >= (end - depth)
      console.log('hitTheBottom', hitTheBottom);
      if (hitTheBottom) {
        // const nextProjectIndex = (activeIndex + 1) === projects.length ? 0 : activeIndex + 1;
        // console.log('nextProjectIndex', nextProjectIndex);
        // const next = projects[nextProjectIndex];

        // setReachedTheBottom(hitTheBottom);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [reachedTheBottom]);

  const onReturnToHome = () => {
    router.push('/');
    showAllProjectsThumbs();
    return resetHome && resetHome();
  };

  return (
    <>
      {alwaysExpanded ? <Logo className={styles.projects_controller__logo} size='small' returnToHome={onReturnToHome} /> : null}
      {visibleProjects.map(({ excerpt, index }) => (
        <ProjectDetails
          key={`${excerpt.slug}_${new Date().getTime()}`}
          alwaysExpanded={alwaysExpanded}
          expandProject={(elmRef) => onExpansionRequested(elmRef, excerpt, index)}
          excerpt={excerpt} />
      ))}
    </>
  )
}

export default ProjectsController;