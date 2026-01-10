"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ChevronDown, ChevronUp, Download } from "lucide-react";
import * as LucideIcons from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  certifications,
  education,
  skills,
  workExperience,
  type Education,
  type WorkExperience,
} from "@/data/profile";

// Subtle floating shapes for About section
function AboutFloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Subtle gradient orb - top right */}
      <div className="absolute -right-48 -top-48 h-96 w-96 animate-pulse rounded-full bg-gradient-to-br from-primary/10 via-chart-2/5 to-transparent blur-3xl" />
      {/* Small orb - bottom left */}
      <div
        className="absolute -bottom-32 -left-32 h-64 w-64 animate-pulse rounded-full bg-gradient-to-tr from-chart-1/8 via-primary/5 to-transparent blur-3xl"
        style={{ animationDelay: "2s" }}
      />
      {/* Floating dots - hidden on mobile */}
      <div className="absolute right-[10%] top-[30%] hidden h-2 w-2 animate-float rounded-full bg-primary/20 md:block" />
      <div className="absolute bottom-[40%] left-[5%] hidden h-2 w-2 animate-float-delayed rounded-full bg-chart-2/15 md:block" />
    </div>
  );
}

function SkillIcon({ iconName }: { iconName: string }) {
  const Icon = (
    LucideIcons as unknown as Record<
      string,
      React.ComponentType<{ className?: string }>
    >
  )[iconName];

  if (!Icon) {
    return <LucideIcons.CircleHelp className="h-5 w-5 text-muted-foreground" />;
  }

  return <Icon className="h-5 w-5" />;
}

interface CollapsibleExperienceCardProps {
  title: string;
  description: string;
  items: WorkExperience[] | Education[];
  isExpanded: boolean;
  onToggle: () => void;
  renderItem: (
    item: WorkExperience | Education,
    index: number
  ) => React.ReactNode;
}

