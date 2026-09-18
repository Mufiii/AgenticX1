import { SectionHeading } from '@/components/personalizedAgents/SectionHeading'
import { personalizationPillars } from '@/components/personalizedAgents/data'

export function PersonalizationPillars() {
  return (
    <section className="relative overflow-hidden bg-[#08080d] text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-[-10%] top-[30%] h-[420px] w-[420px] rounded-full bg-[#8B5CF6]/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <SectionHeading
          eyebrow="What Makes It Personal"
          headline={
            <>
              Not Just Memory.{' '}
              <span className="bg-gradient-to-r from-white via-[#c4b5fd] to-[#8B5CF6] bg-clip-text text-transparent">
                A Model of How You Work.
              </span>
            </>
          }
        />

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {personalizationPillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <article
                key={pillar.title}
                className="border-t border-white/[0.1] pt-6 transition hover:border-[#8B5CF6]/50"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[11px] tracking-[0.22em] text-white/30">{pillar.number}</span>
                  <Icon className="size-[18px] text-[#c4b5fd]" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-[15px] font-medium tracking-[0.18em] text-white">{pillar.title}</h3>
                <p className="mt-3 max-w-xs text-[15px] leading-7 text-white/50">{pillar.description}</p>
              </article>
            )
          })}
        </div>

        <p className="mt-20 max-w-xl text-[17px] leading-8 text-white/50">
          Personalization comes from context — not assumptions.
        </p>
      </div>
    </section>
  )
}
