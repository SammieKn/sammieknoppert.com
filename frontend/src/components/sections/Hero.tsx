"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { BackgroundOrbs } from "@/components/ui/background-orbs";
import { Button } from "@/components/ui/button";

// Animated floating shapes component
function FloatingShapes() {
  return (
    <BackgroundOrbs
      orbs={[
        {
          position: "-right-32 -top-32",
          size: "h-96 w-96",
          gradient: "bg-gradient-to-br from-primary/20 via-chart-1/10 to-transparent",
          blur: "blur-3xl",
        },
        {
          position: "-bottom-24 -left-24",
          size: "h-72 w-72",
          gradient: "bg-gradient-to-tr from-chart-2/15 via-primary/10 to-transparent",
          blur: "blur-3xl",
          animationDelay: "1s",
        },
        {
          position: "right-1/4 top-1/3",
          size: "h-48 w-48",
          gradient: "bg-gradient-to-br from-chart-4/10 to-transparent",
          blur: "blur-2xl",
          animationDelay: "2s",
        },
      ]}
      dots={[
        {
          position: "left-[15%] top-[20%]",
          size: "h-3 w-3",
          color: "bg-primary/30",
          animation: "animate-float",
        },
        {
          position: "right-[20%] top-[15%]",
          size: "h-2 w-2",
          color: "bg-chart-1/40",
          animation: "animate-float-delayed",
        },
        {
          position: "bottom-[30%] left-[10%]",
          size: "h-4 w-4",
          color: "bg-chart-2/20",
          animation: "animate-float",
          transform: "rotate-45",
        },
        {
          position: "bottom-[20%] right-[15%]",
          size: "h-3 w-3",
          color: "bg-chart-4/25",
          animation: "animate-float-delayed",
          shape: "rounded-sm",
        },
        {
          position: "left-[30%] top-[60%]",
          size: "h-2 w-2",
          color: "bg-primary/20",
          animation: "animate-float",
        },
      ]}
      showGrid
      gridVariant="default"
    />
  );
}

// Typing animation hook
function useTypingEffect(
  texts: string[],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000
) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    textIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return displayText;
}

export function Hero() {
  const roles = [
    "Data Scientist",
    "AI Engineer",
    "Civil Engineering Graduate",
    "Problem Solver",
  ];
  const typedRole = useTypingEffect(roles);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] overflow-hidden py-16 md:py-24"
    >
      <FloatingShapes />

      <div className="container relative z-10 grid items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* Left: Text content */}
        <div className="flex flex-col gap-8">
          {/* Badge */}
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-chart-2 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-chart-2" />
              </span>
              Available for opportunities
            </span>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <p
              className="animate-fade-in-up text-lg font-medium text-muted-foreground"
              style={{ animationDelay: "0.1s" }}
            >
              Hi, I&apos;m Sammie Knoppert 👋
            </p>

            <h1
              className="animate-fade-in-up text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
              style={{ animationDelay: "0.2s" }}
            >
              Building the{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent">
                  Bridge
                </span>
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary via-chart-1 to-chart-2 opacity-50" />
              </span>{" "}
              between Civil Engineering & AI
            </h1>

            {/* Typing effect */}
            <div
              className="animate-fade-in-up h-8 text-xl text-muted-foreground md:text-2xl"
              style={{ animationDelay: "0.3s" }}
            >
              <span>{typedRole}</span>
              <span className="ml-0.5 inline-block h-6 w-0.5 animate-blink bg-primary" />
            </div>

            <p
              className="animate-fade-in-up max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
              style={{ animationDelay: "0.4s" }}
            >
              I build practical, reliable software that connects real-world
              engineering challenges with modern AI tooling. Turning complex
              problems into elegant solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="animate-fade-in-up flex flex-wrap gap-4"
            style={{ animationDelay: "0.5s" }}
          >
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden"
            >
              <Link href="/projects">
                <span className="relative z-10">View Projects</span>
                <span className="absolute inset-0 -z-0 bg-gradient-to-r from-chart-1 to-chart-2 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-primary/20 hover:border-primary/40 hover:bg-primary/5"
            >
              <Link href="/#contact">
                <span>Contact Me</span>
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Button>
          </div>

          {/* Stats/highlights */}
          <div
            className="animate-fade-in-up flex flex-wrap gap-8 pt-4"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="space-y-1">
              <p className="text-2xl font-bold text-foreground">3+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-foreground">10+</p>
              <p className="text-sm text-muted-foreground">
                Projects Delivered
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-foreground">AI + Civil</p>
              <p className="text-sm text-muted-foreground">Unique Blend</p>
            </div>
          </div>
        </div>

        {/* Right: Image with decorations */}
        <div
          className="animate-fade-in-up relative mx-auto w-full max-w-md"
          style={{ animationDelay: "0.3s" }}
        >
          {/* Decorative ring */}
          <div className="absolute -inset-4 animate-spin-slow rounded-full border border-dashed border-primary/20" />
          <div className="absolute -inset-8 animate-spin-slow-reverse rounded-full border border-dashed border-chart-1/10" />

          {/* Glow effect behind image */}
          <div className="absolute inset-0 scale-95 rounded-2xl bg-gradient-to-br from-primary/20 via-chart-1/10 to-chart-2/20 blur-2xl" />

          {/* Main image container */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-card/80 to-card/40 p-1 shadow-2xl backdrop-blur-sm">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/avatar/avatar_hero.png"
                alt="Portrait of Sammie Knoppert"
                width={800}
                height={800}
                priority
                className="h-auto w-full transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Floating cards */}
          <div className="absolute -left-6 top-1/4 animate-float rounded-lg border border-white/10 bg-card/90 px-3 py-2 shadow-lg backdrop-blur-sm">
            <p className="text-xs font-medium text-muted-foreground">
              Currently at
            </p>
            <p className="font-semibold text-foreground">Arcadis</p>
          </div>

          <div className="absolute -right-4 bottom-1/4 animate-float-delayed rounded-lg border border-white/10 bg-card/90 px-3 py-2 shadow-lg backdrop-blur-sm">
            <p className="text-xs font-medium text-muted-foreground">Focus</p>
            <p className="font-semibold text-foreground">AI & Data</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs">Scroll to explore</span>
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
