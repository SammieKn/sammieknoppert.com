import Image from "next/image";

import { Github, Linkedin, Mail } from "lucide-react";

import { BackgroundOrbs } from "@/components/ui/background-orbs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GITHUB, LINKEDIN, EMAIL } from "@/constants/links";
import { SectionHeader } from "@/components/ui/section-header";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-divider relative overflow-hidden py-16 md:py-24"
    >
      {/* Subtle background effects */}
      <BackgroundOrbs
        orbs={[
          {
            position: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            size: "h-96 w-96",
            gradient:
              "bg-gradient-to-br from-primary/15 via-chart-2/8 to-transparent dark:from-primary/10 dark:via-chart-2/5",
            blur: "blur-3xl",
          },
        ]}
        showGrid
        gridVariant="subtle"
      />

      <div className="container relative z-10 space-y-6">
        <SectionHeader
          title="Contact"
          subtitle="Would love to connect to share ideas, provide help or to brainstorm. Use the links below."
          className="animate-on-scroll"
        />

        <div className="animate-on-scroll flex justify-center">
          <div className="flex w-full max-w-md flex-col items-center">
            {/* Avatar with decorative ring */}
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 animate-spin-slow rounded-full border border-dashed border-primary/20 md:-inset-4" />
              {/* Glow effect */}
              <div className="absolute inset-0 scale-90 rounded-full bg-gradient-to-br from-primary/15 via-chart-2/10 to-transparent blur-2xl" />
              <Image
                src="/images/avatar/avatar_contact.png"
                alt="Avatar pointing down towards the contact info"
                width={320}
                height={320}
                className="relative h-auto w-auto transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Contact Card */}
            <Card className="mt-6 w-full border-border bg-card shadow-[0_4px_24px_-4px_rgba(71,85,105,0.12),0_2px_8px_-2px_rgba(71,85,105,0.08)] backdrop-blur-sm dark:shadow-lg">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Email is the fastest way to reach me.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Email box */}
                <div className="group rounded-lg border border-border bg-muted/50 p-4 shadow-sm transition-all hover:border-primary/30 hover:bg-muted/70 hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <Mail className="h-5 w-5" />
                    </div>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="font-medium transition-colors hover:text-primary"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>

                {/* Social buttons */}
                <div className="flex flex-wrap justify-center gap-3">
                  <Button
                    asChild
                    variant="outline"
                    className="group border-border transition-all hover:-translate-y-px hover:border-primary/30 hover:bg-primary/5 hover:shadow-sm"
                  >
                    <a href={LINKEDIN} target="_blank" rel="noreferrer">
                      <Linkedin className="mr-2 h-4 w-4 transition-colors group-hover:text-primary" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="group border-border transition-all hover:-translate-y-px hover:border-primary/30 hover:bg-primary/5 hover:shadow-sm"
                  >
                    <a href={GITHUB} target="_blank" rel="noreferrer">
                      <Github className="mr-2 h-4 w-4 transition-colors group-hover:text-primary" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
