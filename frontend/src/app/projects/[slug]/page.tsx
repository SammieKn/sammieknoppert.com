import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { BackgroundOrbs } from "@/components/ui/background-orbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectLinks } from "@/components/projects/project-links";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";
import { getProjectBySlug } from "@/lib/mdx";
import { getMdxContent, getMdxProjectSlugs } from "@/lib/mdx-loader";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  // Use MDX loader slugs for static generation
  return getMdxProjectSlugs().map((slug) => ({ slug }));
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

  // Get metadata from JSON manifest
  const project = getProjectBySlug(slug);

  // Get MDX content component
  const MdxContent = await getMdxContent(slug);

  if (!project || !MdxContent) {
    notFound();
  }

  return (
    <main className="relative min-h-screen py-16 md:py-24">
      {/* Background orbs */}
      <BackgroundOrbs
        orbs={[
          {
            position: "-left-64 top-0",
            size: "h-[500px] w-[500px]",
            gradient: "bg-gradient-to-br from-primary/5 to-transparent",
            blur: "blur-3xl",
            animation: "animate-float",
          },
          {
            position: "-right-64 top-1/3",
            size: "h-[400px] w-[400px]",
            gradient: "bg-gradient-to-br from-accent/5 to-transparent",
            blur: "blur-3xl",
            animation: "animate-float",
            animationDelay: "-4s",
          },
        ]}
      />

      <div className="container relative max-w-4xl space-y-10">
        {/* Header */}
        <header className="space-y-8">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="group -ml-2 text-muted-foreground hover:text-foreground"
          >
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Link>
          </Button>

          <div className="space-y-4">
            <SectionHeader
              as="h1"
              title={project.title}
              headingClassName="lg:text-5xl"
            />
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <time dateTime={project.date}>
                {new Date(project.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </time>
              <span className="text-white/20">·</span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  // Override 'sm' size (px-2 py-0.5) with px-3 and font-medium to achieve original px-3 py-0.5 font-medium styling
                  <Tag
                    key={`${tag}-${index}`}
                    size="sm"
                    className="px-3 font-medium"
                  >
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          </div>

          {/* Cover image with glow */}
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-50 blur-2xl" />
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-card shadow-2xl">
              <Image
                src={project.cover}
                alt={`${project.title} cover`}
                width={1600}
                height={900}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </header>

        {/* MDX Content - rendered directly as React component */}
        <article className="prose prose-invert prose-lg max-w-none space-y-6">
          <MdxContent />
        </article>

        {/* Links */}
        {(project.links?.code || project.links?.demo) && (
          <Card className="border-white/10 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-base">Project Links</CardTitle>
            </CardHeader>
            <CardContent>
              <ProjectLinks
                links={project.links}
                variant="default"
                primaryDemo
              />
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
}
