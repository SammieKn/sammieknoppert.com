import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  as?: "h1" | "h2";
  className?: string;
  headingClassName?: string;
}

/**
 * SectionHeader component for consistent header styling across sections.
 *
 * Features gradient text styling using bg-clip-text with text-transparent.
 * The combination of these classes makes the background gradient visible
 * through the transparent text, creating the gradient text effect.
 */
export function SectionHeader({
  title,
  subtitle,
  as: HeadingTag = "h2",
  className,
  headingClassName,
}: SectionHeaderProps) {
  return (
    <header className={cn("space-y-3", className)}>
      <HeadingTag
        className={cn(
          "bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl",
          headingClassName
        )}
      >
        {title}
      </HeadingTag>
      {subtitle && (
        <p className="max-w-prose text-muted-foreground">{subtitle}</p>
      )}
    </header>
  );
}
