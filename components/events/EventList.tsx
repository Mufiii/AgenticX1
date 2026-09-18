import { EventCard } from '@/components/events/EventCard'
import { upcomingEvents } from '@/components/events/data'

export function EventList() {
  return (
    <section
      id="upcoming-events"
      aria-labelledby="upcoming-events-heading"
      className="relative overflow-hidden bg-[#050711] text-white"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-8%] top-[12%] h-[360px] w-[360px] rounded-full bg-violet-600/[0.07] blur-[140px]" />
        <div className="absolute right-[-6%] bottom-[8%] h-[320px] w-[320px] rounded-full bg-indigo-600/[0.08] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 pb-16 pt-6 sm:px-10 sm:pb-20 sm:pt-8 lg:px-16 lg:pb-24 lg:pt-10">
        <h2 id="upcoming-events-heading" className="sr-only">
          Upcoming events
        </h2>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <li key={event.slug} className="h-full" data-campus-reveal>
              <EventCard event={event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
