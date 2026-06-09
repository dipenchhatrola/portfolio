"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/lib/portfolio";
import type { Project } from "@/lib/types";
import { fadeUp, staggerContainer } from "@/lib/motion";

const STEPS: { key: keyof Project; label: string }[] = [
  { key: "problem", label: "Problem" },
  { key: "challenge", label: "Challenge" },
  { key: "solution", label: "Solution" },
  { key: "implementation", label: "Implementation" },
  { key: "results", label: "Results" },
];

function ProjectChapter({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <div ref={ref} className="relative grid gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Visual — sticky on large screens */}
      <div className="lg:sticky lg:top-24 lg:h-fit">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-[0_16px_48px_rgba(15,23,42,0.12)]"
        >
          {project.image && (
            <Image
              src={project.image}
              alt={`${project.name} — ${project.category}`}
              fill
              sizes="(max-width: 1024px) 90vw, 600px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}

          {/* readability scrim */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-ink/30"
          />

          {/* title + meta */}
          <div className="pointer-events-none absolute inset-x-6 top-6 flex flex-col gap-1.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/90 sm:text-xs">
              {project.category} · {project.year}
            </span>
            <span className="font-display text-2xl font-bold text-white drop-shadow sm:text-4xl">
              {project.name}
            </span>
          </div>

          {/* stats overlay */}
          <div className="pointer-events-none absolute inset-x-5 bottom-5 grid grid-cols-3 gap-2">
            {project.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white/90 px-3 py-2.5 text-center backdrop-blur"
              >
                <div
                  className="font-display text-lg font-bold"
                  style={{ color: project.accent }}
                >
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-wide text-slate-deep/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Narrative */}
      <motion.div style={{ y }} className="flex flex-col gap-7 py-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-5xl font-bold text-ink/10">
            0{index + 1}
          </span>
          <div>
            <h3 className="font-display text-3xl font-bold text-ink">{project.name}</h3>
            <p className="text-sm text-slate-deep/70">{project.category}</p>
          </div>
        </div>

        <motion.ol
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="relative flex flex-col gap-5 border-l border-ink/10 pl-6"
        >
          {STEPS.map((step) => (
            <motion.li key={step.label} variants={fadeUp} className="relative">
              <span
                className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-white shadow"
                style={{ backgroundColor: project.accent }}
              />
              <span
                className="font-mono text-xs uppercase tracking-[0.2em]"
                style={{ color: project.accent }}
              >
                {step.label}
              </span>
              <p className="mt-1 text-slate-deep">{project[step.key] as string}</p>
            </motion.li>
          ))}
        </motion.ol>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-ink/10 bg-white px-3 py-1 text-xs text-slate-deep"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.link || project.repo) && (
          <div className="flex gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-violet"
              >
                Live <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-violet"
              >
                Code <GithubIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects as stories, not cards"
        subtitle="Every project began as a problem worth solving. Here's how each one unfolded — from constraint to outcome."
      />
      <div className="mt-20 flex flex-col gap-28">
        {portfolio.projects.map((p, i) => (
          <ProjectChapter key={p.name} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
