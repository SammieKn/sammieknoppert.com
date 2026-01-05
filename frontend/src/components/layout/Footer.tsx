import Link from "next/link";

import { Github, Linkedin, Mail } from "lucide-react";

const links = {
	github: "https://github.com/sammieknoppert",
	linkedin: "https://www.linkedin.com/",
	email: "hello@sammieknoppert.com",
	repo: "https://github.com/sammieknoppert/sammieknoppert.com",
} as const;

export function Footer() {
	return (
		<footer className="border-t">
			<div className="container flex flex-col gap-3 py-6 md:flex-row md:items-center md:justify-between">
				<div className="text-sm text-muted-foreground">
					<span className="font-medium text-foreground">Sammie Knoppert</span>
					<span className="mx-2">•</span>
					<a
						href={`mailto:${links.email}`}
						className="inline-flex items-center gap-2 hover:underline"
					>
						<Mail className="h-4 w-4" />
						{links.email}
					</a>
				</div>

				<div className="flex items-center gap-4">
					<a
						href={links.linkedin}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-2 text-sm hover:underline"
					>
						<Linkedin className="h-4 w-4" />
						LinkedIn
					</a>
					<a
						href={links.github}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-2 text-sm hover:underline"
					>
						<Github className="h-4 w-4" />
						GitHub
					</a>
					<Link href={links.repo} className="text-sm hover:underline">
						Open Source
					</Link>
				</div>
			</div>
		</footer>
	);
}
