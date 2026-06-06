"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { portfolio } from "@/lib/portfolio";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp } from "@/lib/motion";

export function Story() {
  const { story } = portfolio;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 60%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const bgHue = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section id="story">
      {/* background shift driven by scroll */}
      <motion.div
        aria-hidden
        style={{ opacity: bgHue }}
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.12),transparent_60%)]"
      />

      <SectionHeading
        eyebrow="My Story"
        title="A journey told in chapters"
        subtitle="Every milestone shaped how I think, build, and ship. Scroll through the moments that made me the engineer I am today."
      />

      <div ref={ref} className="relative mx-auto mt-20 max-w-4xl">
        {/* center progress line */}
        <div className="absolute left-[19px] top-2 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2">
          <motion.div
            style={{ scaleY: lineScale, transformOrigin: "top" }}
            className="h-full w-full bg-gradient-to-b from-violet via-blue to-cyan"
          />
        </div>

        <div className="flex flex-col gap-16">
          {story.map((chapter, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={chapter.year}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-20% 0px" }}
                className={`relative flex md:items-center ${
                  left ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* node */}
                <span className="absolute left-[13px] top-1 z-10 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center md:left-1/2">
                  <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-cyan/40" />
                  <span className="h-3 w-3 rounded-full border-2 border-cyan bg-ink shadow-[0_0_14px_#22d3ee]" />
                </span>

                <div className={`w-full pl-12 md:w-1/2 md:pl-0 ${left ? "md:pr-14 md:text-right" : "md:pl-14"}`}>
                  <span className="font-mono text-sm tracking-[0.2em] text-cyan">
                    {chapter.year}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
                    {chapter.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-blue/90">{chapter.subtitle}</p>
                  <p className="mt-3 text-white/55">{chapter.description}</p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
