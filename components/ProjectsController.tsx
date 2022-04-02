import { useEffect, useState } from "react";
import { ProjectExerpt } from "../types/Project";
import projects from '../data/projects/_index';
import ProjectDetails from "./ProjectDetails";

type Props = {
  initialProject?: ProjectExerpt | null,
  activeProjectChanged?: (excerpt: ProjectExerpt | null) => void
}

const ProjectsController = ({ initialProject, activeProjectChanged }: Props) => {
  const [activeProject, setActiveProject] = useState<ProjectExerpt | null>(null);

  useEffect(() => {
    if (initialProject) setActiveProject(initialProject);
  }, [initialProject]);

  const onProjectClick = (elmRef: any, excerpt: ProjectExerpt) => {
    if (activeProject?.slug !== excerpt.slug) {
      setTimeout(() => {
        elmRef.current.scrollIntoView({ behavior: "smooth", inline: "nearest" });
        window.history.pushState({}, '', `/projects/${excerpt.slug}`);
        setTimeout(() => {
          setActiveProject(excerpt);
          if (activeProjectChanged) activeProjectChanged(excerpt);
        }, 1000);
      }, 600);
    }
  };

  return (
    <>
      {projects
        .filter(excerpt => !activeProject ? true : (activeProject.slug === excerpt.slug))
        .map(projectExcerpt => (
          <ProjectDetails key={projectExcerpt.slug} expandProject={(elmRef) => onProjectClick(elmRef, projectExcerpt)} excerpt={projectExcerpt} />
        ))}
    </>
  )
}

export default ProjectsController;