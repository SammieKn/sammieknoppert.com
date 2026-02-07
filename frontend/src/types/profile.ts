export interface WorkExperience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  /** The eye-catching hook sentence displayed prominently */
  hook: string;
  /** Full description with markdown support, shown when expanded */
  description: string;
  /** Path to role-specific avatar image */
  avatarSrc?: string;
  /** Tags/skills associated with this role */
  tags?: string[];
}

export interface Education {
  title: string;
  level: string;
  year: string;
  university: string;
  grade?: string;
  /** Description with markdown support (links, bold, italic) */
  description: string;
  /** Path to university/school logo (horizontal format) */
  logoSrc?: string;
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
  /** URL to the skill icon (can use CDN like Simple Icons) */
  iconUrl: string;
}
