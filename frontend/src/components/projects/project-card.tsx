import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
          <ProjectLinks links={project.links} variant="compact" />
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
  );
}
