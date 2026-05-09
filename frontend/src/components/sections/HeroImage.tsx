import Image from "next/image";

interface FloatingCard {
  position: string;
  animation: string;
  label: string;
  value: string;
}

interface HeroImageProps {
  src: string;
  alt: string;
  floatingCards?: FloatingCard[];
  animationDelay?: string;
}

const defaultFloatingCards: FloatingCard[] = [
  {
    position: "-left-6 top-1/4",
    animation: "animate-float",
    label: "Currently at",
    value: "Arcadis",
  },
  {
    position: "-right-4 bottom-1/4",
    animation: "animate-float-delayed",
    label: "Focus",
    value: "AI & Data",
  },
];

export function HeroImage({
  src,
  alt,
  floatingCards = defaultFloatingCards,
  animationDelay = "0.3s",
}: HeroImageProps) {
  return (
    <div
      className="animate-fade-in-up relative mx-auto w-full max-w-md"
      style={{ animationDelay }}
    >
      {/* Decorative ring */}
      <div className="absolute -inset-4 animate-spin-slow rounded-full border border-dashed border-primary/20" />
      <div className="absolute -inset-8 animate-spin-slow-reverse rounded-full border border-dashed border-chart-1/10" />

      {/* Glow effect behind image */}
      <div className="absolute inset-0 scale-95 rounded-2xl bg-gradient-to-br from-primary/20 via-chart-1/10 to-chart-2/20 blur-2xl" />

      {/* Main image container */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card/80 to-card/40 p-1 shadow-2xl backdrop-blur-sm dark:border-white/10">
        <div className="overflow-hidden rounded-xl">
          <Image
            src={src}
            alt={alt}
            width={800}
            height={800}
            priority
            className="h-auto w-full transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Floating cards */}
      {floatingCards.map((card) => (
        <div
          key={`${card.position}-${card.label}`}
          className={`absolute ${card.position} ${card.animation} rounded-lg border border-border bg-card/90 px-3 py-2 shadow-lg backdrop-blur-sm dark:border-white/10`}
        >
          <p className="text-xs font-medium text-muted-foreground">
            {card.label}
          </p>
          <p className="font-semibold text-foreground">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
