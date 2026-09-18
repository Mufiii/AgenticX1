import AGIxCapabilities from '@/components/products/agix/AGIxCapabilities'
import AGIxHero from '@/components/products/agix/AGIxHero'
import AGIxHowItWorks from '@/components/products/agix/AGIxHowItWorks'
import { SiteShell } from '@/components/site-shell'

export const metadata = {
  title: 'AGIx — Shared infrastructure for the agentic era | AgenticX',
  description:
    'Connect learners, founders, institutions, solution providers and opportunities through shared agentic infrastructure.',
}

export default function AgixPage() {
  return (
    <SiteShell>
      <AGIxHero />
      <AGIxHowItWorks />
      <AGIxCapabilities />
    </SiteShell>
  )
}
