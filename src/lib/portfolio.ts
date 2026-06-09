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
  Backend: "#0891b2",
  Mobile: "#2563eb",
  Database: "#9333ea",
  Cloud: "#0284c7",
  DevOps: "#4f46e5",
  Tools: "#db2777",
};
