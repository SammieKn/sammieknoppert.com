import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProjectLinks } from "@/components/projects/project-links";
import { TagList } from "@/components/ui/tag";
import type { ProjectMeta } from "@/types/project";

interface FeaturedProjectCardProps {
  project: ProjectMeta;
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <div className="group relative">
      {/* Hover glow */}
      <div className="absolute -inset-0.5 rounded-xl bg-linear-to-r from-primary/30 to-accent/30 opacity-0 blur transition-opacity duration-300 group-hover:opacity-75" />

      <Card className="relative overflow-hidden border-white/10 bg-card/50 backdrop-blur-sm transition-all duration-300 group-hover:border-white/20 group-hover:bg-card/70">
        {/* Featured badge */}
        <div className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
          <Star className="h-3 w-3 fill-current" />
          Featured
        </div>

        <div className="grid gap-6 p-6 md:grid-cols-2 md:gap-8 md:p-8">
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

          {/* Content */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Link href={`/projects/${project.slug}`}>
                <h2 className="text-2xl font-semibold tracking-tight transition-colors hover:text-primary md:text-3xl">
                  {project.title}
                </h2>
              </Link>
              <p className="text-muted-foreground">{project.summary}</p>
            </div>

            <TagList tags={project.tags} size="md" />

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <ProjectLinks links={project.links} variant="default" />
              <Button asChild size="sm" className="ml-auto">
                <Link href={`/projects/${project.slug}`}>
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
