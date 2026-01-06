import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/projects";

export const metadata = {
	title: "Projects",
	description: "A selection of projects and experiments.",
};

export default function ProjectsPage() {
	return (
		<main className="py-16 md:py-24">
			<div className="container space-y-8">
				<header className="space-y-2">
					<h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
						Projects
					</h1>
					<p className="max-w-prose text-muted-foreground">
						A selection of projects and experiments.
					</p>
				</header>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => (
						<Card
							key={project.id}
							className="transition-colors hover:bg-accent/30"
						>
							<CardHeader>
								<div className="overflow-hidden rounded-md border bg-card">
									<Image
										src={project.thumbnail}
										alt={`${project.title} thumbnail`}
										width={1200}
										height={675}
										className="h-auto w-full"
									/>
								</div>
								<CardTitle className="pt-4">{project.title}</CardTitle>
								<CardDescription>{project.shortDescription}</CardDescription>
							</CardHeader>

							<CardContent />

							<CardFooter className="flex flex-wrap gap-2">
								{project.links.code ? (
									<Button asChild variant="outline" size="sm">
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
									<Button asChild variant="outline" size="sm">
										<a
											href={project.links.demo}
											target="_blank"
											rel="noreferrer"
										>
											Try
										</a>
									</Button>
								) : null}
								<Button asChild size="sm">
									<Link href={`/projects/${project.slug}`}>Read More</Link>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</main>
	);
}
