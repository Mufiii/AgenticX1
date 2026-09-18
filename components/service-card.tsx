import Link from 'next/link'
import type { Service } from '@/lib/services'

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon

  return (
    <article className="service-card-wrap">
      <Link href={service.href} className="service-card">
        <span className="service-card-icon" aria-hidden="true">
          <Icon size={18} strokeWidth={1.6} />
        </span>
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <span className="service-card-cta">
          Explore Service
          <span className="service-card-arrow" aria-hidden="true">
            →
          </span>
        </span>
      </Link>
    </article>
  )
}
