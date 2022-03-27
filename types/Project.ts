import { Block } from "./Block";

export interface Project {
  excerpt: ProjectExerpt;
  blocks: Block[];
}

export interface ProjectExerpt {
  slug: string;
  title: string;
  category: string;
  coverImage: string;
}