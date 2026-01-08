"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

import { ChevronDown, ChevronUp, Download, X } from "lucide-react";
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
  const cardRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const handleToggleFromTop = () => {
    // X button: natural collapse upwards, no scroll adjustment
    onToggle();
  };

  const handleToggleFromBottom = () => {
    if (isExpanded && cardRef.current) {
      // Bottom button: maintain card top position so it collapses downward
      const cardTop =
        cardRef.current.getBoundingClientRect().top + window.scrollY;
      onToggle();
      requestAnimationFrame(() => {
        window.scrollTo({ top: cardTop - 100, behavior: "instant" });
      });
    } else {
      onToggle();
    }
  };

  return (
    <Card ref={cardRef}>
      <CardHeader className="relative">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {isExpanded && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 h-6 w-6"
            onClick={handleToggleFromTop}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <div
          className={`space-y-4 overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {items.map((item, index) => renderItem(item, index))}
        </div>
      </CardContent>
      <CardFooter ref={footerRef}>
        <Button
          variant="outline"
          onClick={handleToggleFromBottom}
          className="w-full"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="mr-2 h-4 w-4" />
              Hide my {title.toLowerCase()}
            </>
          ) : (
            <>
              <ChevronDown className="mr-2 h-4 w-4" />
              Show my {title.toLowerCase()}
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
    <section id="about" className="border-t border-border py-16 md:py-24">
      <div className="container space-y-10">
        <header className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            About
          </h2>
          <p className="max-w-prose text-muted-foreground">
            A quick overview of my experience, education, certifications, and
            skills.
          </p>
        </header>

        {/* Work Experience: full width row with single avatar on right */}
        <div className="grid gap-6 md:grid-cols-[1fr_280px]">
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
                  className="space-y-1"
                >
                  <p className="text-sm text-muted-foreground">
                    {job.startDate} — {job.endDate}
                  </p>
                  <p className="font-medium">{job.role}</p>
                  <p className="text-sm text-muted-foreground">{job.company}</p>
                  <p className="text-sm leading-relaxed">{job.description}</p>
                </div>
              );
            }}
          />
          <div className="hidden items-start justify-end md:flex">
            <Image
              src="/images/avatar/avatar_work.png"
              alt="Avatar"
              width={240}
              height={240}
              className="rounded-md"
            />
          </div>
        </div>

        {/* Education: full width row with single avatar on left */}
        <div className="grid gap-6 md:grid-cols-[280px_1fr]">
          <div className="hidden items-start md:flex">
            <Image
              src="/images/avatar/avatar_education.png"
              alt="Avatar"
              width={240}
              height={240}
              className="rounded-md"
            />
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
                  className="space-y-1"
                >
                  <p className="text-sm text-muted-foreground">
                    {edu.year} • {edu.level}
                  </p>
                  <p className="font-medium">{edu.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {edu.university}
                  </p>
                  {edu.grade ? (
                    <p className="text-sm text-muted-foreground">
                      Grade: {edu.grade}
                    </p>
                  ) : null}
                  <p className="text-sm leading-relaxed">{edu.description}</p>
                </div>
              );
            }}
          />
        </div>

        {/* Certifications: full width carousel */}
        <Card>
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
                      <Card className="h-full">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="h-12 w-12 shrink-0 overflow-hidden rounded border bg-card">
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
                              <p className="font-medium leading-tight">
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
              <CarouselPrevious className="-left-12" />
              <CarouselNext className="-right-12" />
            </Carousel>
          </CardContent>
        </Card>

        {/* Skills: title + summary + expandable details button */}
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
            <CardDescription>Overview with details on demand.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="rounded-md border p-4">
                  <div className="flex items-start gap-2">
                    <SkillIcon iconName={skill.iconName} />
                    <div className="flex-1">
                      <p className="font-medium">{skill.name}</p>
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
                  <div className="rounded-md border bg-muted/50 p-4">
                    <p className="text-sm leading-relaxed">{skill.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Resume button standalone on the right */}
        <div className="flex justify-end">
          <Button asChild>
            <Link href="/cv/sammie-knoppert-cv.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
