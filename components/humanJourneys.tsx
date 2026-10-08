import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BookOpen,
  Box,
  BriefcaseBusiness,
  ChartColumn,
  Database,
  Globe2,
  GraduationCap,
  Search,
  Settings2,
  Sparkles,
  TrendingUp,
  UserRound,
  Users,
  Zap,
} from 'lucide-react'

type Accent = 'purple' | 'blue'

type JourneyItem = {
  icon: LucideIcon
  label: string
}

type Journey = {
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  accent: Accent
  href: string
  cta: string
  items: JourneyItem[]
}

const accents: Record<
  Accent,
  {
    label: string
    wash: string
    halo: string
    tile: string
    card: string
    cta: string
  }
> = {
  purple: {
    label: 'text-[#c4b5fd]',
    wash: 'from-[#8B5CF6]/16',
    halo: 'bg-[#8B5CF6]/35 group-hover:bg-[#a78bfa]/55',
    tile: 'border-[#e9e0ff]/35 bg-[linear-gradient(160deg,rgba(216,205,255,0.42)_0%,rgba(139,92,246,0.22)_46%,rgba(76,29,149,0.42)_100%)] shadow-[0_0_24px_rgba(139,92,246,0.38),inset_0_1px_0_rgba(255,255,255,0.38)] group-hover:shadow-[0_0_36px_rgba(167,139,250,0.62),inset_0_1px_0_rgba(255,255,255,0.48)]',
    card: 'border-[#8B5CF6]/28 shadow-[0_0_32px_rgba(139,92,246,0.08)] hover:border-[#c4b5fd]/50 hover:shadow-[0_18px_48px_rgba(139,92,246,0.16)]',
    cta: 'bg-[linear-gradient(90deg,#7c3aed_0%,#8b5cf6_52%,#a855f7_100%)] shadow-[0_8px_28px_rgba(139,92,246,0.32)] hover:shadow-[0_12px_36px_rgba(168,85,247,0.5)] group-hover:shadow-[0_12px_40px_rgba(168,85,247,0.48)]',
  },
  blue: {
    label: 'text-[#93c5fd]',
    wash: 'from-[#3b82f6]/18',
    halo: 'bg-[#3b82f6]/40 group-hover:bg-[#60a5fa]/60',
    tile: 'border-[#dbeafe]/40 bg-[linear-gradient(160deg,rgba(219,234,254,0.5)_0%,rgba(59,130,246,0.24)_48%,rgba(30,64,175,0.42)_100%)] shadow-[0_0_24px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.42)] group-hover:shadow-[0_0_36px_rgba(96,165,250,0.66),inset_0_1px_0_rgba(255,255,255,0.52)]',
    card: 'border-[#60a5fa]/32 shadow-[0_0_32px_rgba(59,130,246,0.1)] hover:border-[#bfdbfe]/55 hover:shadow-[0_18px_48px_rgba(59,130,246,0.18)]',
    cta: 'bg-[linear-gradient(90deg,#3b6cff_0%,#6d94ff_50%,#a9c0ff_100%)] shadow-[0_8px_28px_rgba(80,130,255,0.36)] hover:shadow-[0_12px_36px_rgba(130,165,255,0.55)] group-hover:shadow-[0_12px_40px_rgba(120,160,255,0.52)]',
  },
}

const journeys: Journey[] = [
  {
    title: 'CAMPUS',
    subtitle: 'AI for the next generation',
    description: 'Students, researchers and educators.',
    icon: GraduationCap,
    accent: 'purple',
    href: '/solutions/campus',
    cta: 'Explore Campus',
    items: [
      { icon: BookOpen, label: 'Personalized learning' },
      { icon: Search, label: 'Research assistance' },
      { icon: Database, label: 'Knowledge systems' },
      { icon: TrendingUp, label: 'Career intelligence' },
      { icon: Sparkles, label: 'AI skill development' },
    ],
  },
  {
    title: 'CORPORATE',
    subtitle: 'AI for the evolving workforce',
    description: 'Employees, teams and organizations.',
    icon: BriefcaseBusiness,
    accent: 'blue',
    href: '/solutions/corporate',
    cta: 'Explore Corporate',
    items: [
      { icon: Zap, label: 'AI productivity' },
      { icon: UserRound, label: 'Personalized work agents' },
      { icon: Database, label: 'Knowledge assistance' },
      { icon: Settings2, label: 'Workflow intelligence' },
      { icon: TrendingUp, label: 'Continuous upskilling' },
    ],
  },
  {
    title: 'COMMUNITY',
    subtitle: 'AI for builders and entrepreneurs',
    description: 'Founders, creators and communities.',
    icon: Users,
    accent: 'purple',
    href: '/solutions/community',
    cta: 'Explore Community',
    items: [
      { icon: ChartColumn, label: 'Business intelligence' },
      { icon: Search, label: 'Research agents' },
      { icon: Box, label: 'Productivity' },
      { icon: Globe2, label: 'Market intelligence' },
      { icon: Sparkles, label: 'Specialized AI capabilities' },
    ],
  },
]

