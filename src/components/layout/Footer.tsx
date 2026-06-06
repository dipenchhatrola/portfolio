"use client";

import { portfolio } from "@/lib/portfolio";
import { scrollToId } from "@/lib/scrollTo";

export function Footer() {
  const { personal } = portfolio;
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-white/40">
          © {year} {personal.name}. Crafted with Next.js, Three.js & care.
        </p>
        <div className="flex items-center gap-5 text-sm text-white/50">
          {portfolio.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              data-cursor
              className="transition-colors hover:text-cyan"
            >
              {s.label}
            </a>
          ))}
          <button
            onClick={() => scrollToId("hero")}
            data-cursor
            className="transition-colors hover:text-cyan"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
