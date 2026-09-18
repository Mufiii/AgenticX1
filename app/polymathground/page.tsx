import { ConnectionExamples } from '@/components/polymathground/ConnectionExamples'
import { CreationJourney } from '@/components/polymathground/CreationJourney'
import { CTASection } from '@/components/polymathground/CTASection'
import { KnowledgeUniverse } from '@/components/polymathground/KnowledgeUniverse'
import { PolymathHero } from '@/components/polymathground/PolymathHero'
import { PolymathJourney } from '@/components/polymathground/PolymathJourney'
import { ShiftSection } from '@/components/polymathground/ShiftSection'
import { CampusMotion } from '@/components/campus/campus-motion'
import { SiteShell } from '@/components/site-shell'
import { pageContent } from '@/lib/page-content'
import '@/components/polymathground/polymathground.css'

const content = pageContent.polymathground

export const metadata = {
  title: 'PolymathGround | AgenticX',
  description: content.intro,
}

export default function PolymathGroundPage() {
  return (
    <SiteShell>
      <CampusMotion>
        <PolymathHero />
        <ShiftSection />
        <KnowledgeUniverse />
        <ConnectionExamples />
        <CreationJourney />
        <PolymathJourney />
        <CTASection />
      </CampusMotion>
    </SiteShell>
  )
}
