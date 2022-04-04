import { Project, ProjectExerpt } from '../../types/Project';
import { airobot } from './airobot';
import { cashMe } from './cash-me';
import { eurisGucciProjects } from './euris-gucci-projects';
import { eurisShopfullyProjects } from './euris-shopfully-projects';
import { nexxus } from './nexxus';
import { mussumIpsum } from './mussum-ipsum';
import { cbf } from './cbf';

const projects: {[slug: string]: Project} = {
  [eurisGucciProjects.excerpt.slug]: eurisGucciProjects, 
  [eurisShopfullyProjects.excerpt.slug]: eurisShopfullyProjects, 
  [cashMe.excerpt.slug]: cashMe, 
  [airobot.excerpt.slug]: airobot, 
  [mussumIpsum.excerpt.slug]: mussumIpsum, 
  [nexxus.excerpt.slug]: nexxus, 
  [cbf.excerpt.slug]: cbf, 
}

const exerpts: ProjectExerpt[] = Object.values(projects).map(project => project.excerpt);

export const loader = (slug: string): Project => projects[slug];

export default exerpts;