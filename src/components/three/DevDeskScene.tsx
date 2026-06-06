"use client";

// Coherent neon line-art of a developer sitting at a desk, coding.
// The monitor screen is the zoom target. These constants describe the
// screen rect inside the 360×300 viewBox so the code overlay aligns 1:1.
export const SCREEN = {
  leftPct: 80 / 360,
  topPct: 40 / 300,
  widthPct: 200 / 360,
  heightPct: 125 / 300,
  // center of the screen, used as the zoom transform-origin
  originX: (80 + 100) / 360, // 50%
  originY: (40 + 62.5) / 300, // ~34.2%
};

export function DevDeskScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 300"
      fill="none"
      className={className}
      aria-hidden
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient id="dd-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="55%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <filter id="dd-neon" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.8" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g
        stroke="url(#dd-stroke)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#dd-neon)"
      >
        {/* monitor frame (screen overlay is rendered by Hero on top of this) */}
        <rect x="80" y="40" width="200" height="125" rx="8" />
        {/* monitor stand */}
        <path d="M172 165 L168 186 M188 165 L192 186" />
        <line x1="150" y1="187" x2="210" y2="187" />

        {/* desk top */}
        <line x1="28" y1="214" x2="332" y2="214" />
        <line x1="40" y1="214" x2="48" y2="236" opacity="0.4" />
        <line x1="320" y1="214" x2="312" y2="236" opacity="0.4" />

        {/* keyboard + mouse */}
        <rect x="120" y="223" width="120" height="14" rx="2.5" />
        <line x1="128" y1="230" x2="232" y2="230" opacity="0.35" />
        <rect x="250" y="225" width="16" height="11" rx="3" opacity="0.7" />

        {/* coffee mug */}
        <path d="M70 200 h14 v12 a3 3 0 0 1 -3 3 h-8 a3 3 0 0 1 -3 -3 z" opacity="0.7" />
        <path d="M84 203 h4 a3 3 0 0 1 0 6 h-4" opacity="0.5" />
        <path d="M74 196 q1 -5 4 0" opacity="0.4" />
        <path d="M80 196 q1 -5 4 0" opacity="0.4" />

        {/* desk plant */}
        <path d="M292 214 v-9 h12 v9 z" opacity="0.6" />
        <path d="M298 205 q-7 -10 -2 -18 M298 205 q7 -10 2 -18 M298 205 v-20" opacity="0.55" />

        {/* developer — seated, back view */}
        <path d="M150 255 q0 -10 10 -10 h40 q10 0 10 10 v45 h-60 z" opacity="0.3" />{/* chair back */}
        <circle cx="180" cy="262" r="17" />{/* head */}
        <path d="M148 300 C148 276 162 266 180 266 C198 266 212 276 212 300" />{/* shoulders/back */}
        {/* arms reaching to the keyboard */}
        <path d="M156 286 C150 262 140 246 132 236" />
        <path d="M204 286 C210 262 220 246 228 236" />

        {/* ambient nodes */}
        <circle cx="44" cy="70" r="2.6" opacity="0.6" />
        <circle cx="318" cy="92" r="2" opacity="0.55" />
        <circle cx="320" cy="150" r="2.6" opacity="0.45" />
      </g>
    </svg>
  );
}
