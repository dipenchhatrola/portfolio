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
          className="inline-flex items-center gap-2 rounded-full border border-violet/20 bg-violet/[0.06] px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-violet"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-violet" />
          {eyebrow}
        </motion.span>
      )}
      <RevealText
        as="h2"
        text={title}
        className={cn(
          "font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl",
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
            "mt-2 text-base leading-relaxed text-slate-deep/80 sm:text-lg",
            align === "center" ? "max-w-2xl" : "max-w-xl"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
