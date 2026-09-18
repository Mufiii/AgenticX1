import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function PolymathGroundCTA() {
  return (
    <section
      className="relative w-full overflow-hidden border-t border-white/[0.08] bg-[#050817] text-white"
      aria-labelledby="polymathground-cta-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-12%] top-1/2 h-[420px] w-[520px] -translate-y-1/2 rounded-full bg-[#7c3aed]/16 blur-[140px]" />
        <div className="absolute right-[-10%] top-1/2 h-[460px] w-[620px] -translate-y-1/2 rounded-full bg-[#2563eb]/12 blur-[150px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/40 to-transparent" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1500px] flex-col items-start justify-between gap-10 px-6 py-20 sm:px-10 sm:py-24 lg:flex-row lg:items-center lg:gap-16 lg:px-12 lg:py-28">
        <div className="max-w-3xl">
          <h2
            id="polymathground-cta-heading"
            className="text-[clamp(2.25rem,5vw,4.25rem)] font-medium leading-[1.04] tracking-[-0.045em]"
          >
            Build a More{' '}
            <span className="bg-gradient-to-r from-white via-[#c4b5fd] to-[#8B5CF6] bg-clip-text text-transparent">
              Adaptive Workforce.
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            Turn multidisciplinary learning into organizational capability.
          </p>
        </div>

        <Link
          href="/contact"
          className="group inline-flex min-h-[54px] shrink-0 items-center justify-center gap-3 rounded-full bg-[#8B5CF6] px-8 text-sm font-medium text-white shadow-[0_10px_28px_rgba(139,92,246,0.28)] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-px hover:bg-[#7c3aed] hover:shadow-[0_14px_34px_rgba(124,58,237,0.36)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          Talk to AgenticX
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  )
}
