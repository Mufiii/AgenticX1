"use client";

import React from "react";

function IconFrame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 72 56" className="h-14 w-[72px] overflow-visible" fill="none" aria-hidden="true">
      {children}
    </svg>
  );
}

function IconAdoption() {
  return (
    <IconFrame>
      <defs>
        <linearGradient id="adopt-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ece9ff" stopOpacity="0.7" />
          <stop offset="55%" stopColor="#8b7cff" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#4c3fd6" stopOpacity="0.12" />
        </linearGradient>
        <filter id="adopt-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.8" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#adopt-glow)" stroke="#d4d0ff" strokeWidth="1.2">
        <rect x="22" y="4" width="34" height="28" rx="6" fill="url(#adopt-fill)" transform="rotate(-22 39 18)" opacity="0.55" />
        <rect x="18" y="10" width="36" height="30" rx="6" fill="url(#adopt-fill)" transform="rotate(-8 36 25)" opacity="0.75" />
        <rect x="14" y="16" width="38" height="32" rx="7" fill="url(#adopt-fill)" />
      </g>
      <path
        d="M33 30.5 35.2 35.8 41 37.1 36.8 40.8 38 46.5 33 43.6 28 46.5 29.2 40.8 25 37.1 30.8 35.8Z"
        fill="#f4f1ff"
        stroke="#e4e0ff"
        strokeWidth="0.6"
        filter="url(#adopt-glow)"
      />
    </IconFrame>
  );
}

function IconBars() {
  return (
    <IconFrame>
      <defs>
        <linearGradient id="bar-side" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#4b42c4" />
          <stop offset="100%" stopColor="#9d96ff" />
        </linearGradient>
        <linearGradient id="bar-front" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#6d63e8" />
          <stop offset="100%" stopColor="#c4c0ff" />
        </linearGradient>
        <linearGradient id="bar-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ece9ff" />
          <stop offset="100%" stopColor="#9aa6ff" />
        </linearGradient>
        <filter id="bar-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#bar-glow)">
        <IsometricBar x={8} y={30} h={14} />
        <IsometricBar x={26} y={22} h={22} />
        <IsometricBar x={44} y={12} h={32} />
      </g>
    </IconFrame>
  );
}

function IsometricBar({ x, y, h }: { x: number; y: number; h: number }) {
  const w = 12;
  const d = 7;
  return (
    <g>
      <polygon
        points={`${x},${y} ${x + w},${y} ${x + w},${y + h} ${x},${y + h}`}
        fill="url(#bar-front)"
        stroke="#d0ccff"
        strokeWidth="0.8"
      />
      <polygon
        points={`${x + w},${y} ${x + w + d},${y - d} ${x + w + d},${y + h - d} ${x + w},${y + h}`}
        fill="url(#bar-side)"
        stroke="#b8b3ff"
        strokeWidth="0.8"
      />
      <polygon
        points={`${x},${y} ${x + d},${y - d} ${x + w + d},${y - d} ${x + w},${y}`}
        fill="url(#bar-top)"
        stroke="#eeeaff"
        strokeWidth="0.8"
      />
    </g>
  );
}

function IconHeart() {
  return (
    <IconFrame>
      <defs>
        <linearGradient id="heart-fill" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#e4e0ff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#6b5cff" stopOpacity="0.3" />
        </linearGradient>
        <filter id="heart-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.8" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <ellipse
        cx="36"
        cy="30"
        rx="26"
        ry="14"
        stroke="#b4acff"
        strokeWidth="1.3"
        opacity="0.8"
        transform="rotate(-18 36 30)"
      />
      <path
        d="M36 44C36 44 16 32 16 22.5C16 16.5 21 13 26 13C30 13 33 15 36 19C39 15 42 13 46 13C51 13 56 16.5 56 22.5C56 32 36 44 36 44Z"
        fill="url(#heart-fill)"
        stroke="#e0dcff"
        strokeWidth="1.3"
        filter="url(#heart-glow)"
      />
      <path
        d="M20 28H28L31 21L36 36L40 24L43 28H52"
        stroke="#d2e8ff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconFrame>
  );
}

function IconPlane() {
  return (
    <IconFrame>
      <defs>
        <linearGradient id="plane-fill" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#6d63e8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#f0eeff" stopOpacity="0.9" />
        </linearGradient>
        <filter id="plane-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <ellipse
        cx="36"
        cy="30"
        rx="24"
        ry="13"
        stroke="#b7b0ff"
        strokeWidth="1.3"
        transform="rotate(-22 36 30)"
      />
      <path
        d="M22 36L52 20L40 38L34 32L22 36Z"
        fill="url(#plane-fill)"
        stroke="#f2f0ff"
        strokeWidth="1.2"
        filter="url(#plane-glow)"
      />
      <path d="M34 32L40 38L36 33.5Z" fill="#8b82ff" opacity="0.9" />
    </IconFrame>
  );
}

function IconShield() {
  return (
    <IconFrame>
      <defs>
        <linearGradient id="shield-fill" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#f0eeff" stopOpacity="0.65" />
          <stop offset="55%" stopColor="#7c70ff" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#3f35b8" stopOpacity="0.2" />
        </linearGradient>
        <filter id="shield-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.7" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M36 8L56 16V30C56 40 47 47 36 50C25 47 16 40 16 30V16L36 8Z"
        fill="url(#shield-fill)"
        stroke="#e4e0ff"
        strokeWidth="1.4"
        filter="url(#shield-glow)"
      />
      <path
        d="M36 14L50 19.5V30C50 37.5 43.5 43.2 36 45.8C28.5 43.2 22 37.5 22 30V19.5L36 14Z"
        stroke="#c8c2ff"
        strokeWidth="1"
        opacity="0.85"
      />
      <path
        d="M36 18V42"
        stroke="#f6f4ff"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.75"
      />
    </IconFrame>
  );
}

