"use client";

import { motion } from "framer-motion";
import { staggerContainer, wordReveal } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  stagger?: number;
  once?: boolean;
}

// Word-by-word masked reveal. Each word slides up from behind a clip mask.
export function RevealText({
  text,
  className,
  as = "h2",
  delay = 0,
  stagger = 0.06,
  once = true,
}: RevealTextProps) {
  const words = text.split(" ");
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={cn("inline-block", className)}
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-10% 0px" }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="relative inline-block overflow-hidden align-bottom"
          style={{ paddingBottom: "0.12em", marginBottom: "-0.12em" }}
        >
          <motion.span variants={wordReveal} className="inline-block">
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
