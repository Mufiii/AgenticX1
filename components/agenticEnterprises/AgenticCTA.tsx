import Link from 'next/link'

export function AgenticCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050711] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[480px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6d4aff]/12 blur-[140px]" />
        <div className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7659E8]/15" />
        <div className="absolute left-1/2 top-1/2 h-[860px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7659E8]/8" />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center justify-center px-6 py-28 text-center sm:px-10 sm:py-32 lg:py-40">
        <div className="mb-7 flex items-center gap-4">
          <span className="h-px w-10 bg-[#7c5cff]/70" />
          <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#a9a3ff]">
            The Future of Enterprise
          </span>
          <span className="h-px w-10 bg-[#7c5cff]/70" />
        </div>

        <h2 className="text-[clamp(2.15rem,4.2vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.04em]">
          Build Your{' '}
          <span className="bg-gradient-to-r from-[#4f7cff] via-[#7c5cff] to-[#a78bfa] bg-clip-text text-transparent">
            Agentic Enterprise.
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
          Turn your business into an intelligent, AI-powered organization.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#6d4aff] to-[#4f7cff] px-7 py-3.5 text-sm font-medium text-white shadow-[0_0_35px_rgba(109,74,255,0.3)] transition hover:shadow-[0_0_45px_rgba(109,74,255,0.5)]"
        >
          Build With AgenticX
          <span className="text-lg">→</span>
        </Link>
      </div>
    </section>
  )
}
