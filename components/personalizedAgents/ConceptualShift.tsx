import { SectionHeading } from '@/components/personalizedAgents/SectionHeading'
import { shiftAgents, shiftStages } from '@/components/personalizedAgents/data'

export function ConceptualShift() {
  return (
    <section className="relative overflow-hidden bg-white text-[#101936]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-8%] top-[20%] h-[380px] w-[480px] rounded-full bg-[#8B5CF6]/6 blur-[120px]" />
        <div className="absolute right-[-8%] bottom-[-10%] h-[380px] w-[480px] rounded-full bg-[#4f46e5]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <SectionHeading
          tone="light"
          eyebrow="The Shift"
          headline={
            <>
              The Difference Is Context, Goals and{' '}
              <span className="bg-gradient-to-r from-[#4f7cff] via-[#8B5CF6] to-[#a855f7] bg-clip-text text-transparent">
                Agency.
              </span>
            </>
          }
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-start lg:gap-6">
          {shiftStages.map((stage, index) => (
            <div key={stage.title} className="contents">
              <article className="min-w-0">
                <p className="text-[11px] tracking-[0.28em] text-[#8B5CF6]">0{index + 1}</p>
                <h3 className="mt-4 text-[clamp(1.6rem,2.4vw,2.15rem)] font-medium leading-[1.1] tracking-[-0.035em]">
                  {stage.title}
                </h3>
                <p className="mt-4 max-w-sm text-[15px] leading-7 text-[#64708a]">{stage.description}</p>
              </article>
              {index < shiftStages.length - 1 ? (
                <div className="flex items-center justify-start py-1 lg:justify-center lg:pt-12" aria-hidden="true">
                  <span className="hidden text-2xl text-[#8B5CF6]/70 lg:block">→</span>
                  <span className="text-xl text-[#8B5CF6]/70 lg:hidden">↓</span>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-[#e7e5ef] pt-16">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8B5CF6]">Agentic Brain</p>
            <div className="mx-auto mt-6 h-10 w-px bg-[#8B5CF6]/40" aria-hidden="true" />
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
              {shiftAgents.map((agent, index) => (
                <li key={agent} className="flex items-center gap-5">
                  <span className="text-[13px] tracking-[0.04em] text-[#2b3348]">{agent}</span>
                  {index < shiftAgents.length - 1 ? (
                    <span className="hidden text-[#c4c0d4] sm:inline" aria-hidden="true">
                      ·
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
            <div className="mx-auto mt-6 h-10 w-px bg-[#8B5CF6]/40" aria-hidden="true" />
            <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.32em] text-[#101936]">Person</p>
          </div>
        </div>

        <p className="mx-auto mt-16 max-w-2xl text-center text-[17px] leading-8 text-[#52607a]">
          Personalized intelligence becomes powerful when agents can work together around a person&apos;s
          goals.
        </p>
      </div>
    </section>
  )
}
