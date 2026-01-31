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

const links = {
  github: "https://github.com/sammieknoppert",
  linkedin: "https://www.linkedin.com/",
  email: "hello@sammieknoppert.com",
} as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 py-16 md:py-24"
    >
      {/* Subtle background effects */}
      <BackgroundOrbs
        orbs={[
          {
            position: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            size: "h-96 w-96",
            gradient: "from-primary/10 via-chart-2/5 to-transparent",
            blur: "blur-3xl",
          },
        ]}
        showGrid
        gridVariant="subtle"
      />

      <div className="container relative z-10 space-y-6">
        <header className="animate-on-scroll space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text">
              Contact
            </span>
          </h2>
          <p className="max-w-prose text-muted-foreground">
            Would love to connect to share ideas, provide help or to brainstorm.
            Use the links below.
          </p>
        </header>

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
            <Card className="mt-6 w-full border-white/10 bg-card/50 shadow-xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Email is the fastest way to reach me.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Email box */}
                <div className="group rounded-lg border border-white/10 bg-muted/30 p-4 transition-all hover:border-primary/20 hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <Mail className="h-5 w-5" />
                    </div>
                    <a
                      href={`mailto:${links.email}`}
                      className="font-medium transition-colors hover:text-primary"
                    >
                      {links.email}
                    </a>
                  </div>
                </div>

                {/* Social buttons */}
                <div className="flex flex-wrap justify-center gap-3">
                  <Button
                    asChild
                    variant="outline"
                    className="group border-white/10 transition-all hover:border-primary/30 hover:bg-primary/5"
                  >
                    <a href={links.linkedin} target="_blank" rel="noreferrer">
                      <Linkedin className="mr-2 h-4 w-4 transition-colors group-hover:text-primary" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="group border-white/10 transition-all hover:border-primary/30 hover:bg-primary/5"
                  >
                    <a href={links.github} target="_blank" rel="noreferrer">
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
