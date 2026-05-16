import { Brain, Leaf, Users } from "lucide-react";

import { BackgroundOrbs } from "@/components/ui/background-orbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { TagList } from "@/components/ui/tag";

const monkeyTypes = [
  {
    name: "Capuchin Monkey",
    region: "Central & South America",
    spotlight:
      "Smart, tool-using foragers with advanced problem-solving behavior.",
  },
  {
    name: "Howler Monkey",
    region: "Neotropical rainforests",
    spotlight:
      "Famous for thunderous calls that travel up to 5 km through dense jungle.",
  },
  {
    name: "Japanese Macaque",
    region: "Japan",
    spotlight:
      "Cold-adapted primates known for social learning and hot spring bathing.",
  },
  {
    name: "Mandrill",
    region: "West-Central Africa",
    spotlight:
      "Colorful forest primates living in complex, highly social communities.",
  },
] as const;

export const metadata = {
  title: "Monkey Page",
  description:
    "A colorful spotlight on monkey diversity and how closely we are related.",
};

export default function MonkeysPage() {
  return (
    <main className="relative min-h-screen py-16 md:py-24">
      <BackgroundOrbs
        orbs={[
          {
            position: "-left-20 top-20",
            size: "h-80 w-80",
            gradient: "bg-gradient-to-br from-primary/15 to-transparent",
            blur: "blur-3xl",
            animation: "animate-float",
          },
          {
            position: "-right-20 bottom-8",
            size: "h-72 w-72",
            gradient: "bg-gradient-to-br from-accent/15 to-transparent",
            blur: "blur-3xl",
            animation: "animate-float",
            animationDelay: "-2s",
          },
        ]}
        dots={[
          {
            position: "left-[18%] top-[20%]",
            size: "h-3 w-3",
            color: "bg-primary/40",
            animation: "animate-float",
          },
          {
            position: "right-[18%] top-[38%]",
            size: "h-2 w-2",
            color: "bg-accent/40",
            animation: "animate-float-delayed",
          },
        ]}
        showGrid
      />

      <div className="container relative space-y-10">
        <SectionHeader
          as="h1"
          title="Monkey Kingdom"
          subtitle="From rainforest acrobats to mountain-dwelling troops, monkeys show incredible diversity and social intelligence."
        />

        <Card className="border-primary/20 bg-card/80">
          <CardHeader>
            <CardTitle className="text-2xl">How close are we?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Humans and monkeys share much of the same genetic toolkit. While
              we did not evolve from modern monkeys, we do share common
              primate ancestors and many similarities in communication, play,
              learning, and social bonding.
            </p>
            <TagList
              tags={[
                "Shared primate ancestry",
                "Complex social groups",
                "Learning through imitation",
                "Expressive communication",
              ]}
            />
          </CardContent>
        </Card>

        <section className="grid gap-6 md:grid-cols-2">
          {monkeyTypes.map((monkey) => (
            <Card key={monkey.name} className="h-full bg-card/80">
              <CardHeader className="space-y-2">
                <CardTitle>{monkey.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{monkey.region}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{monkey.spotlight}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="grid gap-4 rounded-xl border border-white/10 bg-card/70 p-6 md:grid-cols-3">
          <article className="space-y-3">
            <Brain className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Cognition</h2>
            <p className="text-sm text-muted-foreground">
              Monkeys solve puzzles, use tools, and pass knowledge through
              generations.
            </p>
          </article>
          <article className="space-y-3">
            <Users className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Social life</h2>
            <p className="text-sm text-muted-foreground">
              Troops rely on alliances, grooming, and teamwork for survival.
            </p>
          </article>
          <article className="space-y-3">
            <Leaf className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Conservation</h2>
            <p className="text-sm text-muted-foreground">
              Protecting habitats safeguards monkey species and whole ecosystems.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
