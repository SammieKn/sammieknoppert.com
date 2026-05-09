import { cn } from "@/lib/utils";

export type OrbConfig = {
  /** Position classes (e.g., "-right-32 -top-32") */
  position: string;
  /** Size classes (e.g., "h-96 w-96") */
  size: string;
  /** Full gradient class (e.g., "bg-gradient-to-br from-primary/20 via-chart-1/10 to-transparent") */
  gradient: string;
  /** Blur classes (e.g., "blur-3xl") */
  blur: string;
  /** Animation delay (e.g., "1s") */
  animationDelay?: string;
  /** Shape (default: "rounded-full") */
  shape?: string;
  /** Animation type (default: "animate-pulse") */
  animation?: string;
};

export type DotConfig = {
  /** Position classes (e.g., "left-[15%] top-[20%]") */
  position: string;
  /** Size classes (e.g., "h-3 w-3") */
  size: string;
  /** Color classes (e.g., "bg-primary/30") */
  color: string;
  /** Animation type (e.g., "animate-float" or "animate-float-delayed") */
  animation: string;
  /** Shape classes (default: "rounded-full") */
  shape?: string;
  /** Transform classes (e.g., "rotate-45") */
  transform?: string;
  /** Hide on mobile */
  hideMobile?: boolean;
};

type BackgroundOrbsProps = {
  /** Array of orb configurations */
  orbs?: OrbConfig[];
  /** Array of dot configurations */
  dots?: DotConfig[];
  /** Whether to show grid pattern */
  showGrid?: boolean;
  /** Grid pattern variant */
  gridVariant?: "default" | "subtle";
  /** Additional classes for the container */
  className?: string;
};

export function BackgroundOrbs({
  orbs = [],
  dots = [],
  showGrid = false,
  gridVariant = "default",
  className,
}: BackgroundOrbsProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {/* Gradient orbs */}
      {orbs.map((orb, index) => (
        <div
          key={`orb-${index}`}
          className={cn(
            "absolute",
            orb.animation || "animate-pulse",
            orb.position,
            orb.size,
            orb.shape || "rounded-full",
            orb.gradient,
            orb.blur
          )}
          style={orb.animationDelay ? { animationDelay: orb.animationDelay } : undefined}
        />
      ))}

      {/* Floating dots */}
      {dots.map((dot, index) => (
        <div
          key={`dot-${index}`}
          className={cn(
            "absolute",
            dot.position,
            dot.size,
            dot.color,
            dot.animation,
            dot.shape || "rounded-full",
            dot.transform,
            dot.hideMobile && "hidden md:block"
          )}
        />
      ))}

      {/* Grid pattern overlay */}
      {showGrid && (
        <div
          className={cn(
            "absolute inset-0",
            gridVariant === "default"
              ? "bg-[linear-gradient(rgba(0,0,0,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)]"
              : "bg-[linear-gradient(rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] dark:bg-[linear-gradient(rgba(255,255,255,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.01)_1px,transparent_1px)]"
          )}
        />
      )}
    </div>
  );
}
