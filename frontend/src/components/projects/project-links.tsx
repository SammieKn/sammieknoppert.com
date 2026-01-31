import { Code2, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProjectLinksProps = {
  links?: {
    code?: string;
    demo?: string;
  };
  variant?: "default" | "compact";
  className?: string;
};

export function ProjectLinks({
  links,
  variant = "default",
  className,
}: ProjectLinksProps) {
  if (!links?.code && !links?.demo) {
    return null;
  }

  if (variant === "compact") {
    return (
      <div className={cn("flex gap-2", className)}>
        {links.code && (
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
          >
            <a href={links.code} target="_blank" rel="noreferrer">
              <Code2 className="h-4 w-4" />
              <span className="sr-only">View code</span>
            </a>
          </Button>
        )}
        {links.demo && (
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
          >
            <a href={links.demo} target="_blank" rel="noreferrer">
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">View demo</span>
            </a>
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {links.code && (
        <Button
          asChild
          variant="outline"
          size="sm"
          className="border-white/10 bg-white/5 hover:bg-white/10"
        >
          <a href={links.code} target="_blank" rel="noreferrer">
            <Code2 className="mr-2 h-4 w-4" />
            Code
          </a>
        </Button>
      )}
      {links.demo && (
        <Button
          asChild
          variant="outline"
          size="sm"
          className="border-white/10 bg-white/5 hover:bg-white/10"
        >
          <a href={links.demo} target="_blank" rel="noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Demo
          </a>
        </Button>
      )}
    </div>
  );
}
