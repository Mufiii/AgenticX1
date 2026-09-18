import Link from 'next/link'
import { SectionHeading } from '@/components/personalizedAgents/SectionHeading'
import { humanJourneys } from '@/components/personalizedAgents/data'

export function HumanJourneys() {
  return (
    <section className="relative overflow-hidden bg-[#fafaf9] text-[#17151c]">
      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <SectionHeading
          tone="light"
          eyebrow="Built Around Your Journey"
          headline={
            <>
              Personalized Intelligence for{' '}
              <span className="bg-gradient-to-r from-[#4f7cff] via-[#8B5CF6] to-[#a855f7] bg-clip-text text-transparent">
                Every Journey.
              </span>
            </>
          }
        />

        <div className="mt-16 grid gap-12 border-t border-[#e4e1ea] lg:grid-cols-3 lg:gap-0">
          {humanJourneys.map((journey, index) => {
            const Icon = journey.icon
            return (
              <article
                key={journey.title}
                className={
                  index === 0
                    ? 'flex h-full flex-col pt-10 lg:pr-12 lg:pt-12'
                    : 'flex h-full flex-col border-[#e4e1ea] pt-10 lg:border-l lg:px-12 lg:pt-12'
                }
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[11px] tracking-[0.28em] text-[#8B5CF6]">0{index + 1}</p>
                  <Icon className="size-5 text-[#6D35F5]" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-[clamp(1.8rem,2.4vw,2.4rem)] font-medium tracking-[-0.04em]">
                  {journey.title}
                </h3>
                <ul className="mt-8 space-y-3">
                  {journey.agents.map((agent) => (
                    <li key={agent} className="text-[15px] leading-6 text-[#4f5160]">
                      {agent}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-10">
                  <p className="text-[13px] tracking-[0.04em] text-[#6D35F5]">{journey.path}</p>
                  <Link
                    href={journey.href}
                    className="mt-6 inline-flex items-center gap-2 text-[13px] text-[#6a6573] transition hover:text-[#17151c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6]"
                  >
                    Explore {journey.title.charAt(0) + journey.title.slice(1).toLowerCase()}
                    <span aria-hidden="true">→</span>
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
