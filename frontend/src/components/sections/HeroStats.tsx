interface HeroStatItem {
  value: string;
  label: string;
}

interface HeroStatsProps {
  stats?: HeroStatItem[];
  animationDelay?: string;
}

const defaultStats: HeroStatItem[] = [
  {
    value: "3+",
    label: "Years Experience",
  },
  {
    value: "10+",
    label: "Projects Delivered",
  },
  {
    value: "AI + Civil",
    label: "Unique Blend",
  },
];

export function HeroStats({ stats = defaultStats, animationDelay = "0.6s" }: HeroStatsProps) {
  return (
    <div
      className="animate-fade-in-up flex flex-wrap gap-8 pt-4"
      style={{ animationDelay }}
    >
      {stats.map((stat) => (
        <div key={`${stat.value}-${stat.label}`} className="space-y-1">
          <p className="text-2xl font-bold text-foreground">{stat.value}</p>
          <p className="text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
