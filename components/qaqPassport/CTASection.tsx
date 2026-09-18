import Link from 'next/link'

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#050711] text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[480px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6d4aff]/12 blur-[140px]" />
        <div className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7659E8]/15" />
        <div className="absolute left-1/2 top-1/2 h-[860px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7659E8]/8" />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center justify-center px-6 py-28 text-center sm:px-10 sm:py-32 lg:py-40">
        <div className="mb-7 flex items-center gap-4">
          <span className="h-px w-10 bg-[#7c5cff]/70" aria-hidden="true" />
          <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#a9a3ff]">
            Start
          </span>
          <span className="h-px w-10 bg-[#7c5cff]/70" aria-hidden="true" />
        </div>

        <h2 className="text-[clamp(2.15rem,4.6vw,3.8rem)] font-medium leading-[1.08] tracking-[-0.04em]">
          Build Your{' '}
          <span className="bg-gradient-to-r from-[#4f7cff] via-[#7c5cff] to-[#a78bfa] bg-clip-text text-transparent">
            QaQ Passport
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
          A continuously growing, learner-controlled record of what you know,
          can do, have built and have proven.
        </p>

        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#6d4aff] to-[#4f7cff] px-7 text-sm font-medium text-white shadow-[0_0_35px_rgba(109,74,255,0.3)] transition hover:shadow-[0_0_45px_rgba(109,74,255,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6] motion-reduce:transition-none sm:w-auto"
          >
            Start Building
            <span className="text-lg transition-transform group-hover:translate-x-1 motion-reduce:transform-none" aria-hidden="true">
              →
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-white/20 px-7 text-sm font-medium text-white/85 transition hover:border-[#8b6cff] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6] sm:w-auto"
          >
            Explore AgenticX
          </Link>
        </div>
      </div>
    </section>
  )
}
