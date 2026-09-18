import { CTASection } from '@/components/personalizedAgents/CTASection'
import { SectionHeading } from '@/components/personalizedAgents/SectionHeading'
import { twinEvolution } from '@/components/personalizedAgents/data'

export function DigitalTwinEvolution() {
  return (
    <section className="relative overflow-hidden bg-[#050711] text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[480px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6d4aff]/12 blur-[140px]" />
        <div className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7659E8]/15" />
        <div className="absolute left-1/2 top-1/2 h-[860px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7659E8]/8" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <SectionHeading
          align="center"
          eyebrow="The Long-Term Evolution"
          headline={
            <>
              From Personalized Agent to{' '}
              <span className="bg-gradient-to-r from-[#4f7cff] via-[#7c5cff] to-[#a78bfa] bg-clip-text text-transparent">
                Personal AI Digital Twin.
              </span>
            </>
          }
        />

        <ol className="mx-auto mt-16 hidden max-w-5xl items-center justify-center gap-x-2 gap-y-3 lg:flex lg:flex-wrap lg:pb-2">
          {twinEvolution.map((step, index) => (
            <li key={step} className="flex items-center gap-2">
              <span
                className={
                  index === twinEvolution.length - 1
                    ? 'text-[12px] tracking-[0.04em] text-[#c4b5fd]'
                    : 'text-[12px] tracking-[0.04em] text-white/55'
                }
              >
                {step}
              </span>
              {index < twinEvolution.length - 1 ? (
                <span className="text-white/25" aria-hidden="true">
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>

        <ol className="relative mx-auto mt-12 max-w-md space-y-0 lg:hidden">
          <div className="absolute bottom-3 left-[11px] top-3 w-px bg-white/10" aria-hidden="true" />
          {twinEvolution.map((step, index) => (
            <li key={step} className="relative flex gap-4 py-3">
              <span
                className={
                  index === twinEvolution.length - 1
                    ? 'mt-1.5 size-2.5 shrink-0 rounded-full bg-[#8B5CF6]'
                    : 'mt-1.5 size-2.5 shrink-0 rounded-full border border-white/30 bg-[#050711]'
                }
                aria-hidden="true"
              />
              <span className={index === twinEvolution.length - 1 ? 'text-white' : 'text-white/60'}>
                {step}
                {index === twinEvolution.length - 1 ? (
                  <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-white/35">
                    Long-term vision
                  </span>
                ) : null}
              </span>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-16 max-w-2xl text-center text-[16px] leading-8 text-white/50">
          The long-term vision is an intelligence layer that evolves with the individual — connecting
          goals, knowledge, context and approved digital systems while keeping the person in control.
        </p>

        <CTASection
          headline="Build Your Personalized Agent"
          actionLabel="Talk to AgenticX"
          actionHref="/contact"
        />
      </div>
    </section>
  )
}
