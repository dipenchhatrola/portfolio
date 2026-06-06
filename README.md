# Cinematic Portfolio

A world-class, storytelling portfolio experience built with Next.js 16 (App Router), TypeScript, Tailwind v4, React Three Fiber, GSAP, Framer Motion, and Lenis smooth scroll.

> **All content is driven by a single file:** [`src/data/portfolio.json`](src/data/portfolio.json). Edit that file (or paste a resume and let it be regenerated) and the entire site updates.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Sections / experience flow

1. **Hero** — Three.js particle field, floating geometry, mouse-parallax camera, name reveal + typing animation, scroll indicator.
2. **My Story** — scroll-driven timeline with an animated progress line.
3. **Skills Galaxy** — orbiting 3D skill nodes around a glowing core (drag to explore).
4. **Projects** — each project told as Problem → Challenge → Solution → Implementation → Results with parallax + animated stats.
5. **Experience** — GSAP horizontal-scroll (pinned) showcase, vertical stack on mobile.
6. **Achievement Wall** — animated count-up stats, certifications, education.
7. **Tech Ecosystem** — interactive, mouse-reactive node network (canvas).
8. **Philosophy** — how I think & build.
9. **Contact** — interactive 3D globe, glassmorphism social cards, email + résumé CTAs.

## Architecture

```
src/
├─ app/            # layout (fonts, SEO metadata, JSON-LD), page, sitemap, robots
├─ data/           # portfolio.json — single source of truth
├─ lib/            # types, typed data loader, motion variants, gsap, utils, site/SEO config
├─ hooks/          # media query, mouse position, typewriter
├─ providers/      # Lenis ↔ GSAP smooth-scroll provider
└─ components/
   ├─ layout/      # Navbar, Footer, Preloader, ScrollProgress, custom Cursor
   ├─ ui/          # MagneticButton, RevealText, GlassCard, SectionHeading, AnimatedCounter, Section, BrandIcons
   ├─ three/       # ParticleField, SkillGalaxy, Globe (all client-only, lazy-loaded)
   └─ sections/    # the 9 page sections
```

## Before you deploy — add these assets

- `public/resume.pdf` — your résumé (linked from the Contact "Download Resume" button).
- `public/og.png` — 1200×630 social share image.
- Update `siteConfig.url` in [`src/lib/site.ts`](src/lib/site.ts) to your real domain.

## Performance / accessibility notes

- 3D scenes are `dynamic(..., { ssr: false })` and adapt particle counts on mobile.
- Respects `prefers-reduced-motion` (Lenis + animations downgrade gracefully).
- Custom cursor disabled on touch / coarse pointers.
