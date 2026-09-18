import Link from 'next/link'
import { contactPrimaryClass } from '@/components/contact/contact-styles'

export function EventsCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.08] bg-[#050711] text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6d4aff]/12 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-20 text-center sm:px-10 sm:py-24 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[760px]" data-campus-reveal>
          <h2 className="text-[clamp(2.2rem,4.6vw,4rem)] font-medium leading-[1.02] tracking-[-0.045em]">
            Be the first to know.
          </h2>

          <p className="mx-auto mt-6 max-w-[520px] text-[15px] leading-[1.7] text-white/55 sm:text-[16px]">
            Stay connected with AgenticX for upcoming events, workshops, and conversations.
          </p>

          <div className="mt-10 flex justify-center">
            <Link href="/contact" className={contactPrimaryClass}>
              Contact Us
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
