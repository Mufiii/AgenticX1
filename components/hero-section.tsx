import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const PARTICLES = [
  { x: '11%', y: '24%', size: 2, delay: '0s', duration: '26s' },
  { x: '18%', y: '40%', size: 1.25, delay: '4s', duration: '30s' },
  { x: '27%', y: '18%', size: 1, delay: '7s', duration: '24s' },
  { x: '73%', y: '19%', size: 1.5, delay: '2s', duration: '28s' },
  { x: '81%', y: '33%', size: 2, delay: '9s', duration: '32s' },
  { x: '89%', y: '23%', size: 1, delay: '1s', duration: '22s' },
  { x: '15%', y: '62%', size: 1.25, delay: '5s', duration: '29s' },
  { x: '85%', y: '58%', size: 1.5, delay: '8s', duration: '27s' },
  { x: '22%', y: '74%', size: 1, delay: '11s', duration: '25s' },
  { x: '78%', y: '72%', size: 1.25, delay: '3s', duration: '31s' },
  { x: '50%', y: '14%', size: 1, delay: '6s', duration: '28s' },
  { x: '8%', y: '48%', size: 1, delay: '13s', duration: '34s' },
  { x: '93%', y: '46%', size: 1, delay: '10s', duration: '26s' },
  { x: '36%', y: '82%', size: 1, delay: '2.5s', duration: '30s' },
  { x: '64%', y: '80%', size: 1.25, delay: '7.5s', duration: '27s' },
] as const

const FLOOR_DOTS = (() => {
  const dots: { x: number; y: number; r: number; o: number }[] = []
  const rows = 7
  const cols = 46

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const t = col / (cols - 1)
      const wave = Math.sin(t * Math.PI * 2.15 + row * 0.45) * (8 + row * 5.5)
      const swell = Math.sin(t * Math.PI) * row * 3.2
      dots.push({
        x: Math.round((36 + t * 1368) * 10) / 10,
        y: Math.round((36 + row * 34 + wave - swell) * 10) / 10,
        r: Math.round((0.85 + row * 0.18) * 100) / 100,
        o: Math.round((0.2 + row * 0.07) * 100) / 100,
      })
    }
  }

  return dots
})()

