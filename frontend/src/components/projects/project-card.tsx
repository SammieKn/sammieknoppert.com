import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { ProjectLinks } from "@/components/projects/project-links";
import { TagList } from "@/components/ui/tag";
import type { ProjectMeta } from "@/types/project";

interface ProjectCardProps {
  project: ProjectMeta;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative">
      {/* Hover glow */}
      <div className="absolute -inset-0.5 rounded-xl bg-linear-to-r from-primary/30 to-accent/30 opacity-0 blur transition-opacity duration-300 group-hover:opacity-75" />

      <Card className="relative flex h-full flex-col overflow-hidden border-white/10 bg-card/50 backdrop-blur-sm transition-all duration-300 group-hover:border-white/20 group-hover:bg-card/70">
        <div className="grid gap-4 p-4 md:grid-cols-2 md:gap-6 md:p-6">
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
          <div className="flex flex-col justify-between gap-4">
            <div className="space-y-2">
              <Link href={`/projects/${project.slug}`}>
                <h3 className="text-lg font-semibold tracking-tight transition-colors hover:text-primary">
                  {project.title}
                </h3>
              </Link>
              <p className="text-sm text-muted-foreground">{project.summary}</p>
            </div>

            <TagList tags={project.tags} size="sm" className="gap-1.5" />

            <div className="flex items-center justify-between gap-2">
              <ProjectLinks links={project.links} variant="compact" />
              <Link
                href={`/projects/${project.slug}`}
                className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Read more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
