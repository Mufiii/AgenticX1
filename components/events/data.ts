export const eventStatuses = ['Coming Soon'] as const

export type EventStatus = (typeof eventStatuses)[number]

export type UpcomingEvent = {
  slug: string
  title: string
  category: string
  description: string
  status: EventStatus
}

export const upcomingEvents: UpcomingEvent[] = [
  {
    slug: 'business-intelligence-psychology',
    title: 'Business Intelligence & Psychology',
    category: 'AI • Business • Psychology',
    status: 'Coming Soon',
    description:
      'Exploring how intelligence, psychology, and human behavior shape better business decisions.',
  },
  {
    slug: 'agentic-business',
    title: 'Agentic Business',
    category: 'AI • Agents • Business',
    status: 'Coming Soon',
    description:
      'Exploring how AI agents are transforming business workflows, organizations, and execution.',
  },
  {
    slug: 'design-thinking',
    title: 'Design Thinking',
    category: 'Design • Innovation • Human-Centred AI',
    status: 'Coming Soon',
    description:
      'Exploring human-centred approaches to designing intelligent products, systems, and experiences.',
  },
]

export function eventHref(slug: string) {
  return `/events/${slug}`
}

export function getEventBySlug(slug: string) {
  return upcomingEvents.find((event) => event.slug === slug)
}