function HeroField() {
  return (
    <div className="hero-intel__field" aria-hidden="true">
      <div className="hero-intel__wash" />

      <svg className="hero-intel__trails" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="hero-trail-left" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
            <stop offset="38%" stopColor="#c4b5fd" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hero-trail-right" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
            <stop offset="42%" stopColor="#a78bfa" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0" />
          </linearGradient>
          <filter id="hero-trail-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.4" />
          </filter>
        </defs>

        <g className="hero-intel__trail-glow" filter="url(#hero-trail-glow)">
          <path d="M-80 230C120 150 280 190 470 310" stroke="#8b5cf6" strokeWidth="10" />
          <path d="M1520 210C1280 150 1120 210 980 320" stroke="#6366f1" strokeWidth="10" />
          <path d="M-60 390C160 450 340 360 560 430" stroke="#7c3aed" strokeWidth="8" />
          <path d="M1500 400C1280 460 1100 360 900 440" stroke="#7c3aed" strokeWidth="8" />
        </g>

        <g className="hero-intel__trail-line" fill="none" strokeLinecap="round">
          <path d="M-90 168C70 120 240 150 430 250C560 320 640 360 730 430" stroke="url(#hero-trail-left)" strokeWidth="1.15" />
          <path d="M-40 248C140 190 300 230 500 340" stroke="url(#hero-trail-left)" strokeWidth="0.8" />
          <path d="M-110 330C80 390 260 300 490 390" stroke="url(#hero-trail-left)" strokeWidth="0.7" className="hero-intel__trail--fine" />
          <path d="M-20 430C180 470 360 410 560 450" stroke="url(#hero-trail-left)" strokeWidth="0.6" className="hero-intel__trail--fine" />
          <path d="M1530 150C1310 110 1140 170 1010 270C920 340 840 380 740 440" stroke="url(#hero-trail-right)" strokeWidth="1.15" />
          <path d="M1480 236C1300 180 1140 230 960 340" stroke="url(#hero-trail-right)" strokeWidth="0.8" />
          <path d="M1550 328C1340 390 1160 300 960 390" stroke="url(#hero-trail-right)" strokeWidth="0.7" className="hero-intel__trail--fine" />
          <path d="M1460 448C1260 490 1080 420 900 460" stroke="url(#hero-trail-right)" strokeWidth="0.6" className="hero-intel__trail--fine" />
        </g>
      </svg>

      <span className="hero-intel__satellite hero-intel__satellite--left" />
      <span className="hero-intel__satellite hero-intel__satellite--right" />

      <div className="hero-intel__core">
        <div className="hero-intel__halo" />
        <div className="hero-intel__sphere">
          <span className="hero-intel__crest" />
        </div>
        <svg className="hero-intel__globe" viewBox="0 0 100 100" aria-hidden="true">
          <defs>
            <linearGradient id="hero-globe-rim" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.92" />
              <stop offset="14%" stopColor="#ddd4ff" stopOpacity="0.55" />
              <stop offset="42%" stopColor="#a78bfa" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.05" />
            </linearGradient>
            <radialGradient id="hero-globe-light" cx="50%" cy="0%" r="55%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="28%" stopColor="#d6ccff" stopOpacity="0.28" />
              <stop offset="70%" stopColor="#7c3aed" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="50" cy="7.2" rx="24" ry="3.4" fill="url(#hero-globe-light)" />
          <circle cx="50" cy="50" r="46.6" fill="none" stroke="url(#hero-globe-rim)" strokeWidth="0.35" />
        </svg>
        <span className="hero-intel__ring hero-intel__ring--a">
          <i className="hero-intel__node" />
        </span>
        <span className="hero-intel__ring hero-intel__ring--b">
          <i className="hero-intel__node hero-intel__node--quiet" />
        </span>
        <span className="hero-intel__ring hero-intel__ring--c" />
      </div>

      {PARTICLES.map((particle) => (
        <span
          key={`${particle.x}-${particle.y}`}
          className="hero-intel__particle"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}

      <svg className="hero-intel__floor" viewBox="0 0 1440 300" preserveAspectRatio="xMidYMax meet">
        {FLOOR_DOTS.map((dot, index) => (
          <circle key={index} cx={dot.x} cy={dot.y} r={dot.r} fill={`rgba(196,181,253,${dot.o})`} />
        ))}
      </svg>
      <div className="hero-intel__horizon" />
      <div className="hero-intel__vignette" />
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="hero-intel" aria-labelledby="hero-heading">
      <HeroField />

      <div className="hero-intel__content">
        <p className="hero-intel__eyebrow">AI · Wellness · Deeptech</p>

        <div className="hero-intel__title-wrap">
          <h1 id="hero-heading" className="hero-intel__title">
            <span>Advancing</span>
            <span className="hero-intel__accent">Human–AI Adaptability</span>
            <span>Intelligence</span>
          </h1>
        </div>

        <p className="hero-intel__copy">
          AgenticX is building personalized intelligence around the individual. By connecting context, knowledge, goals, and specialized AI agents, we help people learn, work, create, and continuously adapt as AI becomes part of everyday life.
        </p>

        <div className="hero-intel__actions">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center gap-2.5 whitespace-nowrap rounded-full bg-[linear-gradient(180deg,#A78BFA_0%,#7C3AED_48%,#6D28D9_100%)] py-1 pl-5 pr-1 text-[14px] font-semibold !text-white shadow-[0_10px_28px_rgba(124,58,237,0.42)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(139,92,246,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4B5FD] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:h-[52px] sm:gap-3 sm:pl-6 sm:pr-1.5 sm:text-[15px]"
          >
            Be a Member
            <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-[#6D28D9] sm:size-9">
              <ArrowUpRight size={16} aria-hidden="true" strokeWidth={2.25} />
            </span>
          </Link>
          <Link
            href="/solutions"
            className="inline-flex h-12 items-center gap-2.5 whitespace-nowrap rounded-full border border-white/15 bg-white/[0.03] py-1 pl-5 pr-1 text-[14px] font-semibold text-white transition-[transform,background-color,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-white/28 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4B5FD] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:h-[52px] sm:gap-3 sm:pl-6 sm:pr-1.5 sm:text-[15px]"
          >
            Explore Solutions
            <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white sm:size-9">
              <ArrowUpRight size={16} aria-hidden="true" strokeWidth={2.25} />
            </span>
          </Link>
        </div>
      </div>

      <a href="#services" className="hero-intel__scroll">
        <span className="hero-intel__scroll-label">Scroll</span>
        <span className="hero-intel__scroll-line">
          <span className="hero-intel__scroll-dot" />
        </span>
      </a>
      </section>
  )
}
