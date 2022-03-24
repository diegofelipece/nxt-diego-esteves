export interface Project {
  excerpt: ProjectExerpt;
}

export interface ProjectExerpt {
  slug: string;
  title: string;
  category: string;
  coverImage: string;
}