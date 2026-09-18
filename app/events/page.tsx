import { CampusMotion } from '@/components/campus/campus-motion'
import { EventList } from '@/components/events/EventList'
import { EventsCTA } from '@/components/events/EventsCTA'
import { EventsHero } from '@/components/events/EventsHero'
import { SiteShell } from '@/components/site-shell'

export const metadata = {
  title: 'Events | AgenticX',
  description:
    'Join upcoming conversations exploring intelligence, technology, human transformation, and the future of AI.',
}

export default function EventsPage() {
  return (
    <SiteShell>
      <CampusMotion>
        <EventsHero />
        <EventList />
        <EventsCTA />
      </CampusMotion>
    </SiteShell>
  )
}