export function HumanJourneys() {
  return (
    <section
      id="solutions"
      aria-labelledby="human-journeys-heading"
      className="relative bg-black text-white"
    >
      <div className="mx-auto max-w-[1480px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5">
            <span
              className="h-1.5 w-1.5 rounded-full bg-[#a78bfa] shadow-[0_0_8px_rgba(167,139,250,0.9)]"
              aria-hidden="true"
            />
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/70">
              Solutions
            </span>
          </div>

          <h2
            id="human-journeys-heading"
            className="text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[0.98] tracking-[-0.046em]"
          >
            Solutions for
            <br />
            <span className="bg-gradient-to-r from-[#c4b5fd] via-[#8B5CF6] to-[#a855f7] bg-clip-text text-transparent">
              Different Human Journeys
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[640px] text-[15px] leading-7 text-white/50 sm:text-[16px]">
            Personalized AI intelligence for students, professionals and
            builders — designed to help people learn, work, create and
            continuously adapt.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {journeys.map((journey) => {
            const JourneyIcon = journey.icon
            const accent = accents[journey.accent]

            return (
              <article
                key={journey.title}
                className={`group relative flex h-full flex-col overflow-hidden rounded-[26px] border bg-[linear-gradient(180deg,#12182c_0%,#0a0e18_42%,#07080e_100%)] p-6 transition-all duration-500 ease-out motion-reduce:transition-none motion-safe:hover:-translate-y-1.5 sm:p-7 lg:p-8 ${accent.card}`}
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${accent.wash} to-transparent`}
                  aria-hidden="true"
                />

                <div className="relative mb-7 flex justify-center pt-2">
                  <div className="relative h-[78px] w-[78px]">
                    <div
                      className={`absolute -inset-3 rounded-full blur-2xl transition-colors duration-500 ${accent.halo}`}
                      aria-hidden="true"
                    />
                    <div
                      className={`relative flex h-full w-full items-center justify-center rounded-2xl border backdrop-blur-md transition-shadow duration-500 ${accent.tile}`}
                    >
                      <JourneyIcon
                        className="h-9 w-9 text-white"
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>

                <p
                  className={`relative text-[11px] font-medium uppercase tracking-[0.25em] ${accent.label}`}
                >
                  {journey.title}
                </p>

                <h3 className="relative mt-3 text-[22px] font-medium leading-snug tracking-[-0.025em] text-white">
                  {journey.subtitle}
                </h3>

                <p className="relative mt-2 text-[15px] leading-6 text-white/50">
                  {journey.description}
                </p>

                <ul className="relative mt-6">
                  {journey.items.map((item, index) => {
                    const ItemIcon = item.icon

                    return (
                      <li
                        key={item.label}
                        className={`flex items-center gap-3.5 py-3 ${
                          index !== journey.items.length - 1
                            ? 'border-b border-white/[0.08]'
                            : ''
                        }`}
                      >
                        <ItemIcon
                          className="h-[18px] w-[18px] shrink-0 text-white/50"
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                        <span className="text-[14.5px] leading-5 text-white/75">
                          {item.label}
                        </span>
                      </li>
                    )
                  })}
                </ul>

                <div className="mt-auto pt-8">
                  <Link
                    href={journey.href}
                    className={`relative flex h-[54px] w-full items-center justify-center rounded-full px-14 text-[15px] font-medium text-white transition-all duration-500 ease-out hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4B5FD] motion-reduce:transition-none motion-reduce:hover:scale-100 ${accent.cta}`}
                  >
                    {journey.cta}
                    <span className="absolute inset-y-0 right-[7px] my-auto flex size-10 items-center justify-center rounded-full bg-white text-[#140c28] shadow-[0_0_16px_rgba(255,255,255,0.35)] transition-transform duration-500 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0">
                      <ArrowRight
                        className="h-4 w-4"
                        strokeWidth={2.25}
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
