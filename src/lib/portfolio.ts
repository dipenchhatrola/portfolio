import data from "@/data/portfolio.json";
import type { PortfolioData, SkillCategory } from "./types";

// Single source of truth: typed accessor for all site content.
export const portfolio = data as unknown as PortfolioData;

export const skillCategories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Mobile",
  "Database",
  "Cloud",
  "DevOps",
  "Tools",
];

export const categoryColor: Record<SkillCategory, string> = {
  Frontend: "#7c3aed",
  Backend: "#22d3ee",
  Mobile: "#60a5fa",
  Database: "#a78bfa",
  Cloud: "#38bdf8",
  DevOps: "#818cf8",
  Tools: "#f472b6",
};
