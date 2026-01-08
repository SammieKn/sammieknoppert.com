import Link from "next/link";

import { Github, Linkedin, Mail } from "lucide-react";

import { GITHUB, LINKEDIN, EMAIL, WEBSITE } from "@/constants/links";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-3 py-6 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Sammie Knoppert</span>
          <span className="mx-2">•</span>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 hover:underline"
          >
            <Mail className="h-4 w-4" />
            {EMAIL}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:underline"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:underline"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <Link href={WEBSITE} className="text-sm hover:underline">
            Check out the source code!
          </Link>
        </div>
      </div>
    </footer>
  );
}
