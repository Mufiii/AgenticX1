import { processSteps } from '@/components/use-cases/data'

export function AgenticSystemExplainer() {
  return (
    <section className="relative overflow-hidden bg-black text-white" aria-labelledby="how-it-works-heading">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <div className="max-w-[720px]" data-campus-reveal>
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[#7c5cff]/70" aria-hidden="true" />
            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#a9a3ff]">How It Works</span>
          </div>
          <h2
            id="how-it-works-heading"
            className="text-[clamp(2.1rem,4.2vw,3.6rem)] font-medium leading-[1.02] tracking-[-0.045em]"
          >
            From Problem
            <span className="mt-1 block bg-gradient-to-r from-white via-[#c4b5fd] to-[#8B5CF6] bg-clip-text text-transparent">
              to Outcome.
            </span>
          </h2>
          <p className="mt-6 max-w-[540px] text-[15px] leading-[1.7] text-white/55 sm:text-[16px]">
            Agentic systems connect goals, context, reasoning, tools and human decisions into accountable workflows.
          </p>
        </div>

        <ol className="relative mt-14 grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-x-8 md:gap-y-10 xl:mt-16 xl:grid-cols-6 xl:gap-0">
          <div
            className="pointer-events-none absolute left-[4%] right-[4%] top-4 hidden h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/45 to-transparent xl:block"
            aria-hidden="true"
          />

          {processSteps.map((step, index) => {
            const last = index === processSteps.length - 1
            return (
              <li key={step.number} className="relative xl:px-3" data-campus-reveal>
                <div className="flex gap-4 md:block">
                  <span className="relative z-10 mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-[#8B5CF6]/40 bg-black text-[11px] font-semibold tracking-[0.12em] text-[#c4b5fd] shadow-[0_0_0_6px_#000,0_0_18px_rgba(139,92,246,0.22)] md:mt-0">
                    {step.number}
                  </span>
                  <div className="min-w-0 pb-8 md:pb-0">
                    <h3 className="text-[18px] font-medium tracking-[-0.03em] text-white md:mt-5 xl:mt-6 xl:text-[17px]">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[28ch] text-[14px] leading-[1.65] text-white/50">{step.description}</p>
                    {!last ? (
                      <span className="mt-5 block text-[#8B5CF6]/80 md:hidden" aria-hidden="true">
                        ↓
                      </span>
                    ) : null}
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
