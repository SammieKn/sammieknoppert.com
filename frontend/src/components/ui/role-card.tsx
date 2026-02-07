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
        "group relative rounded-lg border border-border bg-card/50 p-5 shadow-sm transition-all duration-300",
        "hover:border-primary/30 hover:bg-card/80 hover:shadow-md",
        isExpanded && "border-primary/20 bg-card/70 shadow-md",
        className,
      )}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative w-full cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {/* Top row: Avatar + Title/Company/Tags/Hook */}
        <div className="flex gap-4 sm:gap-5">
          {/* Avatar - always visible, always on left */}
          {role.avatarSrc && (
            <div className="relative shrink-0">
              <Image
                src={role.avatarSrc}
                alt={role.role}
                width={160}
                height={160}
                className="h-24 w-24 rounded-lg object-cover sm:h-40 sm:w-40"
              />
            </div>
          )}

          {/* Title, company, tags, hook next to avatar */}
          <div className="min-w-0 flex-1">
            {/* Header: Role, Company, Dates */}
            <div className="mb-2">
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                {role.role}
              </h3>
              <p className="text-xs font-medium text-muted-foreground sm:text-sm">
                {role.company} · {role.startDate} — {role.endDate}
              </p>
            </div>

            {/* Tags */}
            {role.tags && role.tags.length > 0 && (
              <div className="mb-2 flex flex-wrap gap-1 sm:mb-3 sm:gap-1.5">
                {role.tags.map((tag, index) => (
                  <span
                    key={tag}
                    className={cn(
                      "inline-flex items-center rounded-full border px-1.5 py-0.5 text-[10px] font-medium sm:px-2 sm:text-xs",
                      getGradientColor(index, role.tags!.length),
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Hook - The Eye Catcher (hidden on mobile, shown on desktop) */}
            <p className="hidden text-lg leading-relaxed text-foreground sm:block">
              <ReactMarkdown
                components={{
                  p: ({ children }) => <>{children}</>,
                  em: ({ children }) => (
                    <em className="not-italic font-semibold">{children}</em>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold">{children}</strong>
                  ),
                }}
              >
                {role.hook}
              </ReactMarkdown>
            </p>
          </div>
        </div>

        {/* Hook on mobile - below the avatar row */}
        <p className="mt-3 text-base leading-relaxed text-foreground sm:hidden">
          <ReactMarkdown
            components={{
              p: ({ children }) => <>{children}</>,
              em: ({ children }) => (
                <em className="not-italic font-semibold">{children}</em>
              ),
              strong: ({ children }) => (
                <strong className="font-bold">{children}</strong>
              ),
            }}
          >
            {role.hook}
          </ReactMarkdown>
        </p>

        {/* Description - full width below the header row */}
        <div className="mt-4">
          {/* First paragraph - always visible */}
          <div className="text-sm leading-relaxed text-muted-foreground">
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
                isExpanded ? "mt-3 max-h-[2000px]" : "mt-3 max-h-8",
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
                "group-hover:text-muted-foreground",
              )}
            >
              <span>{isExpanded ? "Show less" : "Read more"}</span>
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-300",
                  isExpanded && "rotate-180",
                )}
              />
            </div>
          )}
        </div>
      </button>
    </div>
  );
}
