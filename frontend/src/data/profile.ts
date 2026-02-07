// Import types for type annotations
import type { Education, Skill } from "@/types/profile";

// Re-export types from the types folder
export type { WorkExperience, Education, Skill } from "@/types/profile";

export const workExperience = [
  {
    company: "Arcadis",
    role: "Product Owner",
    startDate: "2024-11",
    endDate: "Present",
    avatarSrc: "/images/avatar/role-product-owner.png",
    tags: ["Agile", "Stakeholder Management", "Requirements Analysis", "Scrum"],
    hook: "My strongest asset isn't just writing code—it's knowing *what* to code.",
    description: `As a Product Owner, I act as the bridge between complex asset management needs and technical execution. I don't just manage a backlog; I look for "high leverage" opportunities—small, strategic automations that solve massive headaches.

A recent example involves a project for the **Municipality of Amsterdam**. They initially approached me asking for a complex AI text recognition system. However, during my interviews with the stakeholders, I dug deeper into *why* they wanted it. I realized they didn't actually need a black-box AI; they needed actionable insights from their data. I steered the project away from an over-engineered solution toward a traditional programming approach, supplemented with AI only where strictly necessary. This saved time, budget, and delivered exactly what they needed, not just what they thought they wanted.

My philosophy is simple: tackle the highest risks first. I motivate my team by showing them that by delivering value in small, agile steps, we earn the trust to build the bigger, cooler vision later.`,
  },
  {
    company: "Arcadis / GVB",
    role: "Data Scientist & Engineer",
    startDate: "2024-05",
    endDate: "Present",
    avatarSrc: "/images/avatar/role-data-scientist.png",
    tags: [
      "Python",
      "LLMs",
      "Databricks/Fabric",
      "Data Pipelines",
      "Machine Learning",
      "Data Analysis",
    ],
    hook: "My journey into data didn't start behind a screen; it started in the field.",
    description: `During my thesis, I realized that the design phase of a building is short, but the maintenance phase lasts for decades. That is where the real interesting data lives.

I have spent the last few years bridging the gap between physical infrastructure (trams, metros, tunnels) and digital automation. I learned to look at a process—like an inspector typing long damage descriptions on a tablet while standing next to a busy highway—and see a safety risk and an efficiency bottleneck.

I fixed that specific problem by implementing **Large Language Models (LLMs)** to rewrite brief field notes into professional reports automatically. It wasn't just about "using AI"; it was about saving hundreds of hours and getting my colleagues out of hazardous zones faster. Whether I'm modeling data structures in Databricks or automating ingestion pipelines, my goal is always the same: make the data work for the people, not the other way around.`,
  },
  {
    company: "Arcadis",
    role: "Consultant Asset Management",
    startDate: "2023-06",
    endDate: "Present",
    avatarSrc: "/images/avatar/role-consultant.png",
    tags: [
      "Failure Mode Analysis",
      "Civil Engineer",
      "Automation",
      "Field Inspections",
    ],
    hook: "School teaches you that infrastructure is built from perfect, distinct models. Reality teaches you otherwise.",
    description: `I remember inspecting a bridge in Amsterdam early in my career. I walked underneath the structure, expecting the clean lines I'd seen in my textbooks. Instead, I found a Frankenstein-like composition of four different bridges stitched together over decades of repairs and expansions. That was my "click" moment. I realized that to manage assets effectively, you have to understand their chaotic, messy reality.

This field experience is what differentiates me as a consultant. I understand that Asset Management is a balancing act between safety, availability, and money. I transitioned naturally into automation because I saw my colleagues drowning in repetitive tasks—manual calculations, data entry, and report generation. I started automating these "boring" tasks one by one. I became known as the enabler—the person who understands the mud on the boots but knows how to build the Python script to clean up the data.`,
  },
  {
    company: "Pepperminds / KPN",
    role: "Sales & Client Relations",
    startDate: "2015",
    endDate: "2018",
    avatarSrc: "/images/avatar/role-sales.png",
    tags: ["Sales", "Client Relations", "Communication", "Negotiation"],
    hook: "It might seem unusual for an engineer to highlight sales experience, but I consider it my unfair advantage.",
    description: `Long before I was calculating structural integrity, I was doing door-to-door sales and working retail.

Street sales taught me grit. When you face hundreds of rejections a day, you learn that "No" isn't a dead end—it's just the start of the conversation. Later, working in a shop, I learned that a quick sale is worthless compared to a long-term customer relationship. You have to shut up, listen, and understand what the client actually needs.

In the engineering world, where many people focus purely on technical specs, I use these skills to build relationships. When I sit down with a client, I'm not just listening for technical requirements; I'm listening for their business pain points. Because I've done the hard yards in sales, closing a deal or fixing a contract doesn't scare me—it feels natural. I don't just solve engineering problems; I solve the client's problem.`,
  },
];

export const education: Education[] = [
  {
    title: "Civil Engineering (Structural Engineer)",
    level: "Master of Science - MSc",
    year: "2023",
    university: "Delft University of Technology",
    grade: "8.1",
    description:
      "Thesis in incorporating climate change within inspection and maintenance planning of engineering structures using AI (Deep Reinforcement Learning), Grade 9. [View thesis repository](https://repository.tudelft.nl/record/uuid:95df05a4-cbbe-4d52-8787-7e46071a8765).",
  },
  {
    title: "Built Environment (Structural Engineer)",
    level: "Bachelor of Applied Science - BASc",
    year: "2018",
    university: "Amsterdam University of Applied Sciences",
    grade: "8.0 (Cum laude)",
    description: "Graduated Cum Laude with honors.",
  },
];

// Skills with icons from Simple Icons CDN (https://simpleicons.org)
// Format: https://cdn.simpleicons.org/{iconslug}/{color}
export const skills: Skill[] = [
  {
    name: "Python",
    iconUrl: "https://cdn.simpleicons.org/python/3776AB",
  },
  {
    name: "SQL",
    iconUrl: "https://img.icons8.com/ios-filled/50/ffffff/sql.png",
  },
  {
    name: "Power BI",
    iconUrl: "https://img.icons8.com/fluency/48/power-bi-2021.png",
  },
  {
    name: "Power Automate",
    iconUrl:
      "https://img.icons8.com/fluency/48/microsoft-power-automate-2020.png",
  },
  {
    name: "Git",
    iconUrl: "https://cdn.simpleicons.org/git/F05032",
  },
  {
    name: "Microsoft Fabric",
    iconUrl: "/images/icons/fabric.png",
  },
  {
    name: "Databricks",
    iconUrl: "https://cdn.simpleicons.org/databricks/FF3621",
  },
  {
    name: "Azure",
    iconUrl: "/images/icons/azure.png",
  },
];
