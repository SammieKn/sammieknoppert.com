"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

interface MermaidDiagramProps {
  chart: string;
}

let initialized = false;

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");

  useEffect(() => {
    if (!initialized) {
      mermaid.initialize({
        startOnLoad: false,
        theme: "neutral",
        themeVariables: {
          fontFamily: "inherit",
        },
      });
      initialized = true;
    }

    const id = `mermaid-${Math.random().toString(36).slice(2)}`;
    mermaid
      .render(id, chart)
      .then(({ svg: renderedSvg }) => setSvg(renderedSvg))
      .catch(() => setSvg(""));
  }, [chart]);

  if (!svg) return null;

  return (
    <div
      ref={ref}
      className="my-8 overflow-x-auto rounded-lg border bg-card p-4 [&_svg]:mx-auto [&_svg]:max-w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
