"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio, categoryColor, skillCategories } from "@/lib/portfolio";
import { fadeUp, staggerContainer } from "@/lib/motion";

const SkillGalaxy = dynamic(
  () => import("@/components/three/SkillGalaxy").then((m) => m.SkillGalaxy),
  { ssr: false }
);

export function Skills() {
  const categories = skillCategories.filter((c) =>
    portfolio.skills.some((s) => s.category === c)
  );

  return (
    <Section id="skills" className="overflow-hidden">
      <SectionHeading
        eyebrow="Skills Galaxy"
        title="A universe of tools I orbit"
        subtitle="Drag to explore. Each node is a technology I use to build products — sized by depth and grouped into constellations."
      />

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
        {/* 3D galaxy */}
        <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[600px]">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),transparent_65%)]" />
          <SkillGalaxy />
        </div>

        {/* legend / categorized list */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-5"
        >
          {categories.map((cat) => (
            <motion.div key={cat} variants={fadeUp}>
              <div className="mb-2 flex items-center gap-2.5">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{
                    backgroundColor: categoryColor[cat],
                    boxShadow: `0 0 12px ${categoryColor[cat]}`,
                  }}
                />
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                  {cat}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolio.skills
                  .filter((s) => s.category === cat)
                  .map((s) => (
                    <span
                      key={s.name}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70 transition-colors hover:border-white/30 hover:text-white"
                    >
                      {s.name}
                    </span>
                  ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
