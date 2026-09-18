import { CampusMotion } from '@/components/campus/campus-motion'
import { MarketplaceCTA } from '@/components/marketplace/MarketplaceCTA'
import { MarketplaceExplorer } from '@/components/marketplace/MarketplaceExplorer'
import { MarketplaceHero } from '@/components/marketplace/MarketplaceHero'
import { MarketplaceProcess } from '@/components/marketplace/MarketplaceProcess'
import { TrustModel } from '@/components/marketplace/TrustModel'
import { SiteShell } from '@/components/site-shell'

export const metadata = {
  title: 'Marketplace | AgenticX',
  description:
    'AI agents, expertise, learning and emerging technology — curated for real industries, real workflows and real outcomes.',
}

export default function MarketplacePage() {
  return (
    <SiteShell>
      <CampusMotion>
        <MarketplaceHero />
        <MarketplaceExplorer />
        <TrustModel />
        <MarketplaceProcess />
        <MarketplaceCTA />
      </CampusMotion>
    </SiteShell>
  )
}
