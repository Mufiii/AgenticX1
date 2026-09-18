import { SectionLabel } from '@/components/section-label'
import { ServiceCard } from '@/components/service-card'
import { services, servicesCopy } from '@/lib/services'

export function ServicesSection() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-heading">
      <div className="services-glow" aria-hidden="true" />
      <div className="services-inner">
        <header className="services-heading">
          <SectionLabel>{servicesCopy.eyebrow}</SectionLabel>
          <h2 id="services-heading">
            {servicesCopy.titleLead} <em>{servicesCopy.titleAccent}</em>
          </h2>
          <p>{servicesCopy.intro}</p>
        </header>
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
