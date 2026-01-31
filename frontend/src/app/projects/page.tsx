import { BackgroundOrbs } from "@/components/ui/background-orbs";
import { FeaturedProjectCard } from "@/components/projects/featured-project-card";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeader } from "@/components/ui/section-header";
import { getFeaturedProject, getOtherProjects } from "@/lib/mdx";

export const metadata = {
  title: "Projects",
  description: "A selection of projects and experiments.",
};

export default function ProjectsPage() {
  const featured = getFeaturedProject();
  const otherProjects = getOtherProjects();

  return (
    <main className="relative min-h-screen py-16 md:py-24">
      {/* Background orbs */}
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

      <div className="container relative space-y-12">
        {/* Header */}
        <SectionHeader
          as="h1"
          title="Projects"
          subtitle="A selection of projects and experiments."
        />

        {/* Featured Project */}
        {featured && <FeaturedProjectCard project={featured} />}

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <div
            className={`grid gap-6 ${
              otherProjects.length === 1
                ? "grid-cols-1"
                : otherProjects.length === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {otherProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
