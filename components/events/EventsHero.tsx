export function EventsHero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-[-220px] h-[560px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18)_0%,rgba(99,102,241,0.08)_38%,transparent_70%)] blur-2xl" />
        <div className="absolute right-[-12%] top-[28%] h-[380px] w-[380px] rounded-full bg-indigo-600/10 blur-[140px]" />
        <div className="absolute left-[-10%] bottom-[-18%] h-[320px] w-[320px] rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 pb-16 pt-32 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24 lg:pt-36">
        <div className="max-w-[920px] text-left md:mx-auto md:text-center" data-campus-reveal>
          <div className="mb-7 flex items-center gap-4 md:justify-center">
            <span className="h-px w-10 bg-[#7c5cff]/70" aria-hidden="true" />
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#a9a3ff]">
              Upcoming Events
            </p>
            <span className="hidden h-px w-10 bg-[#7c5cff]/70 md:block" aria-hidden="true" />
          </div>

          <h1 className="text-[clamp(2.6rem,6.4vw,5.4rem)] font-medium leading-[0.96] tracking-[-0.05em]">
            Ideas. Conversations.
            <span className="mt-1 block bg-gradient-to-r from-white via-[#c4b5fd] to-[#8B5CF6] bg-clip-text text-transparent">
              What&apos;s Next.
            </span>
          </h1>

          <p className="mt-7 max-w-[640px] text-[16px] leading-[1.7] text-white/55 sm:text-[18px] md:mx-auto">
            Join upcoming conversations exploring intelligence, technology, human transformation, and
            the future of AI.
          </p>

          <div className="mt-8 md:flex md:justify-center">
            <span className="inline-flex items-center rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c4b5fd]">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
