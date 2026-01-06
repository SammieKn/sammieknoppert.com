import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/projects";

type PageProps = {
	params: Promise<{ slug: string }>;
};

function getProjectBySlug(slug: string) {
	return projects.find((project) => project.slug === slug);
}

export async function generateStaticParams() {
	return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		return {
			title: "Project Not Found",
		};
	}

	return {
		title: project.title,
		description: project.shortDescription,
	};
}

export default async function ProjectDetailPage({ params }: PageProps) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		notFound();
	}

	return (
		<main className="py-16 md:py-24">
			<div className="container space-y-10">
				<header className="space-y-4">
					<Button asChild variant="outline" size="sm">
						<Link href="/projects">Back to Projects</Link>
					</Button>

					<div className="space-y-2">
						<h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
							{project.title}
						</h1>
						<p className="max-w-prose text-muted-foreground">
							{project.shortDescription}
						</p>
					</div>

					<div className="overflow-hidden rounded-lg border bg-card">
						<Image
							src={project.images[0] ?? project.thumbnail}
							alt={`${project.title} hero image`}
							width={1600}
							height={900}
							className="h-auto w-full"
						/>
					</div>
				</header>

				<div className="grid gap-6 lg:grid-cols-2">
					<Card>
						<CardHeader>
							<CardTitle>Problem</CardTitle>
							<CardDescription>
								What was the challenge?
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="leading-relaxed">{project.fullDescription.problem}</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Approach</CardTitle>
							<CardDescription>
								How did I think about it?
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="leading-relaxed">{project.fullDescription.approach}</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Execution</CardTitle>
							<CardDescription>
								What did I build?
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="leading-relaxed">{project.fullDescription.execution}</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Business Value</CardTitle>
							<CardDescription>
								What was the outcome?
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="leading-relaxed">
								{project.fullDescription.businessValue}
							</p>
						</CardContent>
					</Card>
				</div>

				<section className="space-y-4">
					<h2 className="text-2xl font-semibold tracking-tight">Visuals</h2>
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{project.images.map((src) => (
							<div
								key={src}
								className="overflow-hidden rounded-lg border bg-card"
							>
								<Image
									src={src}
									alt={`${project.title} screenshot`}
									width={1200}
									height={675}
									className="h-auto w-full"
								/>
							</div>
						))}
					</div>
				</section>

				<div className="flex flex-wrap gap-3">
					{project.links.code ? (
						<Button asChild variant="outline">
							<a
								href={project.links.code}
								target="_blank"
								rel="noreferrer"
							>
								Code
							</a>
						</Button>
					) : null}
					{project.links.demo ? (
						<Button asChild variant="outline">
							<a
								href={project.links.demo}
								target="_blank"
								rel="noreferrer"
							>
								Try
							</a>
						</Button>
					) : null}
				</div>
			</div>
		</main>
	);
}
