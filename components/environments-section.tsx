import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'

const environments = [
  ['Campus', 'Learn · Build · Innovate', '/solutions/campus', '01'],
  ['Corporate', 'Perform · Adapt · Grow', '/solutions/corporate', '02'],
  ['Community', 'Create · Automate · Scale', '/solutions/community', '03'],
] as const

export function EnvironmentsSection() {
  return (
    <section className="three-up">
      <SectionLabel>ONE MISSION · THREE ENVIRONMENTS</SectionLabel>
      <div className="card-grid">
        {environments.map(([title, sub, href, num]) => (
          <Link href={href} className="feature-card" key={title}>
            <span className="card-number">{num}</span>
            <h3>{title}</h3>
            <p>{sub}</p>
            <ArrowUpRight />
          </Link>
        ))}
      </div>
    </section>
  )
}
