import Link from 'next/link'

import { SectionHeading } from '@/components/personalizedAgents/SectionHeading'
import { humanJourneys } from '@/components/personalizedAgents/data'

export function HumanJourneys() {
  return (
    <section className="relative overflow-hidden bg-[#030305] text-white">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#6d35f5]/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

        {/* Section heading */}
        <SectionHeading
          tone="dark"
          eyebrow="Built Around Your Journey"
          headline={
            <>
              Personalized Intelligence for{' '}
              <span className="bg-gradient-to-r from-white via-[#a78bfa] to-[#7c5cff] bg-clip-text text-transparent">
                Every Journey.
              </span>
            </>
          }
        />

        {/* Journey grid */}
        <div className="mt-16 grid gap-5 lg:grid-cols-3">

          {humanJourneys.map((journey, index) => {
            const Icon = journey.icon

            return (
              <article
                key={journey.title}
                className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#8b5cf6]/40 hover:bg-white/[0.04] lg:p-9"
              >
                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#7c3aed]/10 blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Top */}
                <div className="relative flex items-center justify-between">
                  <span className="text-[11px] font-medium tracking-[0.3em] text-white/30">
                    0{index + 1}
                  </span>

                  <div className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <Icon
                      className="size-5 text-[#a78bfa]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative mt-12">
                  <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.25em] text-[#8b5cf6]">
                    {journey.path}
                  </p>

                  <h3 className="text-[clamp(2rem,3vw,2.7rem)] font-medium leading-[1.05] tracking-[-0.045em] text-white">
                    {journey.title}
                  </h3>

                  <ul className="mt-8 space-y-3">
                    {journey.agents.map((agent) => (
                      <li
                        key={agent}
                        className="flex items-center gap-3 text-[15px] leading-6 text-white/50 transition-colors group-hover:text-white/65"
                      >
                        <span className="size-1 rounded-full bg-[#8b5cf6]" />
                        {agent}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom */}
                <div className="relative mt-auto pt-10">
                  <div className="mb-6 h-px w-full bg-white/[0.08]" />

                  <Link
                    href={journey.href}
                    className="inline-flex items-center gap-2 text-[13px] font-medium text-white/50 transition-all duration-300 hover:gap-3 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8b5cf6]"
                  >
                    Explore {journey.title}
                    <span
                      aria-hidden="true"
                      className="text-[#a78bfa]"
                    >
                      →
                    </span>
                  </Link>
                </div>

                {/* Bottom glow line */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#7c5cff]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </article>
            )
          })}

        </div>
      </div>
    </section>
  )
}