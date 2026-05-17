import type { Metadata } from "next";

import { LabGrid } from "@/components/lab/lab-grid";
import { BackgroundOrbs } from "@/components/ui/background-orbs";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "An informal playground for AI apps, insights, and experimental snippets.",
};

export default function LabPage() {
  return (
    <main className="relative min-h-screen py-16 md:py-24">
      <BackgroundOrbs
        orbs={[
          {
            position: "-left-32 top-1/4",
            size: "h-96 w-96",
            gradient: "bg-gradient-to-br from-primary/5 to-transparent",
            blur: "blur-3xl",
            animation: "animate-float",
          },
          {
            position: "-right-32 bottom-1/4",
            size: "h-96 w-96",
            gradient: "bg-gradient-to-br from-accent/5 to-transparent",
            blur: "blur-3xl",
            animation: "animate-float",
            animationDelay: "-3s",
          },
        ]}
      />

      <div className="container relative space-y-8 md:space-y-10">
        <SectionHeader
          as="h1"
          title="The Lab"
          subtitle="A space for half-baked ideas, AI experiments, and thoughts on data and product. Less polish, more play."
        />
        <LabGrid />
      </div>
    </main>
  );
}
