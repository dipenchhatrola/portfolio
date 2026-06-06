"use client";

import { motion } from "framer-motion";
import { RevealText } from "./RevealText";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

// Consistent section header: small eyebrow label + large reveal title.
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-cyan"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_12px_#22d3ee]" />
          {eyebrow}
        </motion.span>
      )}
      <RevealText
        as="h2"
        text={title}
        className={cn(
          "font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl",
          align === "center" ? "max-w-4xl" : "max-w-3xl"
        )}
      />
      {subtitle && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={cn(
            "mt-2 text-base leading-relaxed text-white/55 sm:text-lg",
            align === "center" ? "max-w-2xl" : "max-w-xl"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
