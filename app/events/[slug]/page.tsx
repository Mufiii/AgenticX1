import { notFound } from 'next/navigation'
import { CampusMotion } from '@/components/campus/campus-motion'
import { EventDetail } from '@/components/events/EventDetail'
import { getEventBySlug, upcomingEvents } from '@/components/events/data'
import { SiteShell } from '@/components/site-shell'

export function generateStaticParams() {
  return upcomingEvents.map((event) => ({ slug: event.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const event = getEventBySlug(slug)
  if (!event) {
    return { title: 'Event | AgenticX' }
  }

  return {
    title: `${event.title} | AgenticX`,
    description: event.description,
  }
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const event = getEventBySlug(slug)
  if (!event) notFound()

  return (
    <SiteShell>
      <CampusMotion>
        <EventDetail event={event} />
      </CampusMotion>
    </SiteShell>
  )
}
