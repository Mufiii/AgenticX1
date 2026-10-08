import { RoadmapOrb, type RoadmapVariant } from '@/components/roadmap-orb'
import { SectionLabel } from '@/components/section-label'

const journeyMilestones: Array<{
  year: string
  phase: string
  title: string
  subtitle: string
  description: string
  color: string
  variant: RoadmapVariant
}> = [
  {
    year: '2026',
    phase: 'TODAY',
    title: 'Agentic Brain',
    subtitle: 'PERSONALIZED INTELLIGENCE THAT ACTS.',
    description: 'A framework for intelligent adaptation, combining perception, reasoning, action, learning, and orchestration to create AI that understands, decides, acts, and improves.',
    color: '#6D35F5',
    variant: 'agentic',
  },
  {
    year: '2030',
    phase: 'NEXT PHASE',
    title: 'AI Digital Twin',
    subtitle: 'INTELLIGENCE THAT MIRRORS YOU.',
    description:
      'A digital representation that learns your knowledge, preferences, decisions, and patterns to create an intelligent counterpart that understands, predicts, and assists.',
    color: '#6D35F5',
    variant: 'digital-twin',
  },
  {
    year: '2033',
    phase: 'BEYOND',
    title: 'Photonic Brain',
    subtitle: 'INTELLIGENCE AT THE SPEED OF LIGHT.',
    description:
      'A new approach to computing that uses light to process information faster, enabling powerful intelligence for the next generation of AI.',
    color: '#6D35F5',
    variant: 'photonic',
  },
]

export function JourneySection() {
  return (
    <section className="journey-section relative overflow-hidden bg-[#050711]" id="journey">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 72% 52% at 50% 58%, rgba(99, 91, 255, 0.12), transparent 70%), radial-gradient(ellipse 40% 36% at 16% 42%, rgba(167, 139, 250, 0.07), transparent 64%), radial-gradient(ellipse 40% 36% at 84% 42%, rgba(124, 92, 255, 0.07), transparent 64%)',
        }}
      />
      <div className="journey-heading">
        <SectionLabel>OUR JOURNEY</SectionLabel>
        <h2>
          From Intelligence to{' '}
          <em className="bg-gradient-to-r from-[#a78bfa] to-[#7c5cff] bg-clip-text text-transparent">
            What&apos;s Next
          </em>
        </h2>
        <p>A long-term vision to build personalized, persistent and radically faster intelligence for everyone.</p>
      </div>
      <div className="journey-timeline">
        {journeyMilestones.map((milestone) => (
          <article className="journey-milestone" key={milestone.year}>
            <div className="milestone-top">
              <div className="milestone-meta">
                <strong>{milestone.year}</strong>
                <span>{milestone.phase}</span>
              </div>
              <div className="milestone-node" style={{ '--node-color': milestone.color } as React.CSSProperties} />
              <RoadmapOrb year={milestone.year} color={milestone.color} variant={milestone.variant} />
              <h3 className="text-xl font-semibold">{milestone.title}</h3>
              <span className="milestone-subtitle text-lg font-semibold">{milestone.subtitle}</span>
            </div>
            <div className="milestone-body">
              <p>{milestone.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
