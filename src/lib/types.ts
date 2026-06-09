// Central type definitions for the portfolio content system.
// All site content is derived from `src/data/portfolio.json`.

export interface Personal {
  name: string;
  firstName: string;
  role: string;
  tagline: string; // short hero line, e.g. "I build digital experiences that scale."
  roles: string[]; // rotated in the typing animation
  summary: string;
  location: string;
  email: string;
  resumeUrl: string;
  availability: string; // e.g. "Available for new projects"
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "Database"
  | "Cloud"
  | "DevOps"
  | "Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number; // 0-100, used for orbit radius / sizing
}

export interface Experience {
  company: string;
  role: string;
  duration: string; // "Jan 2023 — Present"
  location: string;
  summary: string;
  achievements: string[];
  impact: string; // headline impact statement
  stack: string[];
}

export interface ProjectStat {
  label: string;
  value: string; // "120k+", "3x", "99.9%"
}

export interface Project {
  name: string;
  category: string;
  year: string;
  problem: string;
  challenge: string;
  solution: string;
  implementation: string;
  results: string;
  stack: string[];
  stats: ProjectStat[];
  link?: string;
  repo?: string;
  accent: string; // hex accent for the chapter
  image?: string; // optional cover image, e.g. "/projects/erp.jpg" (falls back to accent gradient)
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  detail?: string;
}

export interface Achievement {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface PhilosophyItem {
  title: string;
  description: string;
}

export interface Social {
  label: string;
  platform:
    | "github"
    | "linkedin"
    | "twitter"
    | "instagram"
    | "facebook"
    | "email"
    | "dribbble"
    | "website";
  url: string;
}

export interface StoryChapter {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface PortfolioData {
  personal: Personal;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  achievements: Achievement[];
  certifications: Certification[];
  philosophy: PhilosophyItem[];
  story: StoryChapter[];
  socials: Social[];
  techEcosystem: string[];
}
