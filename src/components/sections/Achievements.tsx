"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, BadgeCheck } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GlassCard } from "@/components/ui/GlassCard";
import { portfolio } from "@/lib/portfolio";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Achievements() {
  const { achievements, certifications, education } = portfolio;

  return (
    <Section id="achievements">
      <SectionHeading
        eyebrow="Achievement Wall"
        title="Numbers that tell the story"
        subtitle="Impact compounds. Here's a snapshot of what consistent, careful building adds up to."
      />

      {/* Counters */}
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4"
      >
        {achievements.map((a) => (
          <motion.div key={a.label} variants={fadeUp}>
            <GlassCard className="h-full p-7 text-center" tilt={false}>
              <div className="font-display text-5xl font-bold text-gradient-violet sm:text-6xl">
                <AnimatedCounter value={a.value} prefix={a.prefix} suffix={a.suffix} />
              </div>
              <h3 className="mt-3 font-display text-base font-semibold text-ink">
                {a.label}
              </h3>
              <p className="mt-1 text-sm text-slate-deep/70">{a.description}</p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Certifications + education */}
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <GlassCard className="h-full p-7" tilt={false}>
            <div className="mb-5 flex items-center gap-2.5">
              <BadgeCheck className="h-5 w-5 text-blue" />
              <h3 className="font-display text-lg font-semibold text-ink">Certifications</h3>
            </div>
            <div className="flex flex-col gap-4">
              {certifications.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center justify-between gap-4 border-b border-ink/5 pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 shrink-0 text-violet" />
                    <div>
                      <p className="font-medium text-ink">{c.name}</p>
                      <p className="text-sm text-slate-deep/60">{c.issuer}</p>
                    </div>
                  </div>
                  <span className="font-mono text-sm text-violet">{c.year}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <GlassCard className="h-full p-7" tilt={false}>
            <div className="mb-5 flex items-center gap-2.5">
              <GraduationCap className="h-5 w-5 text-blue" />
              <h3 className="font-display text-lg font-semibold text-ink">Education</h3>
            </div>
            <div className="flex flex-col gap-4">
              {education.map((e) => (
                <div key={e.degree}>
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-medium text-ink">{e.degree}</p>
                    <span className="font-mono text-sm text-violet">{e.duration}</span>
                  </div>
                  <p className="text-sm text-blue">{e.institution}</p>
                  {e.detail && <p className="mt-1 text-sm text-slate-deep/70">{e.detail}</p>}
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </Section>
  );
}
