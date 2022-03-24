import { Project, ProjectExerpt } from '../../types/Project';
import { example } from './example';
import { loremIpsum } from './loremIpsum';

const projects: {[slug: string]: Project} = {
  [example.excerpt.slug]: example, 
  [loremIpsum.excerpt.slug]: loremIpsum, 
}

const exerpts: ProjectExerpt[] = Object.values(projects).map(project => project.excerpt);

export const loader = (slug: string): Project => projects[slug];

export default exerpts;