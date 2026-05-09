"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Bot,
  ExternalLink,
  FlaskConical,
  Lightbulb,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TagList } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

type LabCategory = "AI Apps" | "Insights" | "Experiments";

type LabItem = {
  id: string;
  type: LabCategory;
  title: string;
  excerpt: string;
  tags: string[];
  readTime?: string;
  href: string;
};

const FILTERS = ["All", "AI Apps", "Insights", "Experiments"] as const;

type FilterType = (typeof FILTERS)[number];

const LAB_ITEMS: LabItem[] = [
  {
    id: "app-portfolio-assistant",
    type: "AI Apps",
    title: "Portfolio Prompt Optimizer",
    excerpt:
      "A lightweight app that rewrites portfolio case-study prompts for different audiences and tones.",
    tags: ["LLM", "Prompting", "UX"],
    href: "#",
  },
  {
    id: "app-meeting-synth",
    type: "AI Apps",
    title: "Meeting Synth",
    excerpt:
      "Turn rough standup notes into concise action lists and follow-up drafts in under a minute.",
    tags: ["Python", "NLP", "Productivity"],
    href: "#",
  },
  {
    id: "insight-rag-notes",
    type: "Insights",
    title: "What I Learned from Shipping a Tiny RAG Prototype",
    excerpt:
      "A quick reflection on chunking trade-offs, retrieval quality, and where small prototypes create the most clarity.",
    tags: ["RAG", "Infra", "Learning"],
    readTime: "3 min read",
    href: "#",
  },
  {
    id: "insight-ai-product",
    type: "Insights",
    title: "Designing AI Features That Don\'t Feel Like Magic Tricks",
    excerpt:
      "How to pair transparent UX states with model outputs so users trust the system without over-promising confidence.",
    tags: ["AI", "Product", "Trust"],
    readTime: "4 min read",
    href: "#",
  },
  {
    id: "insight-data-velocity",
    type: "Insights",
    title: "Data Pipelines for Teams That Move Fast",
    excerpt:
      "Notes on balancing maintainability and speed when your roadmap changes weekly and data contracts keep evolving.",
    tags: ["Data", "Agile", "Architecture"],
    readTime: "5 min read",
    href: "#",
  },
];

function TypeBadge({ type }: { type: LabCategory }) {
  const badgeStyles: Record<LabCategory, string> = {
    "AI Apps": "border-primary/30 bg-primary/10 text-primary",
    Insights: "border-white/15 bg-white/5 text-foreground/90",
    Experiments: "border-accent/30 bg-accent/10 text-accent",
  };

  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full border px-2.5 py-1 text-xs font-medium",
        badgeStyles[type]
      )}
    >
      {type}
    </span>
  );
}

export function LabGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filteredItems = useMemo(
    () =>
      activeFilter === "All"
        ? LAB_ITEMS
        : LAB_ITEMS.filter((item) => item.type === activeFilter),
    [activeFilter]
  );

  return (
    <section className="space-y-6" aria-labelledby="lab-content-heading">
      <h2 id="lab-content-heading" className="sr-only">
        Lab content
      </h2>

      <div className="flex flex-wrap items-center gap-2 rounded-xl border border-white/10 bg-card/50 p-2 backdrop-blur-sm">
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <Button
              key={filter}
              type="button"
              variant={isActive ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className={cn("rounded-full", !isActive && "text-muted-foreground")}
            >
              {filter}
            </Button>
          );
        })}
      </div>

      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => {
            const isApp = item.type === "AI Apps";

            return (
              <Card
                key={item.id}
                className="flex h-full flex-col gap-0 border-white/10 bg-card/50 py-0 backdrop-blur-sm"
              >
                <CardHeader className="space-y-3 p-5 pb-4">
                  <TypeBadge type={item.type} />

                  {isApp && (
                    <div className="flex h-24 items-center justify-center rounded-lg border border-dashed border-primary/30 bg-primary/5 text-primary">
                      <FlaskConical className="h-5 w-5" />
                    </div>
                  )}

                  <CardTitle className={cn("leading-tight", !isApp && "text-xl")}>{item.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 px-5 pb-5">
                  <p className="line-clamp-3 text-sm text-muted-foreground">{item.excerpt}</p>
                  <TagList tags={item.tags} size="sm" className="gap-1.5" />
                </CardContent>

                <CardFooter className="mt-auto px-5 pb-5">
                  {isApp ? (
                    <Button asChild size="sm" className="w-full">
                      <Link href={item.href}>
                        <Bot className="h-4 w-4" />
                        Try it out
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  ) : (
                    <div className="flex w-full items-center justify-between text-sm">
                      <span className="text-muted-foreground">{item.readTime}</span>
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
                      >
                        Read more
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      ) : (
        <Card className="border-white/10 bg-card/50 py-0 backdrop-blur-sm">
          <CardContent className="flex items-center gap-2 py-6 text-sm text-muted-foreground">
            <Lightbulb className="h-4 w-4" />
            No entries for this filter yet.
          </CardContent>
        </Card>
      )}

      <Card className="border-white/10 bg-card/40 py-0 backdrop-blur-sm">
        <CardContent className="flex flex-col gap-2 p-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Want to see how these experiments translate into production work?</p>
          <div className="flex items-center gap-4">
            <Link href="/projects" className="transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="/#contact" className="transition-colors hover:text-primary">
              Contact me
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
