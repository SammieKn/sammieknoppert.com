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
  summary: string;
  details: string;
}

export const workExperience = [
  {
    company: "Arcadis",
    role: "Data Scientist",
    startDate: "2024-11",
    endDate: "Present",
    description:
      "Delivering AI and data solutions for infrastructure and environmental projects. Key skills: Python, Microsoft Power BI, Artificial Intelligence (AI). Based in Amersfoort, Utrecht, Netherlands.",
    imageSrc: "/images/avatar/avatar_work.png",
  },
  {
    company: "GVB",
    role: "Data Engineer",
    startDate: "2024-05",
    endDate: "2024-11",
    description:
      "Worked as a Data Engineer at the municipal public transport operator for Amsterdam. Based in Amsterdam, North Holland, Netherlands.",
    imageSrc: "/images/avatar/avatar_work.png",
  },
  {
    company: "Arcadis",
    role: "Consultant Asset Management",
    startDate: "2023-06",
    endDate: "2024-05",
    description:
      "Inspections and advisory for major infrastructure clients (Belgium, Amsterdam). Led digitalization: interactive inspection maps (Python, pandas, leaflet, folium) and automated damage record imports (Selenium). Based in Rotterdam, South Holland, Netherlands.",
    imageSrc: "/images/avatar/avatar_work.png",
  },
  {
    company: "Van Rossum Raadgevende Ingenieurs BV",
    role: "Structural Modeller",
    startDate: "2018-07",
    endDate: "2021-03",
    description:
      "Created structural drawings for projects such as 'The Valley' in Amsterdam during summer recess and a six-month full-time period. Based in Amsterdam, North Holland, Netherlands.",
    imageSrc: "/images/avatar/avatar_work.png",
  },
  {
    company: "Van Rossum Raadgevende Ingenieurs BV",
    role: "Graduate Research Intern",
    startDate: "2017-12",
    endDate: "2018-07",
    description:
      "Conducted research on the use of Carbon Fibre Reinforced Polymers (CFRP) to retrofit existing concrete structures. Based in Amsterdam, North Holland, Netherlands.",
    imageSrc: "/images/avatar/avatar_work.png",
  },
  {
    company: "KPN",
    role: "Sales Staff",
    startDate: "2017-03",
    endDate: "2017-12",
    description:
      "Responsible for sales with a focus on client journey optimization. Based in The Randstad, Netherlands.",
    imageSrc: "/images/avatar/avatar_work.png",
  },
  {
    company: "Van Rossum Raadgevende Ingenieurs BV",
    role: "Intern",
    startDate: "2016-08",
    endDate: "2017-02",
    description:
      "Internship focused on Revit, AutoCAD, structural engineering, and reporting. Based in The Randstad, Netherlands.",
    imageSrc: "/images/avatar/avatar_work.png",
  },
  {
    company: "Pepperminds",
    role: "Team Captain",
    startDate: "2015-01",
    endDate: "2016-07",
    description:
      "Promoted companies including Qurrent, Hello Fresh, and Stop Aids Now. Responsible for sales and coaching junior staff. Based on-site.",
    imageSrc: "/images/avatar/avatar_work.png",
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
    imageSrc: "/images/avatar/avatar_education.png",
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
    summary: "Production-ready data and backend tooling.",
    details:
      "Experienced with data pipelines, ML tooling, testing, packaging, and deployment best practices.",
  },
  {
    name: "TypeScript",
    iconName: "Code",
    summary: "Robust web apps with strong types.",
    details:
      "Next.js App Router, shadcn/ui, Tailwind CSS, and component-driven development for maintainable UIs.",
  },
  {
    name: "FastAPI",
    iconName: "Server",
    summary: "Async APIs with Pydantic v2.",
    details:
      "Designing schemas, validation, and clean handlers with uvicorn, auth, and testing in mind.",
  },
];
