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
