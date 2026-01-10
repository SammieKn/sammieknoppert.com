import Link from "next/link";

import { Github, Linkedin, Mail } from "lucide-react";

import { GITHUB, LINKEDIN, EMAIL, WEBSITE } from "@/constants/links";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-background/50 backdrop-blur-sm">
      {/* Subtle gradient line at top */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Minimal floating particles - hidden on mobile */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-4 left-[20%] hidden h-1 w-1 animate-float rounded-full bg-primary/20 md:block" />
        <div className="absolute bottom-6 right-[30%] hidden h-1 w-1 animate-float-delayed rounded-full bg-chart-2/15 md:block" />
      </div>

      <div className="container relative z-10 flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-0">
          <span className="font-medium text-foreground">Sammie Knoppert</span>
          <span className="mx-2 hidden sm:inline">•</span>
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4" />
            <span className="relative">
              {EMAIL}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all group-hover:w-full" />
            </span>
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
            <span className="relative">
              LinkedIn
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all group-hover:w-full" />
            </span>
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Github className="h-4 w-4" />
            <span className="relative">
              GitHub
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all group-hover:w-full" />
            </span>
          </a>
          <Link
            href={WEBSITE}
            className="group relative text-muted-foreground transition-colors hover:text-primary"
          >
            <span className="relative">
              Source Code
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all group-hover:w-full" />
            </span>
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5 py-4">
        <div className="container">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sammie Knoppert. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
