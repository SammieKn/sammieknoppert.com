import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ROICalculator } from "@/components/projects/roi-calculator";
import { MermaidDiagram } from "@/components/projects/mermaid-diagram";

// Custom MDX components for rich project content
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings
    h1: ({ children }) => (
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold tracking-tight">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold tracking-tight">{children}</h3>
    ),

    // Paragraphs and text
    p: ({ children }) => (
      <p className="leading-relaxed text-muted-foreground">{children}</p>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),

    // Lists
    ul: ({ children }) => (
      <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal space-y-1 pl-6 text-muted-foreground">
        {children}
      </ol>
    ),

    // Code
    code: ({ children }) => (
      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="overflow-x-auto rounded-lg border bg-muted p-4 font-mono text-sm">
        {children}
      </pre>
    ),

    // Blockquote / Callout
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
        {children}
      </blockquote>
    ),

    // Tables
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-muted/50 text-foreground">{children}</thead>
    ),
    tbody: ({ children }) => (
      <tbody className="divide-y divide-border text-muted-foreground">
        {children}
      </tbody>
    ),
    tr: ({ children }) => <tr>{children}</tr>,
    th: ({ children }) => (
      <th className="px-4 py-3 text-left font-semibold">{children}</th>
    ),
    td: ({ children }) => <td className="px-4 py-3">{children}</td>,

    // Images - uses Next.js Image for optimization
    img: (props) => (
      <Image
        {...(props as ImageProps)}
        width={1200}
        height={675}
        className="my-4 h-auto w-full rounded-lg border"
        alt={props.alt ?? "Project image"}
      />
    ),

    // Custom components for project authoring
    Lead: ({ children }: { children: React.ReactNode }) => (
      <div className="text-lg leading-relaxed text-muted-foreground mb-6">
        {children}
      </div>
    ),

    ProjectImage: ({
      src,
      alt,
      caption,
    }: {
      src: string;
      alt: string;
      caption?: string;
    }) => (
      <figure className="my-8">
        <div className="mx-auto max-w-3xl rounded-lg border border-border bg-card p-2 shadow-md">
          <Image
            src={src}
            alt={alt}
            width={800}
            height={450}
            className="h-auto w-full rounded-md"
          />
        </div>
        {(caption || alt) && (
          <figcaption className="mt-3 text-center text-sm text-muted-foreground">
            {caption ?? alt}
          </figcaption>
        )}
      </figure>
    ),

    Callout: ({
      title,
      children,
    }: {
      title?: string;
      children: React.ReactNode;
    }) => (
      <Card className="my-6">
        {title && (
          <CardHeader className="pb-2">
            <CardTitle className="text-base">{title}</CardTitle>
          </CardHeader>
        )}
        <CardContent className={title ? "" : "pt-6"}>{children}</CardContent>
      </Card>
    ),

    Gallery: ({ children }: { children: React.ReactNode }) => (
      <div className="my-6 grid gap-4 sm:grid-cols-2">{children}</div>
    ),

    CallToAction: ({ children }: { children: React.ReactNode }) => (
      <Card className="my-8 border-primary/20 bg-card/50 backdrop-blur-sm">
        <CardContent className="flex flex-col items-center gap-4 py-8 text-center">
          <div className="text-lg text-muted-foreground [&_p]:text-lg">
            {children}
          </div>
          <a
            href="mailto:hello@sammieknoppert.com"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            hello@sammieknoppert.com
          </a>
        </CardContent>
      </Card>
    ),

    ROICalculator: ({
      baseHours,
      newHours,
      hourlyRate,
    }: {
      baseHours: string;
      newHours: string;
      hourlyRate: string;
    }) => (
      <ROICalculator
        baseHours={baseHours}
        newHours={newHours}
        hourlyRate={hourlyRate}
      />
    ),

    MermaidDiagram: ({ chart }: { chart: string }) => (
      <MermaidDiagram chart={chart} />
    ),

    ...components,
  };
}
