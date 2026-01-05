export interface ProjectLinks {
	code?: string;
	demo?: string;
}

export interface ProjectFullDescription {
	problem: string;
	approach: string;
	execution: string;
	businessValue: string;
}

export interface Project {
	id: string;
	slug: string;
	title: string;
	shortDescription: string;
	fullDescription: ProjectFullDescription;
	tags: string[];
	thumbnail: string;
	images: string[];
	links: ProjectLinks;
}

export const projects: Project[] = [
	{
		id: "p-bridge-inspection",
		slug: "bridge-inspection-ai",
		title: "Bridge Inspection Assistant",
		shortDescription:
			"A prototype that turns inspection notes into structured findings.",
		fullDescription: {
			problem:
				"Inspection notes are often unstructured, making reporting slow and inconsistent.",
			approach:
				"Model the target report fields and map free-text notes into a consistent schema.",
			execution:
				"Built a small pipeline to parse notes, validate outputs, and generate summaries.",
			businessValue:
				"Faster reporting with more consistent deliverables and fewer manual edits.",
		},
		tags: ["AI", "Civil Engineering", "NLP"],
		thumbnail: "/images/projects/placeholder.svg",
		images: ["/images/projects/placeholder.svg"],
		links: {
			code: "https://github.com/",
			demo: "https://example.com/",
		},
	},
	{
		id: "p-supabase-dashboard",
		slug: "supabase-portfolio-dashboard",
		title: "Portfolio Content Dashboard",
		shortDescription:
			"A concept for managing portfolio content with a clean data model.",
		fullDescription: {
			problem:
				"Updating portfolio content directly in code can be error-prone and time-consuming.",
			approach:
				"Separate content from UI by modeling projects and profile data explicitly.",
			execution:
				"Defined schemas, added validation, and designed a predictable content flow.",
			businessValue:
				"Content updates become faster, safer, and easier to maintain over time.",
		},
		tags: ["Supabase", "TypeScript", "Design"],
		thumbnail: "/images/projects/placeholder.svg",
		images: ["/images/projects/placeholder.svg"],
		links: {
			code: "https://github.com/",
		},
	},
	{
		id: "p-mlops-template",
		slug: "mlops-template",
		title: "MLOps Template",
		shortDescription:
			"A starter structure for shipping small ML features safely and repeatably.",
		fullDescription: {
			problem:
				"Many ML prototypes never reach production due to missing structure and checks.",
			approach:
				"Create a repeatable template with clear interfaces and minimal operational overhead.",
			execution:
				"Outlined a baseline pipeline with testing hooks and deployment-friendly packaging.",
			businessValue:
				"Shorter time-to-deliver and fewer surprises when moving from demo to production.",
		},
		tags: ["MLOps", "Python", "Templates"],
		thumbnail: "/images/projects/placeholder.svg",
		images: ["/images/projects/placeholder.svg"],
		links: {
			code: "https://github.com/",
		},
	},
];
