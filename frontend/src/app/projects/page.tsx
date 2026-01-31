import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, ExternalLink, Star } from "lucide-react";

import { BackgroundOrbs } from "@/components/ui/background-orbs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { TagList } from "@/components/ui/tag";
import { getFeaturedProject, getOtherProjects } from "@/lib/mdx";

export const metadata = {
  title: "Projects",
  description: "A selection of projects and experiments.",
};

export default function ProjectsPage() {
  const featured = getFeaturedProject();
  const otherProjects = getOtherProjects();

  return (
    <main className="relative min-h-screen py-16 md:py-24">
      {/* Background orbs */}
      <BackgroundOrbs
        orbs={[
          {
            position: "-left-32 top-1/4",
            size: "h-96 w-96",
            gradient: "bg-gradient-to-br from-primary/5 to-transparent",
            blur: "blur-3xl",
            animation: "animate-float",
          },
          {
            position: "-right-32 bottom-1/4",
            size: "h-96 w-96",
            gradient: "bg-gradient-to-br from-accent/5 to-transparent",
            blur: "blur-3xl",
            animation: "animate-float",
            animationDelay: "-3s",
          },
        ]}
      />

      <div className="container relative space-y-12">
        {/* Header */}
        <SectionHeader
          as="h1"
          title="Projects"
          subtitle="A selection of projects and experiments."
        />

        {/* Featured Project */}
        {featured && (
          <div className="group relative">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-75" />

            {/* Card */}
            <Card className="relative overflow-hidden border-white/10 bg-card/50 backdrop-blur-sm transition-all duration-300 group-hover:border-white/20 group-hover:bg-card/70">
              {/* Featured badge */}
              <div className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                <Star className="h-3 w-3 fill-current" />
                Featured
              </div>

              <div className="grid gap-6 p-6 md:grid-cols-2 md:gap-8 md:p-8">
                {/* Cover image - clickable */}
                <Link
                  href={`/projects/${featured.slug}`}
                  className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-card"
                >
                  <Image
                    src={featured.cover}
                    alt={`${featured.title} thumbnail`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                {/* Content */}
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <Link href={`/projects/${featured.slug}`}>
                      <h2 className="text-2xl font-semibold tracking-tight transition-colors hover:text-primary md:text-3xl">
                        {featured.title}
                      </h2>
                    </Link>
                    <p className="text-muted-foreground">{featured.summary}</p>
                  </div>

                  {/* Tags */}
                  <TagList tags={featured.tags} size="md" />

                  {/* Links */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {featured.links?.code && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-white/10 bg-white/5 hover:bg-white/10"
                      >
                        <a
                          href={featured.links.code}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Code2 className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {featured.links?.demo && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-white/10 bg-white/5 hover:bg-white/10"
                      >
                        <a
                          href={featured.links.demo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                    <Button asChild size="sm" className="ml-auto">
                      <Link href={`/projects/${featured.slug}`}>
                        Read more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <div
            className={`grid gap-6 ${
              otherProjects.length === 1
                ? "grid-cols-1"
                : otherProjects.length === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {otherProjects.map((project) => (
              <div key={project.slug} className="group relative">
                {/* Hover glow */}
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary/30 to-accent/30 opacity-0 blur transition-opacity duration-300 group-hover:opacity-75" />

                <Card className="relative flex h-full flex-col overflow-hidden border-white/10 bg-card/50 backdrop-blur-sm transition-all duration-300 group-hover:border-white/20 group-hover:bg-card/70">
                  <CardHeader className="space-y-4">
                    {/* Cover image */}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-card"
                    >
                      <Image
                        src={project.cover}
                        alt={`${project.title} thumbnail`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>
                    <div className="space-y-2">
                      <Link href={`/projects/${project.slug}`}>
                        <CardTitle className="transition-colors hover:text-primary">
                          {project.title}
                        </CardTitle>
                      </Link>
                      <CardDescription>{project.summary}</CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <TagList tags={project.tags} size="sm" className="gap-1.5" />
                  </CardContent>

                  <CardFooter className="mt-auto flex items-center justify-between gap-2">
                    <div className="flex gap-2">
                      {project.links?.code && (
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <a
                            href={project.links.code}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Code2 className="h-4 w-4" />
                            <span className="sr-only">View code</span>
                          </a>
                        </Button>
                      )}
                      {project.links?.demo && (
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                            <span className="sr-only">View demo</span>
                          </a>
                        </Button>
                      )}
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