const capabilities = [
  {
    number: "01",
    title: "AI Adoption",
    description: "Build practical AI capabilities across your organization.",
    Icon: IconAdoption,
  },
  {
    number: "02",
    title: "Workforce Intelligence",
    description: "Understand skills, capabilities and emerging workforce needs.",
    Icon: IconBars,
  },
  {
    number: "03",
    title: "Employee Wellbeing",
    description: "Create healthier environments for sustainable performance.",
    Icon: IconHeart,
  },
  {
    number: "04",
    title: "Performance Enablement",
    description: "Give employees intelligence and tools to work better.",
    Icon: IconPlane,
  },
  {
    number: "05",
    title: "Responsible AI",
    description: "Keep AI secure, transparent and human-centred.",
    Icon: IconShield,
  },
];

export default function CorporateIntro() {
  return (
    <section
      id="workforce-transformation"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 text-white sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-250px] top-[10%] h-[650px] w-[650px] rounded-full bg-[radial-gradient(circle,rgba(99,91,255,0.10)_0%,transparent_70%)] blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        <div className="grid items-start gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)] lg:gap-16 xl:gap-20">
          <div className="max-w-[620px]">
            <h2 className="text-[clamp(2.75rem,5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.035em] text-white">
              The Workplace
              <br />
              Is Changing.
              <br />
              <span className="text-[#7355FF]">Your Workforce</span>
              <br />
              Should Too.
            </h2>

            <div className="mt-10 max-w-[540px] space-y-6">
              <p className="text-[18px] leading-[1.7] text-[#c4c4c4] sm:text-[19px]">
                AI is transforming how people learn, collaborate, make decisions and execute work.
              </p>
              <p className="text-[17px] leading-[1.75] text-[#858585] sm:text-[18px]">
                AgenticX helps organizations move beyond disconnected AI tools toward a{" "}
                <span className="text-[#d5d5d5]">human-centred AI ecosystem</span> where employees
                and intelligent systems work together.
              </p>
            </div>
          </div>

          <div className="relative w-full">
            <NeuralField />

            <div
              aria-hidden="true"
              className="absolute bottom-10 left-[15px] top-10 hidden w-px bg-gradient-to-b from-[#d0caff] via-[#7355FF] to-transparent shadow-[0_0_14px_rgba(115,85,255,0.85)] sm:block"
            />

            <div className="space-y-3">
              {capabilities.map((item) => (
                <div
                  key={item.number}
                  className="group relative rounded-[22px] border border-[#8b7cff]/80 bg-[linear-gradient(180deg,rgba(36,30,78,0.78)_0%,rgba(9,9,16,0.94)_100%)] px-5 py-4 shadow-[0_0_28px_rgba(99,91,255,0.18),inset_0_1px_0_rgba(214,208,255,0.2)] backdrop-blur-sm transition-all duration-300 hover:border-[#b4acff] hover:shadow-[0_0_36px_rgba(99,91,255,0.32),inset_0_1px_0_rgba(214,208,255,0.28)] sm:ml-11 sm:px-5 sm:py-[15px]"
                >
                  <div
                    aria-hidden="true"
                    className="absolute -left-[44px] top-1/2 hidden h-[15px] w-[15px] -translate-y-1/2 rounded-full border-[2.5px] border-[#d8d2ff] bg-[#050505] shadow-[0_0_0_5px_rgba(115,85,255,0.18),0_0_18px_rgba(165,148,255,0.95)] sm:block"
                  >
                    <span className="absolute inset-[3px] rounded-full bg-[#f2eeff]" />
                  </div>

                  <div className="flex items-center gap-3.5">
                    <span className="w-7 shrink-0 text-[11px] font-medium tracking-[0.16em] text-[#b7a8ff]">
                      {item.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-[16px] font-medium tracking-[-0.02em] text-white sm:text-[17px]">
                        {item.title}
                      </h3>
                      <p className="mt-1 max-w-[250px] text-[13px] leading-[1.55] text-[#9a9aa6]">
                        {item.description}
                      </p>
                    </div>

                    <div className="shrink-0">
                      <item.Icon />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function NeuralField() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute -left-8 top-0 hidden h-full w-28 sm:block"
      viewBox="0 0 90 520"
      fill="none"
    >
      <g opacity="0.55">
        <path
          d="M8 40C18 70 6 110 22 150C38 190 10 230 28 280C46 330 12 380 24 440"
          stroke="url(#neural-line)"
          strokeWidth="1"
        />
        <path
          d="M28 70C10 120 40 160 18 210C-4 260 32 310 14 370"
          stroke="url(#neural-line)"
          strokeWidth="0.8"
          opacity="0.6"
        />
        {[
          [12, 48],
          [24, 96],
          [8, 148],
          [30, 198],
          [14, 252],
          [26, 318],
          [10, 372],
          [22, 428],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.6" fill="#c4b8ff" className="animate-pulse" />
        ))}
      </g>
      <defs>
        <linearGradient id="neural-line" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b7b0ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#7355FF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