function CollapsibleExperienceCard({
  title,
  description,
  items,
  isExpanded,
  onToggle,
  renderItem,
}: CollapsibleExperienceCardProps) {
  return (
    <Card className="border-white/10 bg-card/50 backdrop-blur-sm transition-all hover:bg-card/70">
      <CardHeader>
        <CardTitle className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className={`space-y-3 overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {items.map((item, index) => renderItem(item, index))}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          onClick={onToggle}
          className="w-full border-white/10 transition-all hover:border-primary/30 hover:bg-primary/5"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="mr-2 h-4 w-4" />
              Hide {title.toLowerCase()}
            </>
          ) : (
            <>
              <ChevronDown className="mr-2 h-4 w-4" />
              Show {title.toLowerCase()}
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}

export function About() {
  const [showWorkExp, setShowWorkExp] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 py-16 md:py-24"
    >
      <AboutFloatingShapes />

      <div className="container relative z-10 space-y-10">
        <header className="animate-on-scroll space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text">
              About
            </span>
          </h2>
          <p className="max-w-prose text-muted-foreground">
            A quick overview of my experience, education, certifications, and
            skills.
          </p>
        </header>

        {/* Work Experience: full width row with single avatar on right */}
        <div className="animate-on-scroll grid gap-6 md:grid-cols-[1fr_280px]">
          <CollapsibleExperienceCard
            title="Work Experience"
            description="Roles and responsibilities over time."
            items={workExperience}
            isExpanded={showWorkExp}
            onToggle={() => setShowWorkExp(!showWorkExp)}
            renderItem={(item) => {
              const job = item as WorkExperience;
              return (
                <div
                  key={`${job.company}-${job.role}-${job.startDate}`}
                  className="group relative rounded-lg border border-white/10 bg-muted/30 p-4 transition-all hover:border-primary/20 hover:bg-muted/50"
                >
                  {/* Timeline indicator */}
                  <div className="absolute -left-px top-0 h-full w-1 rounded-full bg-gradient-to-b from-primary/50 via-chart-2/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                          {job.startDate} — {job.endDate}
                        </span>
                      </div>
                      <p className="font-semibold text-foreground">
                        {job.role}
                      </p>
                      <p className="text-sm font-medium text-primary/80">
                        {job.company}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {job.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }}
          />
          <div className="hidden items-start justify-end md:flex">
            <div className="relative">
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-primary/10 via-chart-1/5 to-transparent blur-xl" />
              <Image
                src="/images/avatar/avatar_work.png"
                alt="Avatar"
                width={240}
                height={240}
                className="relative rounded-lg border border-white/10 shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Education: full width row with single avatar on left */}
        <div className="animate-on-scroll grid gap-6 md:grid-cols-[280px_1fr]">
          <div className="hidden items-start md:flex">
            <div className="relative">
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-chart-2/10 via-primary/5 to-transparent blur-xl" />
              <Image
                src="/images/avatar/avatar_education.png"
                alt="Avatar"
                width={240}
                height={240}
                className="relative rounded-lg border border-white/10 shadow-lg"
              />
            </div>
          </div>
          <CollapsibleExperienceCard
            title="Education"
            description="Academic background and focus areas."
            items={education}
            isExpanded={showEducation}
            onToggle={() => setShowEducation(!showEducation)}
            renderItem={(item) => {
              const edu = item as Education;
              return (
                <div
                  key={`${edu.university}-${edu.title}-${edu.year}`}
                  className="group relative rounded-lg border border-white/10 bg-muted/30 p-4 transition-all hover:border-primary/20 hover:bg-muted/50"
                >
                  {/* Timeline indicator */}
                  <div className="absolute -left-px top-0 h-full w-1 rounded-full bg-gradient-to-b from-chart-2/50 via-primary/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-chart-2/10 px-2.5 py-0.5 text-xs font-medium text-chart-2">
                        {edu.year}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                        {edu.level}
                      </span>
                    </div>
                    <p className="font-semibold text-foreground">{edu.title}</p>
                    <p className="text-sm font-medium text-primary/80">
                      {edu.university}
                    </p>
                    {edu.grade && (
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Grade:</span> {edu.grade}
                      </p>
                    )}
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {edu.description}
                    </p>
                  </div>
                </div>
              );
            }}
          />
        </div>

        {/* Certifications: full width carousel */}
        <Card className="animate-on-scroll border-white/10 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Certifications</CardTitle>
            <CardDescription>
              Professional certifications and credentials.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent>
                {certifications.map((cert) => (
                  <CarouselItem
                    key={cert.title}
                    className="basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full p-1">
                      <Card className="group h-full border-white/10 bg-muted/30 transition-all hover:border-primary/20 hover:bg-muted/50 hover:shadow-lg">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-card/50 p-1 transition-transform group-hover:scale-105">
                              <Image
                                src={
                                  cert.imageSrc ??
                                  "/images/avatar/placeholder.svg"
                                }
                                alt={`${cert.title} icon`}
                                width={48}
                                height={48}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium leading-tight text-foreground">
                                {cert.title}
                              </p>
                              <p className="text-sm text-muted-foreground mt-1">
                                {cert.date}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-12 border-white/10 bg-card/50 backdrop-blur-sm hover:bg-card" />
              <CarouselNext className="-right-12 border-white/10 bg-card/50 backdrop-blur-sm hover:bg-card" />
            </Carousel>
          </CardContent>
        </Card>

        {/* Skills: title + summary + expandable details button */}
        <Card className="animate-on-scroll border-white/10 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Skills</CardTitle>
            <CardDescription>Overview with details on demand.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="group rounded-lg border border-white/10 bg-muted/30 p-4 transition-all hover:border-primary/20 hover:bg-muted/50">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <SkillIcon iconName={skill.iconName} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">
                        {skill.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {skill.summary}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setExpandedSkill(
                          expandedSkill === skill.name ? null : skill.name
                        )
                      }
                      className="border-white/10 transition-all hover:border-primary/30 hover:bg-primary/5"
                    >
                      {expandedSkill === skill.name
                        ? "Hide details"
                        : "Details"}
                    </Button>
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedSkill === skill.name
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="rounded-lg border border-primary/10 bg-primary/5 p-4">
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {skill.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Resume button standalone on the right */}
        <div className="animate-on-scroll flex justify-end">
          <Button asChild className="group relative overflow-hidden">
            <Link href="/cv/sammie-knoppert-cv.pdf">
              <span className="relative z-10 flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </span>
              <span className="absolute inset-0 -z-0 bg-gradient-to-r from-chart-1 to-chart-2 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
