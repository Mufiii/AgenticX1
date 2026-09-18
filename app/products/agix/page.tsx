import { ProductLanding } from '@/components/products/product-landing'
import { SiteShell } from '@/components/site-shell'

export const metadata = {
  title: 'AGIx — Shared infrastructure for the agentic era | AgenticX',
  description:
    'Connect learners, founders, institutions, solution providers and opportunities through shared agentic infrastructure.',
}

export default function AgixPage() {
  return (
    <SiteShell>
      <ProductLanding
        eyebrow="PRODUCTS · AGIX"
        title="AGIx"
        intro="Connect learners, founders, institutions, solution providers and opportunities through shared infrastructure for the agentic era."
        imageSrc="/agix.png"
        imageAlt="AGIx modular purple hardware with exploded chassis and compute board"
        items={['PolymathGround', 'QaQ Passport', 'Agentic ARMY', 'Marketplace', 'Shared infrastructure']}
      />
    </SiteShell>
  )
}
