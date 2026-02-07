"use client";

import Image from "next/image";
import { useState } from "react";

import { ChevronDown } from "lucide-react";
import ReactMarkdown from "react-markdown";

import { cn } from "@/lib/utils";
import type { WorkExperience } from "@/types/profile";

// Gradient color palette (left to right: primary -> chart-1 -> chart-2)
const GRADIENT_COLORS = [
  "bg-primary/15 text-primary border-primary/20",
  "bg-chart-1/15 text-chart-1 border-chart-1/20",
  "bg-chart-2/15 text-chart-2 border-chart-2/20",
];

// Get color based on position in the gradient (0 = start, 1 = end)
function getGradientColor(index: number, total: number): string {
  if (total <= 1) return GRADIENT_COLORS[0];
  // Map index to position in gradient array
  const position = (index / (total - 1)) * (GRADIENT_COLORS.length - 1);
  const colorIndex = Math.round(position);
  return GRADIENT_COLORS[colorIndex];
}

interface RoleCardProps {
  role: WorkExperience;
  className?: string;
}

export function RoleCard({ role, className }: RoleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Get first paragraph for preview
  const paragraphs = role.description.split("\n\n").filter(Boolean);
  const firstParagraph = paragraphs[0] || "";
  const remainingContent = paragraphs.slice(1).join("\n\n");
  const hasMoreContent = remainingContent.length > 0;

  return (
    <div
      className={cn(
        "group relative border-t border-white/10 bg-transparent py-6 transition-all duration-300",
        "hover:bg-card/30",
        isExpanded && "bg-card/20",
        className
      )}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative w-full cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <div className="flex gap-5">
          {/* Avatar */}
          {role.avatarSrc && (
            <div className="relative hidden shrink-0 sm:block">
              <Image
                src={role.avatarSrc}
                alt={role.role}
                width={160}
                height={160}
                className="rounded-lg object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="min-w-0 flex-1">
            {/* Header: Role, Company, Dates */}
            <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {role.role}
                </h3>
                <p className="text-sm font-medium text-muted-foreground">
                  {role.company} · {role.startDate} — {role.endDate}
                </p>
              </div>
            </div>

            {/* Tags */}
            {role.tags && role.tags.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-1.5">
                {role.tags.map((tag, index) => (
                  <span
                    key={tag}
                    className={cn(
                      "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium",
                      getGradientColor(index, role.tags!.length)
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Hook - The Eye Catcher */}
            <p className="text-lg leading-relaxed text-foreground">
              <ReactMarkdown
                components={{
                  p: ({ children }) => <>{children}</>,
                  em: ({ children }) => (
                    <em className="not-italic font-semibold">
                      {children}
                    </em>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold">
                      {children}
                    </strong>
                  ),
                }}
              >
                {role.hook}
              </ReactMarkdown>
            </p>

            {/* First paragraph - always visible */}
            <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
              <ReactMarkdown
                components={{
                  p: ({ children }) => <>{children}</>,
                  strong: ({ children }) => (
                    <strong className="font-semibold text-foreground/90">
                      {children}
                    </strong>
                  ),
                  em: ({ children }) => <em>{children}</em>,
                }}
              >
                {firstParagraph}
              </ReactMarkdown>
            </div>

            {/* Remaining content - expandable */}
            {hasMoreContent && (
              <div
                className={cn(
                  "relative overflow-hidden transition-all duration-300",
                  isExpanded ? "mt-3 max-h-[2000px]" : "mt-3 max-h-8"
                )}
              >
                <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => <p className="mb-3">{children}</p>,
                      strong: ({ children }) => (
                        <strong className="font-semibold text-foreground/90">
                          {children}
                        </strong>
                      ),
                      em: ({ children }) => <em>{children}</em>,
                    }}
                  >
                    {remainingContent}
                  </ReactMarkdown>
                </div>
                {/* Fade overlay when collapsed */}
                {!isExpanded && (
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
                )}
              </div>
            )}

            {/* Expand indicator - only show if there's more content */}
            {hasMoreContent && (
              <div
                className={cn(
                  "mt-2 flex items-center gap-1 text-xs font-medium text-muted-foreground/50 transition-colors",
                  "group-hover:text-muted-foreground"
                )}
              >
                <span>{isExpanded ? "Show less" : "Read more"}</span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-300",
                    isExpanded && "rotate-180"
                  )}
                />
              </div>
            )}
          </div>
        </div>
      </button>
    </div>
  );
}
