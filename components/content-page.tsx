import { ArrowUpRight } from 'lucide-react'
import { CTA } from '@/components/cta'
import { FinalCta } from '@/components/final-cta'
import { SectionLabel } from '@/components/section-label'
import { SiteShell } from '@/components/site-shell'
import type { PageContent } from '@/lib/page-content'

export function ContentPage({ title, eyebrow, intro, items, year }: PageContent & { eyebrow: string }) {
  return (
    <SiteShell>
      <section className="page-hero">
        <SectionLabel>{eyebrow}</SectionLabel>
        {year && <span className="roadmap-tag">{year}</span>}
        <h1>{title}</h1>
        <p>{intro}</p>
        <CTA />
      </section>
      <section className="content-grid">
        {items.map((item, i) => (
          <article className="content-card" key={item}>
            <span>0{i + 1}</span>
            <h3>{item}</h3>
            <p>Designing practical, responsible pathways that connect people, context and intelligence with clear human oversight.</p>
            <ArrowUpRight size={18} />
          </article>
        ))}
      </section>
      <FinalCta
        compact
        eyebrow="CONTINUE THE CONVERSATION"
        heading={
          <>
            Intelligence in service
            <br />
            <em>of human potential.</em>
          </>
        }
        ctaLabel="Talk to AgenticX"
      />
    </SiteShell>
  )
}
