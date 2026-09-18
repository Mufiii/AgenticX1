import Link from 'next/link'
import { ctaWords } from '@/components/polymathground/data'

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#050711] text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[480px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6d4aff]/12 blur-[140px]" />
        <div className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7659E8]/15" />
        <div className="absolute left-1/2 top-1/2 h-[860px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7659E8]/8" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center justify-center px-6 py-28 text-center sm:px-10 sm:py-32 lg:py-40">
        <div className="mb-7 flex items-center gap-3 sm:gap-4" data-campus-reveal>
          <span className="hidden h-px w-10 bg-[#7c5cff]/70 sm:block" aria-hidden="true" />
          <span className="max-w-[18rem] text-[11px] font-medium uppercase tracking-[0.22em] text-[#a9a3ff] sm:max-w-none sm:tracking-[0.32em]">
            The Future Belongs to Connected Thinkers
          </span>
          <span className="hidden h-px w-10 bg-[#7c5cff]/70 sm:block" aria-hidden="true" />
        </div>

        <h2 className="text-[clamp(2.15rem,4.6vw,3.8rem)] font-medium leading-[1.08] tracking-[-0.04em]" data-campus-reveal>
          Build the Mind That Connects{' '}
          <span className="bg-gradient-to-r from-[#4f7cff] via-[#7c5cff] to-[#a78bfa] bg-clip-text text-transparent">
            What Others Keep Separate.
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-base leading-7 text-white/55 sm:text-lg" data-campus-reveal>
          Learn across disciplines, connect ideas and turn knowledge into action.
        </p>

        <p
          className="mt-12 max-w-3xl text-[clamp(1.6rem,5vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.05em] text-white/90"
          data-campus-reveal
        >
          {ctaWords.map((word, index) => (
            <span key={word}>
              <span className={index === ctaWords.length - 1 ? 'text-[#c4b5fd]' : undefined}>{word}</span>
              {index < ctaWords.length - 1 ? ' ' : null}
            </span>
          ))}
        </p>

        <div className="mt-12 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center" data-campus-reveal>
          <Link
            href="/contact"
            className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#6d4aff] to-[#4f7cff] px-7 text-sm font-medium text-white shadow-[0_0_35px_rgba(109,74,255,0.3)] transition hover:shadow-[0_0_45px_rgba(109,74,255,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#635BFF] motion-reduce:transition-none sm:w-auto"
          >
            Start Your Polymath Journey
            <span className="text-lg transition-transform group-hover:translate-x-1 motion-reduce:transform-none" aria-hidden="true">
              →
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-white/20 px-7 text-sm font-medium text-white/85 transition hover:border-[#8b6cff] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#635BFF] sm:w-auto"
          >
            Explore AgenticX
          </Link>
        </div>
      </div>
    </section>
  )
}
