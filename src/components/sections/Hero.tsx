"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { portfolio } from "@/lib/portfolio";
import { useTypewriter } from "@/hooks/useTypewriter";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { DevDeskScene, SCREEN } from "@/components/three/DevDeskScene";
import { scrollToId } from "@/lib/scrollTo";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

const ParticleField = dynamic(
  () => import("@/components/three/ParticleField").then((m) => m.ParticleField),
  { ssr: false }
);

// Code that lives "inside" the monitor and becomes readable as we fly in.
function ScreenCode() {
  const { personal } = portfolio;
  const typed = useTypewriter(personal.roles, 90, 1600);
  return (
    <div className="h-full w-full overflow-hidden bg-[#070b1a] font-mono leading-snug">
      <div className="flex items-center gap-[3px] border-b border-white/10 px-[5%] py-[4%]">
        <span className="inline-block aspect-square w-[3.5%] rounded-full bg-[#ff5f57]" />
        <span className="inline-block aspect-square w-[3.5%] rounded-full bg-[#febc2e]" />
        <span className="inline-block aspect-square w-[3.5%] rounded-full bg-[#28c840]" />
        <span className="ml-[4%] text-[clamp(5px,1.05vw,12px)] text-white/40">gunjan.ts</span>
      </div>
      <div className="px-[6%] py-[5%] text-[clamp(5px,1.1vw,13px)]">
        <p>
          <span className="text-violet">const</span>{" "}
          <span className="text-cyan">gunjan</span>{" "}
          <span className="text-white/50">=</span>{" "}
          <span className="text-white/70">{"{"}</span>
        </p>
        <p className="pl-[7%] whitespace-nowrap">
          <span className="text-blue">role</span>
          <span className="text-white/50">:</span>{" "}
          <span className="text-[#7ee787]">&quot;{typed}</span>
          <span className="animate-pulse text-cyan">▍</span>
          <span className="text-[#7ee787]">&quot;</span>
          <span className="text-white/50">,</span>
        </p>
        <p className="pl-[7%] whitespace-nowrap">
          <span className="text-blue">stack</span>
          <span className="text-white/50">:</span>{" "}
          <span className="text-white/70">[</span>
          <span className="text-[#7ee787]">&quot;React&quot;</span>
          <span className="text-white/50">,</span>{" "}
          <span className="text-[#7ee787]">&quot;Next&quot;</span>
          <span className="text-white/50">,</span>{" "}
          <span className="text-[#7ee787]">&quot;Node&quot;</span>
          <span className="text-white/70">]</span>
          <span className="text-white/50">,</span>
        </p>
        <p className="pl-[7%] whitespace-nowrap">
          <span className="text-blue">build</span>
          <span className="text-white/50">:</span>{" "}
          <span className="text-violet">()</span>{" "}
          <span className="text-white/50">=&gt;</span>{" "}
          <span className="text-cyan">ship</span>
          <span className="text-violet">()</span>
          <span className="text-white/50">,</span>
        </p>
        <p>
          <span className="text-white/70">{"}"}</span>
          <span className="text-white/50">;</span>
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  const { personal } = portfolio;
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const p = useSpring(scrollYProgress, { stiffness: 80, damping: 26, mass: 0.4 });

  const sceneScale = useTransform(p, [0, 0.85], [1, 6.8]);
  const introOpacity = useTransform(p, [0, 0.13], [1, 0]);
  const introY = useTransform(p, [0, 0.13], [0, -50]);
  const outroOpacity = useTransform(p, [0, 0.15], [1, 0]);
  const frameFade = useTransform(p, [0.72, 0.92], [1, 0]);
  const bgFade = useTransform(p, [0, 0.5], [1, 0.15]);
  const finalFade = useTransform(p, [0.9, 1], [1, 0]);

  // Reduced motion: a calm, static hero (no long scroll zoom).
  if (reduced) {
    return (
      <section id="hero" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0"><ParticleField /></div>
        <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
          <div className="relative aspect-[6/5] w-[min(60vw,420px)]">
            <DevDeskScene className="absolute inset-0 h-full w-full" />
            <div
              className="absolute overflow-hidden rounded-[3px] ring-1 ring-cyan/30"
              style={{
                left: `${SCREEN.leftPct * 100}%`,
                top: `${SCREEN.topPct * 100}%`,
                width: `${SCREEN.widthPct * 100}%`,
                height: `${SCREEN.heightPct * 100}%`,
              }}
            >
              <ScreenCode />
            </div>
          </div>
          <h1 className="font-display text-5xl font-bold text-gradient sm:text-7xl">{personal.name}</h1>
          <p className="max-w-xl text-lg text-white/70">{personal.tagline}</p>
          <div className="flex gap-4">
            <MagneticButton onClick={() => scrollToId("projects")}>View My Work</MagneticButton>
            <MagneticButton variant="outline" onClick={() => scrollToId("contact")}>Get in Touch</MagneticButton>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="hero" ref={ref} className="relative h-[320vh]">
      <div className="sticky top-0 flex h-[100svh] flex-col items-center justify-center overflow-hidden">
        {/* clean starfield backdrop */}
        <motion.div style={{ opacity: bgFade }} className="absolute inset-0">
          <ParticleField />
        </motion.div>
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,#050816_90%)]" />

        <motion.div
          style={{ opacity: finalFade }}
          className="relative z-10 flex w-full flex-col items-center justify-center gap-6 px-6 sm:gap-8"
        >
          {/* intro — name */}
          <motion.div style={{ opacity: introOpacity, y: introY }} className="flex flex-col items-center text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-white/70 backdrop-blur sm:text-xs">
              <Sparkles className="h-3.5 w-3.5 text-cyan" />
              {personal.availability}
            </span>
            <p className="mb-2 font-mono text-sm text-cyan">Hi, I&apos;m {personal.firstName}</p>
            <h1 className="font-display text-5xl font-bold leading-none tracking-tight text-gradient sm:text-6xl md:text-7xl">
              {personal.name}
            </h1>
          </motion.div>

          {/* zoom target: the developer + monitor */}
          <motion.div
            style={{
              scale: sceneScale,
              transformOrigin: `${SCREEN.originX * 100}% ${SCREEN.originY * 100}%`,
            }}
            className="relative aspect-[6/5] w-[min(62vw,420px)]"
          >
            <DevDeskScene className="absolute inset-0 h-full w-full" />
            <motion.div
              style={{
                opacity: frameFade,
                left: `${SCREEN.leftPct * 100}%`,
                top: `${SCREEN.topPct * 100}%`,
                width: `${SCREEN.widthPct * 100}%`,
                height: `${SCREEN.heightPct * 100}%`,
              }}
              className="absolute overflow-hidden rounded-[3px] ring-1 ring-cyan/30"
            >
              <ScreenCode />
            </motion.div>
          </motion.div>

          {/* tagline + CTA */}
          <motion.div style={{ opacity: outroOpacity }} className="flex flex-col items-center text-center">
            <p className="max-w-2xl text-balance text-lg text-white/70 sm:text-xl md:text-2xl">
              {personal.tagline}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton onClick={() => scrollToId("projects")}>View My Work</MagneticButton>
              <MagneticButton variant="outline" onClick={() => scrollToId("contact")}>
                Get in Touch
              </MagneticButton>
            </div>
          </motion.div>
        </motion.div>

        {/* scroll cue */}
        <motion.div
          style={{ opacity: introOpacity }}
          className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll to enter</span>
          <span className="flex h-9 w-5 justify-center rounded-full border border-white/20 p-1">
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-cyan"
            />
          </span>
          <ArrowDown className="h-3.5 w-3.5" />
        </motion.div>
      </div>
    </section>
  );
}
