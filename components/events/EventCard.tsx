import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { eventHref, type UpcomingEvent } from '@/components/events/data'

export function EventCard({ event }: { event: UpcomingEvent }) {
  return (
    <article className="h-full">
      <Link
        href={eventHref(event.slug)}
        aria-label={`${event.title}, ${event.status}`}
        className="group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[24px] border border-white/[0.10] bg-[#08070c] p-7 shadow-[0_18px_48px_rgba(0,0,0,0.28)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-[#8b5cf6]/45 hover:shadow-[0_24px_56px_rgba(0,0,0,0.38),0_0_40px_rgba(124,58,237,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B5CF6] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8"
      >
        <div
          className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18)_0%,transparent_70%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none space-y-2 absolute -bottom-24 left-6 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.10)_0%,transparent_70%)]"
          aria-hidden="true"
        />

        <p className="relative text-[11px] mb-2 font-medium uppercase tracking-[0.2em] text-white/40">
          {event.category}
        </p>

        <h3 className="relative mt-8 text-[35px] mb-2 font-medium leading-[1.12] tracking-[-0.03em] text-white sm:text-[35px]">
          {event.title}
        </h3>

        <p className="relative mt-4 flex-1 text-[15px] leading-[1.7] text-white/55">{event.description}</p>

        <div className="relative mt-10 flex items-center justify-between gap-4">
          <span className="inline-flex items-center rounded-full border border-[#8b5cf6]/25 bg-[#8b5cf6]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#c4b5fd]">
            {event.status}
          </span>
          <ArrowUpRight
            size={18}
            className="shrink-0 text-white/40 transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white motion-reduce:transition-none"
            aria-hidden="true"
          />
        </div>
      </Link>
    </article>
  )
}
