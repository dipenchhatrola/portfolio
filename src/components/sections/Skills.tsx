"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Smartphone,
  Database,
  Cloud,
  Workflow,
  Wrench,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio, categoryColor, skillCategories } from "@/lib/portfolio";
import type { SkillCategory } from "@/lib/types";
import { fadeUp, staggerContainer } from "@/lib/motion";

const categoryIcon: Record<SkillCategory, React.ComponentType<{ className?: string }>> = {
  Frontend: Layout,
  Backend: Server,
  Mobile: Smartphone,
  Database: Database,
  Cloud: Cloud,
  DevOps: Workflow,
  Tools: Wrench,
};

export function Skills() {
  const categories = skillCategories.filter((c) =>
    portfolio.skills.some((s) => s.category === c)
  );

  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="The tools I build with"
        subtitle="A clear picture of my toolkit — grouped by where each technology lives in the stack, with honest proficiency levels."
      />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {categories.map((cat) => {
          const Icon = categoryIcon[cat];
          const color = categoryColor[cat];
          const skills = portfolio.skills.filter((s) => s.category === cat);
          return (
            <motion.div
              key={cat}
              variants={fadeUp}
              className="group rounded-3xl border border-ink/[0.08] bg-white p-7 shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(15,23,42,0.10)]"
            >
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-2xl text-white"
                  style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold text-ink">{cat}</h3>
              </div>

              <div className="flex flex-col gap-4">
                {skills.map((s) => (
                  <div key={s.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium text-ink/85">{s.name}</span>
                      <span className="font-mono text-xs text-slate-deep/60">{s.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-ink/[0.06]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
