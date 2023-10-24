import { Project, ProjectExerpt } from '../types/Project';
import { airobot } from './airobot';
import { cashMe } from './cash-me';
import { gucciWarehouse } from './gucci-warehouse';
import { nexxus } from './nexxus';
import { mussumIpsum } from './mussum-ipsum';
import { cbf } from './cbf';
import { assentamento } from './assentamento';

const projectsArray: Project[]  = [
  mussumIpsum,
  gucciWarehouse, 
  assentamento,
  cashMe, 
  airobot, 
  nexxus, 
  cbf, 
];

const projects: {[slug: string]: Project} = projectsArray.reduce((all, project) => {
  if (project.hidden) return all;
  all = { ...all,
    ...{
      [project.excerpt.slug]: project
    }
  }
  return all;
}, {});

const exerpts: ProjectExerpt[] = Object.values(projects).map(project => project.excerpt);

export const loader = (slug: string): Project => projects[slug];

export default exerpts;