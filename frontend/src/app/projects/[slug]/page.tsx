import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  getProjectBySlug,
  getProjectSlugs,
  type ProjectFrontmatter,
} from "@/lib/mdx";
import { useMDXComponents } from "../../../../mdx-components";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Compile MDX content with custom components
  const { content } = await compileMDX<ProjectFrontmatter>({
    source: project.content,
    components: useMDXComponents({}),
  });

  return (
    <main className="py-16 md:py-24">
      <div className="container max-w-4xl space-y-10">
        {/* Header */}
        <header className="space-y-6">
          <Button asChild variant="outline" size="sm">
            <Link href="/projects">← Back to Projects</Link>
          </Button>

          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <time dateTime={project.date}>
                {new Date(project.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </time>
              <span>·</span>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-2 py-0.5 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Cover image */}
          <div className="overflow-hidden rounded-lg border bg-card">
            <Image
              src={project.cover}
              alt={`${project.title} cover`}
              width={1600}
              height={900}
              className="h-auto w-full"
              priority
            />
          </div>
        </header>

        {/* MDX Content */}
        <article className="prose-custom space-y-6">{content}</article>

        {/* Links */}
        {(project.links?.code || project.links?.demo) && (
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Project Links</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              {project.links.code && (
                <Button asChild variant="outline">
                  <a href={project.links.code} target="_blank" rel="noreferrer">
                    View Code
                  </a>
                </Button>
              )}
              {project.links.demo && (
                <Button asChild>
                  <a href={project.links.demo} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
}
