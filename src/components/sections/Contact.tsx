"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Mail, Download, ArrowUpRight, Globe as GlobeIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { RevealText } from "@/components/ui/RevealText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/ui/BrandIcons";
import { portfolio } from "@/lib/portfolio";
import { fadeUp, staggerContainer } from "@/lib/motion";
import type { Social } from "@/lib/types";

const Globe = dynamic(() => import("@/components/three/Globe").then((m) => m.Globe), {
  ssr: false,
});

const platformIcon: Record<Social["platform"], React.ComponentType<{ className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: XIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  email: Mail,
  dribbble: GlobeIcon,
  website: GlobeIcon,
};

export function Contact() {
  const { personal, socials } = portfolio;

  return (
    <Section id="contact" className="overflow-hidden pb-32">
      {/* floating gradients */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="mesh-blob left-1/2 top-0 h-96 w-96 -translate-x-1/2 bg-violet/25" />
        <div
          className="mesh-blob right-[15%] bottom-[20%] h-72 w-72 bg-cyan/20"
          style={{ animationDelay: "-7s" }}
        />
      </div>

      <div className="relative grid items-center gap-12 lg:grid-cols-2">
        {/* Globe */}
        <div className="relative order-2 h-[360px] w-full sm:h-[460px] lg:order-1 lg:h-[560px]">
          <Globe />
        </div>

        {/* CTA */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="order-1 flex flex-col items-start lg:order-2"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-cyan"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]" />
            {personal.availability}
          </motion.span>

          <RevealText
            as="h2"
            text="Let's build something unforgettable."
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
          />

          <motion.p variants={fadeUp} className="mt-5 max-w-md text-lg text-white/60">
            Have a project, a role, or an idea worth chasing? I&apos;m one message away.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <MagneticButton href={`mailto:${personal.email}`}>
              <Mail className="h-4 w-4" /> Say Hello
            </MagneticButton>
            <MagneticButton
              variant="outline"
              href={personal.resumeUrl}
              download
              target="_blank"
              rel="noreferrer"
            >
              <Download className="h-4 w-4" /> Download Resume
            </MagneticButton>
          </motion.div>

          {/* social cards */}
          <motion.div variants={fadeUp} className="mt-10 grid w-full max-w-md grid-cols-2 gap-3">
            {socials.map((s, i) => {
              const Icon = platformIcon[s.platform] ?? GlobeIcon;
              // Let a lone trailing card (odd count) stretch full width so the grid stays balanced.
              const spanFull = i === socials.length - 1 && socials.length % 2 === 1;
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target={s.platform === "email" ? undefined : "_blank"}
                  rel="noreferrer"
                  data-cursor
                  className={spanFull ? "group col-span-2" : "group"}
                >
                  <GlassCard className="flex items-center justify-between p-4" tilt={false}>
                    <span className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-cyan" />
                      <span className="text-sm font-medium text-white/85">{s.label}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-white/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan" />
                  </GlassCard>
                </a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
