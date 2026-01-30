// Import the pre-generated projects manifest
// This is generated at build time by scripts/generate-projects-manifest.mjs
import projectsData from "@/data/projects.json";

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

/**
 * Get all project slugs for static generation
 */
export function getProjectSlugs(): string[] {
  return projectsData.map((project) => project.slug);
}

/**
 * Get a single project by slug
 */
export function getProjectBySlug(slug: string): ProjectMeta | null {
  const project = projectsData.find((p) => p.slug === slug);
  
  if (!project) {
    return null;
  }

  return { ...project } as ProjectMeta;
}

/**
 * Get all projects with frontmatter (for listing page)
 * Featured projects are sorted to the top, then by date
 */
export function getAllProjects(): ProjectMeta[] {
  const slugs = getProjectSlugs();

  return slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is ProjectMeta => p !== null)
    .sort((a, b) => {
      // Featured projects first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      // Then by date
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

/**
 * Get the featured project (first one marked as featured, or most recent)
 */
export function getFeaturedProject(): ProjectMeta | null {
  const projects = getAllProjects();
  return projects.find((p) => p.featured) || projects[0] || null;
}

/**
 * Get non-featured projects
 */
export function getOtherProjects(): ProjectMeta[] {
  const projects = getAllProjects();
  const featured = projects.find((p) => p.featured);
  if (featured) {
    return projects.filter((p) => p.slug !== featured.slug);
  }
  // If no featured, return all except first
  return projects.slice(1);
}
