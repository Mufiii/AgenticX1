import { SectionHeading } from '@/components/personalizedAgents/SectionHeading'
import { modelPipeline, quanta } from '@/components/qaqPassport/data'

export function QaqModel() {
  return (
    <section id="qaq-model" className="relative scroll-mt-28 overflow-hidden bg-[#050711] text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-[40%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#6D35F5]/8 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div data-campus-reveal>
          <SectionHeading
            align="center"
            eyebrow="Qualification-as-a-Quantum"
            headline={
              <>
                Build Your Capability One{' '}
                <span className="bg-gradient-to-r from-[#8CCBFF] via-[#8B6CFF] to-[#D66BFF] bg-clip-text text-transparent">
                  Verified Unit
                </span>{' '}
                at a Time.
              </>
            }
            description="Learning and capability can be represented through smaller, verifiable units of knowledge, skills, projects and achievements."
          />
        </div>

        <div className="mt-16" data-campus-reveal>
          <p className="mb-6 text-center text-[10px] font-medium uppercase tracking-[0.28em] text-white/35">
            Qualification quanta
          </p>

          <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-7">
            {quanta.map((unit) => (
              <li
                key={unit}
                className="rounded-xl border border-white/[0.1] bg-white/[0.03] px-3 py-4 text-center"
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/90 sm:text-[12px]">
                  {unit}
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-[#c4b5fd]/70">
                  Verified unit
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 sm:mt-20" data-campus-reveal>
          <p className="mb-8 text-center text-[10px] font-medium uppercase tracking-[0.28em] text-white/35">
            Each becomes a verified unit
          </p>

          <ol className="flex flex-col items-stretch gap-0 sm:flex-row sm:items-center sm:justify-center">
            {modelPipeline.map((step, index) => (
              <li key={step} className="flex flex-col items-center sm:flex-row">
                <div className="flex min-w-[140px] flex-col items-center py-4 text-center">
                  <span className="text-[10px] tracking-[0.24em] text-white/30">0{index + 1}</span>
                  <span className="mt-2 text-[18px] font-medium uppercase tracking-[0.16em] text-white sm:text-[20px]">
                    {step}
                  </span>
                </div>
                {index < modelPipeline.length - 1 ? (
                  <span className="text-[#8B5CF6] sm:px-3" aria-hidden="true">
                    <span className="sm:hidden">↓</span>
                    <span className="hidden sm:inline">→</span>
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
