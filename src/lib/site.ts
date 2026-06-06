import { portfolio } from "./portfolio";

// Central site/SEO configuration.
export const siteConfig = {
  url: "https://your-domain.com", // ← update to your deployed domain
  name: `${portfolio.personal.name} — ${portfolio.personal.role}`,
  shortName: portfolio.personal.name,
  description: portfolio.personal.summary,
  keywords: [
    portfolio.personal.name,
    "Frontend Engineer",
    "Portfolio",
    "Next.js",
    "React",
    "Three.js",
    "Creative Developer",
    ...portfolio.skills.slice(0, 8).map((s) => s.name),
  ],
  ogImage: "/og.png",
  locale: "en_US",
};
