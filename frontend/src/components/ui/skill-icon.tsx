import * as LucideIcons from "lucide-react";

interface SkillIconProps {
  iconName: string;
  className?: string;
}

export function SkillIcon({ iconName, className }: SkillIconProps) {
  const Icon = (
    LucideIcons as unknown as Record<
      string,
      React.ComponentType<{ className?: string }>
    >
  )[iconName];

  if (!Icon) {
    return (
      <LucideIcons.CircleHelp
        className={className ?? "h-5 w-5 text-muted-foreground"}
      />
    );
  }

  return <Icon className={className ?? "h-5 w-5"} />;
}
