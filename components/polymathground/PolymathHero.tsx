import { KnowledgeNetwork } from '@/components/polymathground/KnowledgeNetwork'

export function PolymathHero() {
  return (
    <section className="relative overflow-hidden bg-[#050711] text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-12%] top-[10%] h-[520px] w-[520px] rounded-full bg-[#635BFF]/10 blur-[150px]" />
        <div className="absolute right-[-10%] top-[20%] h-[460px] w-[460px] rounded-full bg-[#4f46e5]/10 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 pb-20 pt-32 sm:px-10 sm:pb-24 sm:pt-36 lg:px-16 lg:pb-32 lg:pt-40">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 xl:gap-20">
          <div className="max-w-[680px]" data-campus-reveal>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-[#635BFF] to-transparent" aria-hidden="true" />
              <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#a9a3ff]">
                PolymathGround
              </span>
            </div>

            <h1 className="text-[clamp(2.4rem,5.4vw,4.75rem)] font-medium leading-[0.96] tracking-[-0.055em]">
              Learn Across Disciplines.
              <span className="mt-1 block">Connect the Patterns.</span>
              <span className="mt-1 block bg-gradient-to-r from-white via-[#c4b5fd] to-[#635BFF] bg-clip-text text-transparent">
                Build the Future.
              </span>
            </h1>

            <p className="mt-7 max-w-[520px] text-[16px] leading-[1.75] text-white/55 sm:text-[17px]">
              A short-knowledge and innovation ecosystem developing multidisciplinary
              minds for the AI &amp; DeepTech era.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="#knowledge-universe"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#6d4aff] to-[#4f7cff] px-7 text-sm font-medium text-white shadow-[0_0_35px_rgba(109,74,255,0.3)] transition hover:shadow-[0_0_45px_rgba(109,74,255,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#635BFF] motion-reduce:transition-none sm:w-auto"
              >
                Explore PolymathGround
                <span className="text-lg transition-transform group-hover:translate-x-1 motion-reduce:transform-none" aria-hidden="true">
                  →
                </span>
              </a>

              <a
                href="#polymath-journey"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-white/20 px-7 text-sm font-medium text-white/85 transition hover:border-[#8b6cff] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#635BFF] sm:w-auto"
              >
                Start Learning
              </a>
            </div>
          </div>

          <div className="min-w-0 overflow-hidden" data-campus-reveal>
            <KnowledgeNetwork />
          </div>
        </div>
      </div>
    </section>
  )
}
