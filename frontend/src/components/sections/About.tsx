"use client";

import Image from "next/image";
import Link from "next/link";

import { Download } from "lucide-react";
import ReactMarkdown from "react-markdown";

import { BackgroundOrbs } from "@/components/ui/background-orbs";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RoleCard } from "@/components/ui/role-card";
import { SectionHeader } from "@/components/ui/section-header";
import { education, skills, workExperience } from "@/data/profile";

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
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 py-16 md:py-24"
    >
      <AboutFloatingShapes />

      <div className="container relative z-10 space-y-10">
        <SectionHeader
          title="About"
          subtitle="A quick overview of my experience, education, and skills."
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

        {/* Skills: horizontal carousel with icons */}
        <div className="animate-on-scroll">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground">Skills</h2>
            <p className="text-sm text-muted-foreground">
              Tools and technologies I work with.
            </p>
          </div>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-2">
              {skills.map((skill) => (
                <CarouselItem
                  key={skill.name}
                  className="basis-1/3 pl-2 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="group flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-card/50 p-4 transition-all hover:border-primary/20 hover:bg-card/70">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={skill.iconUrl}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="h-10 w-10 object-contain transition-transform group-hover:scale-110"
                    />
                    <p className="text-center text-xs font-medium text-muted-foreground group-hover:text-foreground">
                      {skill.name}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 border-white/10 bg-card/50 backdrop-blur-sm hover:bg-card" />
            <CarouselNext className="-right-12 border-white/10 bg-card/50 backdrop-blur-sm hover:bg-card" />
          </Carousel>
        </div>

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
