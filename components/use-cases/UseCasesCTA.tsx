import Link from 'next/link'
import { contactPrimaryClass } from '@/components/contact/contact-styles'
import { marketplaceSecondaryClass } from '@/components/marketplace/styles'

export function UseCasesCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.08] bg-[#050711] text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6d4aff]/12 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-20 text-center sm:px-10 sm:py-24 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[760px]" data-campus-reveal>
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#7c5cff]/70" aria-hidden="true" />
            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#a9a3ff]">
              Explore the Possibilities
            </span>
            <span className="h-px w-10 bg-[#7c5cff]/70" aria-hidden="true" />
          </div>

          <h2 className="text-[clamp(2.2rem,4.6vw,4rem)] font-medium leading-[1.02] tracking-[-0.045em]">
            Where Could
            <span className="mt-1 block bg-gradient-to-r from-white via-[#c4b5fd] to-[#8B5CF6] bg-clip-text text-transparent">
              Agentic Systems Help?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[520px] text-[15px] leading-[1.7] text-white/55 sm:text-[16px]">
            Explore the patterns, workflows and safeguards behind practical AI systems.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link href="/solutions" className={contactPrimaryClass}>
              Explore Solutions
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/contact" className={marketplaceSecondaryClass}>
              Talk to AgenticX
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
