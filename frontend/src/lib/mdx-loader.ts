import type { ComponentType } from "react";

import { getProjectSlugs } from "@/lib/mdx";

/**
 * Get all available project slugs for static generation.
 * Driven by projects.json — no separate registration needed.
 */
export function getMdxProjectSlugs(): string[] {
  return getProjectSlugs();
}

/**
 * Dynamically load an MDX component by slug.
 * Next.js bundles all files in the directory; the slug selects at runtime.
 */
export async function getMdxContent(
  slug: string,
): Promise<ComponentType | null> {
  try {
    const mdxModule = await import(`@/content/projects/${slug}.mdx`);
    return mdxModule.default;
  } catch (error) {
    console.error(`Failed to load MDX for slug: ${slug}`, error);
    return null;
  }
}
