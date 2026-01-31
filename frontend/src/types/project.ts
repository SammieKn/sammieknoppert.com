// Frontmatter schema for projects
export interface ProjectFrontmatter {
  title: string;
  slug: string;
  date: string;
  summary: string;
  cover: string;
  tags: string[];
  featured?: boolean;
  links?: {
    code?: string;
    demo?: string;
  };
}

export interface ProjectMeta extends ProjectFrontmatter {
  content: string;
}
