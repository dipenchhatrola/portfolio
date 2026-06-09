"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, MapPin, Briefcase } from "lucide-react";
import { portfolio } from "@/lib/portfolio";
import { useTypewriter } from "@/hooks/useTypewriter";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { scrollToId } from "@/lib/scrollTo";
import { fadeUp, staggerContainer } from "@/lib/motion";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&auto=format&fit=crop";

export function Hero() {
  const { personal } = portfolio;
  const typed = useTypewriter(personal.roles, 90, 1600);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      {/* soft gradient backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.10),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.08),transparent_55%)]" />
        <div className="mesh-blob left-[8%] top-[18%] h-72 w-72 bg-violet/20" />
        <div className="mesh-blob right-[10%] bottom-[12%] h-80 w-80 bg-blue/15" style={{ animationDelay: "-8s" }} />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 md:px-10 lg:grid-cols-[1.1fr_1fr]">
        {/* copy */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-violet/20 bg-violet/[0.06] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-violet sm:text-xs"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {personal.availability}
          </motion.span>

          <motion.p variants={fadeUp} className="mt-6 font-mono text-sm text-blue">
            Hi, I&apos;m {personal.firstName} 👋
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-3 font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl"
          >
            {personal.name.split(" ")[0]}{" "}
            <span className="text-gradient">{personal.name.split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 h-7 font-mono text-lg text-violet sm:text-xl">
            {typed}
            <span className="animate-pulse">▍</span>
          </motion.p>

          <motion.p variants={fadeUp} className="mt-4 max-w-xl text-balance text-lg text-slate-deep sm:text-xl">
            {personal.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticButton onClick={() => scrollToId("projects")}>View My Work</MagneticButton>
            <MagneticButton variant="outline" onClick={() => scrollToId("contact")}>
              Get in Touch
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-deep/80"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-violet" /> {personal.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Briefcase className="h-4 w-4 text-blue" /> 2.5+ years shipping production apps
            </span>
          </motion.div>
        </motion.div>

        {/* image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-violet/20 via-blue/10 to-cyan/20 blur-2xl" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-ink/10 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
            <Image
              src={HERO_IMAGE}
              alt="Developer workspace with code on screen"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 560px"
              className="object-cover"
            />
          </div>

          {/* floating chips */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass-strong absolute -left-4 top-8 rounded-2xl px-4 py-3 sm:-left-8"
          >
            <p className="font-display text-xl font-bold text-ink">5+</p>
            <p className="text-xs text-slate-deep/80">Production apps</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass-strong absolute -right-4 bottom-8 rounded-2xl px-4 py-3 sm:-right-8"
          >
            <p className="font-display text-xl font-bold text-gradient-violet">MERN</p>
            <p className="text-xs text-slate-deep/80">Full-stack specialist</p>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-deep/60"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-ink/20 p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-violet"
          />
        </span>
        <ArrowDown className="h-3.5 w-3.5" />
      </motion.div>
    </section>
  );
}
