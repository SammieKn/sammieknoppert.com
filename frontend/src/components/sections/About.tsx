import Image from "next/image";
import Link from "next/link";

import { Download } from "lucide-react";
import * as LucideIcons from "lucide-react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
  certifications,
  education,
  skills,
  workExperience,
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

export function About() {
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
          <Card>
            <CardHeader>
              <CardTitle>Work Experience</CardTitle>
              <CardDescription>
                Roles and responsibilities over time.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {workExperience.map((job) => (
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
              ))}
            </CardContent>
          </Card>
          <div className="hidden items-start justify-end md:flex">
            <div className="overflow-hidden rounded-md border bg-card p-4">
              <Image
                src="/images/avatar/avatar_work.png"
                alt="Avatar"
                width={240}
                height={240}
              />
            </div>
          </div>
        </div>

        {/* Education: full width row with single avatar on left */}
        <div className="grid gap-6 md:grid-cols-[280px_1fr]">
          <div className="hidden items-start md:flex">
            <div className="overflow-hidden rounded-md border bg-card p-4">
              <Image
                src="/images/avatar/avatar_education.png"
                alt="Avatar"
                width={240}
                height={240}
              />
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
              <CardDescription>
                Academic background and focus areas.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {education.map((edu) => (
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
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Certifications: full width row */}
        <Card>
          <CardHeader>
            <CardTitle>Certifications</CardTitle>
            <CardDescription>Click an item to view details.</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {certifications.map((cert) => (
                <AccordionItem key={cert.title} value={cert.title}>
                  <AccordionTrigger>
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 overflow-hidden rounded border bg-card">
                        <Image
                          src={cert.logoSrc ?? "/images/avatar/placeholder.svg"}
                          alt={`${cert.title} logo`}
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="text-left">
                        <p className="font-medium leading-none">{cert.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {cert.date}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-sm leading-relaxed">
                      {cert.details ?? ""}
                    </p>
                    <div className="overflow-hidden rounded-md border bg-card">
                      <Image
                        src={cert.imageSrc ?? "/images/avatar/placeholder.svg"}
                        alt={`${cert.title} certificate image`}
                        width={1200}
                        height={675}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Skills: title + one sentence + optional icons + more info toggle */}
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
            <CardDescription>Overview with details on demand.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name} className="rounded-md border p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium flex items-center gap-2">
                      <SkillIcon iconName={skill.iconName} />
                      <span>{skill.name}</span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {skill.summary}
                    </p>
                  </div>
                  <Accordion type="single" collapsible className="w-auto">
                    <AccordionItem value="more">
                      <AccordionTrigger className="p-0">
                        <span className="text-sm font-medium underline">
                          More information
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm leading-relaxed">
                          {skill.details}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
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
