import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
	return (
    <section id="home" className="py-16 md:py-24">
      <div className="container grid items-center gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Hi, I&apos;m Sammie Knoppert 👋
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Bridge between Civil Engineering and AI
            </h1>
            <p className="max-w-prose text-pretty text-base text-muted-foreground md:text-lg">
              I build practical, reliable software that connects real-world
              engineering needs with modern AI tooling.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/#contact">Contact Me</Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="overflow-hidden rounded-lg border bg-card">
            <Image
              src="/images/avatar/avatar_hero.png"
              alt="Portrait of Sammie Knoppert"
              width={800}
              height={800}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
