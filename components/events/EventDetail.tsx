import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { contactPrimaryClass } from '@/components/contact/contact-styles'
import { marketplaceSecondaryClass } from '@/components/marketplace/styles'
import type { UpcomingEvent } from '@/components/events/data'

export function EventDetail({ event }: { event: UpcomingEvent }) {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-[-220px] h-[560px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18)_0%,rgba(99,102,241,0.08)_38%,transparent_70%)] blur-2xl" />
        <div className="absolute right-[-12%] top-[28%] h-[380px] w-[380px] rounded-full bg-indigo-600/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 pb-24 pt-32 sm:px-10 sm:pb-28 lg:px-16 lg:pb-32 lg:pt-40">
        <div className="mx-auto max-w-[760px] text-center" data-campus-reveal>
          <div className="mb-7 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#7c5cff]/70" aria-hidden="true" />
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#a9a3ff]">
              Upcoming Events
            </p>
            <span className="h-px w-10 bg-[#7c5cff]/70" aria-hidden="true" />
          </div>

          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">{event.category}</p>

          <h1 className="mt-5 text-[clamp(2.4rem,5.6vw,4.6rem)] font-medium leading-[0.98] tracking-[-0.05em]">
            {event.title}
          </h1>

          <div className="mt-7 flex justify-center">
            <span className="inline-flex items-center rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c4b5fd]">
              {event.status}
            </span>
          </div>

          <p className="mx-auto mt-8 max-w-[560px] text-[16px] leading-[1.7] text-white/55 sm:text-[18px]">
            {event.description}
          </p>

          <p className="mx-auto mt-6 max-w-[480px] text-[15px] leading-[1.7] text-white/40">
            Event details will be announced soon. Stay connected with AgenticX to be the first to know.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link href="/contact" className={contactPrimaryClass}>
              Contact Us
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/events" className={marketplaceSecondaryClass}>
              All events
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
