"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Download, ArrowUpRight, MapPin, Globe as GlobeIcon } from "lucide-react";
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

const CONTACT_IMAGE =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80&auto=format&fit=crop";

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
        <div className="mesh-blob left-1/2 top-0 h-96 w-96 -translate-x-1/2 bg-violet/15" />
        <div
          className="mesh-blob right-[15%] bottom-[20%] h-72 w-72 bg-blue/10"
          style={{ animationDelay: "-7s" }}
        />
      </div>

      <div className="relative grid items-center gap-12 lg:grid-cols-2">
        {/* image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-2 w-full lg:order-1"
        >
          <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-blue/15 via-violet/10 to-cyan/15 blur-2xl" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-ink/10 shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
            <Image
              src={CONTACT_IMAGE}
              alt="People collaborating around laptops"
              fill
              sizes="(max-width: 1024px) 90vw, 600px"
              className="object-cover"
            />
          </div>
          <div className="glass-strong absolute -bottom-5 left-6 flex items-center gap-2 rounded-2xl px-4 py-3">
            <MapPin className="h-4 w-4 text-violet" />
            <span className="text-sm font-medium text-ink">{personal.location}</span>
          </div>
        </motion.div>

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
            className="inline-flex items-center gap-2 rounded-full border border-violet/20 bg-violet/[0.06] px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-violet"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
            {personal.availability}
          </motion.span>

          <RevealText
            as="h2"
            text="Let's build something unforgettable."
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl"
          />

          <motion.p variants={fadeUp} className="mt-5 max-w-md text-lg text-slate-deep/80">
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
                  className={spanFull ? "group col-span-2" : "group"}
                >
                  <GlassCard className="flex items-center justify-between p-4" tilt={false}>
                    <span className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-violet" />
                      <span className="text-sm font-medium text-ink/90">{s.label}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-ink/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-violet" />
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
