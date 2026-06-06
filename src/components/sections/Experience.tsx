"use client";

import { useEffect, useRef } from "react";
import { Building2, MapPin, TrendingUp } from "lucide-react";
import { registerGsap, gsap, ScrollTrigger } from "@/lib/gsap";
import { portfolio } from "@/lib/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useIsMobile } from "@/hooks/useMediaQuery";

export function Experience() {
  const { experience } = portfolio;
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return; // vertical stack on mobile, no pin
    registerGsap();
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    const ctx = gsap.context(() => {
      const scrollDistance = track.scrollWidth - window.innerWidth;
      gsap.to(track, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollDistance + window.innerHeight * 0.5}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section id="experience" ref={sectionRef} className="relative overflow-hidden">
      {/* Mobile: simple vertical layout */}
      {isMobile ? (
        <div className="px-6 py-24">
          <SectionHeading
            align="left"
            eyebrow="Experience"
            title="Where I've built"
          />
          <div className="mt-12 flex flex-col gap-6">
            {experience.map((exp, i) => (
              <ExperienceCard key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex min-h-[100svh] flex-col justify-center">
          <div className="mx-auto w-full max-w-7xl px-10 pt-20">
            <SectionHeading
              align="left"
              eyebrow="Experience"
              title="Where I've built"
              subtitle="Scroll horizontally through the companies and roles that shaped my craft."
            />
          </div>
          <div ref={trackRef} className="mt-12 flex w-max gap-8 px-10 pb-10">
            {experience.map((exp, i) => (
              <div key={exp.company} className="w-[78vw] max-w-[640px] shrink-0">
                <ExperienceCard exp={exp} index={i} />
              </div>
            ))}
            <div className="flex w-[40vw] shrink-0 items-center justify-center">
              <p className="font-display text-2xl font-bold text-white/20">
                ...and the next chapter is yours.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof portfolio.experience)[number];
  index: number;
}) {
  return (
    <div className="glass-strong relative h-full overflow-hidden rounded-3xl p-8">
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet/20 blur-3xl" />
      <span className="font-mono text-6xl font-bold text-white/5">0{index + 1}</span>
      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/50">
        <span className="inline-flex items-center gap-1.5">
          <Building2 className="h-4 w-4 text-cyan" /> {exp.company}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-4 w-4 text-blue" /> {exp.location}
        </span>
        <span className="font-mono text-cyan">{exp.duration}</span>
      </div>

      <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
        {exp.role}
      </h3>
      <p className="mt-2 text-white/60">{exp.summary}</p>

      <div className="mt-5 flex items-start gap-2 rounded-2xl border border-cyan/20 bg-cyan/[0.04] p-4">
        <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
        <p className="text-sm font-medium text-white/85">{exp.impact}</p>
      </div>

      <ul className="mt-5 space-y-2">
        {exp.achievements.map((a) => (
          <li key={a} className="flex gap-2.5 text-sm text-white/65">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
            {a}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {exp.stack.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-white/55"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
