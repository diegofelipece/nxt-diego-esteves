import { Project, ProjectExerpt } from "../types/Project";

export const excerpt: ProjectExerpt = {
  slug: 'mussum-ipsum',
  title: 'Mussum Ipsum',
  category: 'web development and design',
  coverImage: '/cover-mussum-ipsum.jpg'
};

export const mussumIpsum: Project = {
  hidden: true,
  excerpt,
};

export default excerpt;