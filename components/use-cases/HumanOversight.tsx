import { oversightPrinciples } from '@/components/use-cases/data'

export function HumanOversight() {
  return (
    <section className="relative overflow-hidden bg-[#05060d] text-white" aria-labelledby="oversight-heading">
      <div className="relative mx-auto max-w-[1400px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <div className="max-w-[720px]" data-campus-reveal>
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[#7c5cff]/70" aria-hidden="true" />
            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#a9a3ff]">
              Designed for Accountability
            </span>
          </div>
          <h2
            id="oversight-heading"
            className="text-[clamp(2.1rem,4.2vw,3.6rem)] font-medium leading-[1.02] tracking-[-0.045em]"
          >
            AI Acts.
            <span className="mt-1 block bg-gradient-to-r from-white via-[#c4b5fd] to-[#8B5CF6] bg-clip-text text-transparent">
              Humans Stay in Control.
            </span>
          </h2>
          <p className="mt-6 max-w-[560px] text-[15px] leading-[1.7] text-white/55 sm:text-[16px]">
            Agentic systems can retrieve information, reason across context and execute defined actions. People remain
            responsible for decisions, approvals and exceptions.
          </p>
        </div>

        <div className="mt-12 grid gap-8 border-t border-white/[0.08] pt-10 md:grid-cols-3 md:gap-10">
          {oversightPrinciples.map((principle) => (
            <article key={principle.number} data-campus-reveal className="min-w-0">
              <p className="text-[11px] font-medium tracking-[0.18em] text-[#9B86FF]/70">{principle.number}</p>
              <h3 className="mt-4 text-[20px] font-medium tracking-[-0.03em] text-white">{principle.title}</h3>
              <p className="mt-3 max-w-[32ch] text-[14px] leading-[1.7] text-white/50 sm:text-[15px]">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
