import Image from "next/image";
import Link from "next/link";

import { Download } from "lucide-react";
import * as LucideIcons from "lucide-react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import {
	certifications,
	education,
	skills,
	workExperience,
} from "@/data/profile";

function SkillIcon({ iconName }: { iconName: string }) {
	const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[
		iconName
	];

	if (!Icon) {
		return <LucideIcons.CircleHelp className="h-5 w-5 text-muted-foreground" />;
	}

	return <Icon className="h-5 w-5" />;
}

export function About() {
	return (
		<section id="about" className="py-16 md:py-24">
			<div className="container space-y-10">
				<header className="space-y-2">
					<h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
						About
					</h2>
					<p className="max-w-prose text-muted-foreground">
						A quick overview of my experience, education, certifications, and
						skills.
					</p>
				</header>

				<div className="grid gap-6 lg:grid-cols-2">
					<Card>
						<CardHeader>
							<CardTitle>Work Experience</CardTitle>
							<CardDescription>
								Roles and responsibilities over time.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							{workExperience.map((job) => (
								<div
									key={`${job.company}-${job.role}-${job.startDate}`}
									className="grid gap-4 md:grid-cols-[96px_1fr]"
								>
									<div className="overflow-hidden rounded-md border bg-card">
										<Image
											src={job.imageSrc ?? "/images/avatar/placeholder.svg"}
											alt={`${job.company} logo`}
											width={160}
											height={160}
										/>
									</div>
									<div className="space-y-1">
										<p className="text-sm text-muted-foreground">
											{job.startDate} — {job.endDate}
										</p>
										<p className="font-medium">{job.role}</p>
										<p className="text-sm text-muted-foreground">
											{job.company}
										</p>
										<p className="text-sm leading-relaxed">
											{job.description}
										</p>
									</div>
								</div>
							))}
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Education</CardTitle>
							<CardDescription>
								Academic background and focus areas.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							{education.map((edu) => (
								<div
									key={`${edu.university}-${edu.title}-${edu.year}`}
									className="grid gap-4 md:grid-cols-[96px_1fr]"
								>
									<div className="overflow-hidden rounded-md border bg-card">
										<Image
											src={edu.imageSrc ?? "/images/avatar/placeholder.svg"}
											alt={`${edu.university} logo`}
											width={160}
											height={160}
										/>
									</div>
									<div className="space-y-1">
										<p className="text-sm text-muted-foreground">
											{edu.year} • {edu.level}
										</p>
										<p className="font-medium">{edu.title}</p>
										<p className="text-sm text-muted-foreground">
											{edu.university}
										</p>
										{edu.grade ? (
											<p className="text-sm text-muted-foreground">
												Grade: {edu.grade}
											</p>
										) : null}
										<p className="text-sm leading-relaxed">
											{edu.description}
										</p>
									</div>
								</div>
							))}
						</CardContent>
					</Card>
				</div>

				<div className="grid gap-6 lg:grid-cols-2">
					<Card>
						<CardHeader>
							<CardTitle>Certifications</CardTitle>
							<CardDescription>
								Click an item to view details.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Accordion type="single" collapsible className="w-full">
								{certifications.map((cert) => (
									<AccordionItem key={cert.title} value={cert.title}>
										<AccordionTrigger>
											<div className="flex items-center gap-3">
												<div className="h-8 w-8 overflow-hidden rounded border bg-card">
													<Image
														src={cert.logoSrc ?? "/images/avatar/placeholder.svg"}
														alt={`${cert.title} logo`}
														width={64}
														height={64}
													/>
												</div>
												<div className="text-left">
													<p className="font-medium leading-none">
														{cert.title}
													</p>
													<p className="text-sm text-muted-foreground">
														{cert.date}
													</p>
												</div>
											</div>
										</AccordionTrigger>
										<AccordionContent className="space-y-3">
											<p className="text-sm leading-relaxed">
												{cert.details ?? ""}
											</p>
											<div className="overflow-hidden rounded-md border bg-card">
												<Image
													src={cert.imageSrc ?? "/images/avatar/placeholder.svg"}
													alt={`${cert.title} certificate image`}
													width={1200}
													height={675}
												/>
											</div>
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Skills</CardTitle>
							<CardDescription>
								A quick snapshot of tools and technologies.
							</CardDescription>
						</CardHeader>
						<CardContent className="pt-2">
							<div className="relative">
								<Carousel
									opts={{ align: "start", dragFree: true }}
									className="w-full"
								>
									<CarouselContent>
										{skills.map((skill) => (
											<CarouselItem
												key={skill.name}
												className="basis-1/2 sm:basis-1/3 lg:basis-1/4"
											>
												<div className="h-full p-1">
													<div className="flex h-full items-center gap-3 rounded-md border bg-card p-4">
														<SkillIcon iconName={skill.iconName} />
														<span className="text-sm font-medium">
															{skill.name}
														</span>
													</div>
												</div>
											</CarouselItem>
										))}
									</CarouselContent>
									<CarouselPrevious className="-left-3" />
									<CarouselNext className="-right-3" />
								</Carousel>
							</div>
						</CardContent>
					</Card>
				</div>

				<Card>
					<CardHeader>
						<CardTitle>Resume</CardTitle>
						<CardDescription>
							Download a PDF copy of my resume.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Button asChild>
							<Link href="/cv/sammie-knoppert-cv.pdf">
								<Download className="mr-2 h-4 w-4" />
								Download Resume
							</Link>
						</Button>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
