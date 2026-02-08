import type { ComponentType } from "react";

/**
 * Map of project slugs to their MDX dynamic imports.
 * This allows Next.js to compile MDX at build time while supporting dynamic routes.
 *
 * When adding a new project:
 * 1. Create the MDX file in src/content/projects/{slug}.mdx
 * 2. Add an entry here mapping the slug to the import
 */
const mdxModules: Record<
  string,
  () => Promise<{ default: ComponentType }>
> = {
  "bridge-inspection-ai": () =>
    import("@/content/projects/bridge-inspection-ai.mdx"),
  "mlops-template": () =>
    import("@/content/projects/mlops-template.mdx"),
  "supabase-portfolio-dashboard": () =>
    import("@/content/projects/supabase-portfolio-dashboard.mdx"),
};

/**
 * Get all available project slugs (for generateStaticParams)
 */
export function getMdxProjectSlugs(): string[] {
  return Object.keys(mdxModules);
}

/**
 * Dynamically load an MDX component by slug
 */
export async function getMdxContent(
  slug: string,
): Promise<ComponentType | null> {
  const loader = mdxModules[slug];
  if (!loader) {
    return null;
  }

  try {
    const module = await loader();
    return module.default;
  } catch (error) {
    console.error(`Failed to load MDX for slug: ${slug}`, error);
    return null;
  }
}
