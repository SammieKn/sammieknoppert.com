import Image from "next/image";

import { Github, Linkedin, Mail } from "lucide-react";

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
    <section id="contact" className="border-t border-border py-16 md:py-24">
      <div className="container space-y-6">
        <header className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Contact
          </h2>
          <p className="max-w-prose text-muted-foreground">
            Would love to connect to share ideas, provide help or to brainstorm.
            Use the links below.
          </p>
        </header>

        <div className="flex justify-center">
          <div className="w-90 flex flex-col items-center">
            <Image
              src="/images/avatar/avatar_contact.png"
              alt="Avatar pointing down towards the contact info"
              width={360}
              height={360}
              className="h-auto w-auto"
            />
            <Card className="mt-6 w-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Email is the fastest way to reach me.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md border bg-card p-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a
                      href={`mailto:${links.email}`}
                      className="font-medium hover:underline"
                    >
                      {links.email}
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="outline">
                    <a href={links.linkedin} target="_blank" rel="noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={links.github} target="_blank" rel="noreferrer">
                      <Github className="mr-2 h-4 w-4" />
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
