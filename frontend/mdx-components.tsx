import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      <p className="text-lg leading-relaxed text-muted-foreground">
        {children}
      </p>
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

    ...components,
  };
}
