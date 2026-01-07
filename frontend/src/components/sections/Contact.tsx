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
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
              <CardDescription>
                Would love to connect to share ideas, provide help or to
                brainstorm. Use the links below.
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
                <p className="mt-2 text-sm text-muted-foreground">
                  Email is the fastest way to reach me.
                </p>
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

          <div className="hidden justify-end lg:flex">
            <div className="w-full max-w-sm overflow-hidden rounded-lg border bg-card p-6">
              <Image
                src="/images/avatar/avatar_contact.png"
                alt="Contact illustration"
                width={420}
                height={420}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
