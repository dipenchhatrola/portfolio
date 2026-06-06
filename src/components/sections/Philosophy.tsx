"use client";

import { motion } from "framer-motion";
import { Boxes, Gauge, MessagesSquare, Sparkle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { portfolio } from "@/lib/portfolio";
import { fadeUp, staggerContainer } from "@/lib/motion";

const icons = [Boxes, Gauge, MessagesSquare, Sparkle];

export function Philosophy() {
  const { philosophy } = portfolio;

  return (
    <Section id="philosophy">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="mesh-blob left-[5%] top-[20%] h-72 w-72 bg-blue/20" />
        <div
          className="mesh-blob right-[8%] bottom-[10%] h-72 w-72 bg-violet/20"
          style={{ animationDelay: "-9s" }}
        />
      </div>

      <SectionHeading
        eyebrow="Philosophy"
        title="How I think & build"
        subtitle="Tools change. Principles compound. These are the beliefs that guide every product I touch."
      />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-16 grid gap-6 md:grid-cols-2"
      >
        {philosophy.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div key={item.title} variants={fadeUp}>
              <GlassCard className="h-full p-8">
                <div className="flex items-start gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet to-blue text-white shadow-[0_8px_24px_rgba(124,58,237,0.4)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-white/60">
                      {item.description}
                    </p>
                  </div>
                </div>
                <span className="mt-6 block font-mono text-7xl font-bold leading-none text-white/[0.04]">
                  0{i + 1}
                </span>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
