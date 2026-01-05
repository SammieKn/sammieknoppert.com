export interface WorkExperience {
	company: string;
	role: string;
	startDate: string;
	endDate: string;
	description: string;
	imageSrc?: string;
}

export interface Education {
	title: string;
	level: string;
	year: string;
	university: string;
	grade?: string;
	description: string;
	imageSrc?: string;
}

export interface Certification {
	logoSrc?: string;
	title: string;
	date: string;
	details?: string;
	imageSrc?: string;
}

export interface Skill {
	name: string;
	iconName: string;
}

export const workExperience: WorkExperience[] = [
	{
		company: "Example Company",
		role: "Role Title",
		startDate: "2024-01",
		endDate: "Present",
		description:
			"Short 2–3 sentence description of responsibilities, impact, and tools used.",
		imageSrc: "/images/avatar/placeholder.svg",
	},
];

export const education: Education[] = [
	{
		title: "Degree / Program",
		level: "BSc / MSc",
		year: "2023",
		university: "University Name",
		grade: "Optional grade",
		description:
			"Short description of focus area, notable projects, and achievements.",
		imageSrc: "/images/avatar/placeholder.svg",
	},
];

export const certifications: Certification[] = [
	{
		logoSrc: "/images/avatar/placeholder.svg",
		title: "Certification Title",
		date: "2025-06",
		details: "Optional short details about the certification.",
		imageSrc: "/images/avatar/placeholder.svg",
	},
];

export const skills: Skill[] = [
	{
		name: "Python",
		iconName: "Python",
	},
	{
		name: "TypeScript",
		iconName: "Code",
	},
	{
		name: "FastAPI",
		iconName: "Server",
	},
];
