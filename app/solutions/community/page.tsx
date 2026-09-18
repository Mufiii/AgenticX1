
import { SiteShell } from '@/components/site-shell'
import CommunityHero from '@/components/community/communityHero'
import RoiFirst from '@/components/community/roiFirst'
import { BusinessIntelligenceSection } from '@/components/community/businessIntelligenceSection'
import { EnterpriseEvolution } from '@/components/community/EnterpriseEvolution'
import CommunityCTA from '@/components/community/communityCTA'
import { ThreeFreedoms } from '@/components/community/threeFreedoms'

export const metadata = {
  title: 'Community — Turn Local Enterprise into an Agentic Ecosystem | AgenticX',
  description:
    'Move from isolated digital tools to connected agentic enterprises where people orchestrate specialized AI systems around measurable goals.',
}

export default function CommunityPage() {
  return (
    <SiteShell>
      <CommunityHero />
      <RoiFirst />
      <BusinessIntelligenceSection />
      <EnterpriseEvolution />
      <ThreeFreedoms />
      <CommunityCTA />
    </SiteShell>
  )
}
