import { CTA } from '@/components/cta'
import { SectionLabel } from '@/components/section-label'

export function FinalCta({
  compact = false,
  eyebrow = 'THE NEXT CHAPTER IS HUMAN',
  heading,
  ctaLabel,
}: {
  compact?: boolean
  eyebrow?: string
  heading?: React.ReactNode
  ctaLabel?: string
}) {
  return (
    <section className={`final-cta${compact ? ' compact-cta' : ''}`}>
      <SectionLabel>{eyebrow}</SectionLabel>
      <h2>
        {heading ?? (
          <>
            Build a future
            <br />
            <em>worth becoming.</em>
          </>
        )}
      </h2>
      <CTA label={ctaLabel} />
    </section>
  )
}
