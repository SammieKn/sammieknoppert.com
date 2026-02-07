"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Download } from "lucide-react";
import ReactMarkdown from "react-markdown";

import { BackgroundOrbs } from "@/components/ui/background-orbs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
import { RoleCard } from "@/components/ui/role-card";
import { SectionHeader } from "@/components/ui/section-header";
import { SkillIcon } from "@/components/ui/skill-icon";
import {
  certifications,
  education,
  skills,
  workExperience,
} from "@/data/profile";

// Subtle floating shapes for About section
function AboutFloatingShapes() {
  return (
    <BackgroundOrbs
      orbs={[
        {
          position: "-right-48 -top-48",
          size: "h-96 w-96",
          gradient:
            "bg-gradient-to-br from-primary/10 via-chart-2/5 to-transparent",
          blur: "blur-3xl",
        },
        {
          position: "-bottom-32 -left-32",
          size: "h-64 w-64",
          gradient:
            "bg-gradient-to-tr from-chart-1/8 via-primary/5 to-transparent",
          blur: "blur-3xl",
          animationDelay: "2s",
        },
      ]}
      dots={[
        {
          position: "right-[10%] top-[30%]",
          size: "h-2 w-2",
          color: "bg-primary/20",
          animation: "animate-float",
          hideMobile: true,
        },
        {
          position: "bottom-[40%] left-[5%]",
          size: "h-2 w-2",
          color: "bg-chart-2/15",
          animation: "animate-float-delayed",
          hideMobile: true,
        },
      ]}
    />
  );
}

export function About() {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 py-16 md:py-24"
    >
      <AboutFloatingShapes />

      <div className="container relative z-10 space-y-10">
        <SectionHeader
          title="About"
          subtitle="A quick overview of my experience, education, certifications, and skills."
          className="animate-on-scroll"
        />

        {/* Work Experience: Role Cards */}
        <div className="animate-on-scroll">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground">My Roles</h2>
            <p className="text-sm text-muted-foreground">
              Click to read the full story behind each role.
            </p>
          </div>
          <div className="divide-y divide-white/10">
            {workExperience.map((role) => (
              <RoleCard
                key={`${role.company}-${role.role}-${role.startDate}`}
                role={role}
                className="first:border-t-0"
              />
            ))}
          </div>
        </div>

        {/* Education: Two column layout */}
        <div className="animate-on-scroll">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground">Education</h2>
            <p className="text-sm text-muted-foreground">
              Academic background and focus areas.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((edu) => (
              <div
                key={`${edu.university}-${edu.title}-${edu.year}`}
                className="group relative rounded-xl border border-white/10 bg-card/50 p-5 backdrop-blur-sm transition-all hover:border-primary/20 hover:bg-card/70"
              >
                <div className="flex items-start justify-between gap-4">
                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-foreground">
                      {edu.title}
                    </h3>

                    {/* Tags row: Year, Level, University, Grade */}
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-chart-2/10 px-2.5 py-0.5 text-xs font-medium text-chart-2">
                        {edu.year}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                        {edu.level}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-chart-1/10 px-2.5 py-0.5 text-xs font-medium text-chart-1">
                        {edu.university}
                      </span>
                      {edu.grade && (
                        <span className="inline-flex items-center rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-bold text-primary">
                          Grade: {edu.grade}
                        </span>
                      )}
                    </div>

                    {/* Description with markdown support */}
                    <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => <>{children}</>,
                          a: ({ href, children }) => (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {children}
                            </a>
                          ),
                          strong: ({ children }) => (
                            <strong className="font-semibold text-foreground/90">
                              {children}
                            </strong>
                          ),
                        }}
                      >
                        {edu.description}
                      </ReactMarkdown>
                    </div>
                  </div>

                  {/* University logo on right */}
                  {edu.logoSrc && (
                    <div className="hidden shrink-0 sm:block">
                      <Image
                        src={edu.logoSrc}
                        alt={edu.university}
                        width={100}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
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
                          expandedSkill === skill.name ? null : skill.name,
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
