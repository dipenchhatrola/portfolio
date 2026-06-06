"use client";

import { motion, useScroll, useSpring } from "framer-motion";

// Thin gradient progress bar pinned to the top of the viewport.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed inset-x-0 top-0 z-[70] h-0.5 bg-gradient-to-r from-violet via-blue to-cyan"
    />
  );
}
