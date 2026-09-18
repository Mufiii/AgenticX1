import { CoreTechnology } from '@/components/products/ai-digital-twin/CoreTechnology'
import { DigitalFragmentation } from '@/components/products/ai-digital-twin/DigitalFragmentation'
import { DigitalTwinHero } from '@/components/products/ai-digital-twin/DigitalTwinHero'
import { DigitalTwinLayers } from '@/components/products/ai-digital-twin/DigitalTwinLayers'
import { PersonalIntelligenceFlow } from '@/components/products/ai-digital-twin/PersonalIntelligenceFlow'
import { TwinCTA } from '@/components/products/ai-digital-twin/twinCTA'
import { ProductLanding } from '@/components/products/product-landing'
import { SiteShell } from '@/components/site-shell'
import { pageContent } from '@/lib/page-content'

const content = pageContent['research/ai-digital-twin']

export const metadata = {
  title: 'AI Digital Twin — A trusted model of context | AgenticX',
  description: content.intro,
}

export default function AiDigitalTwinPage() {
  return (
    <SiteShell>
      <DigitalTwinHero/>
      <DigitalFragmentation/>
      <CoreTechnology/>
      <DigitalTwinLayers/>
      <PersonalIntelligenceFlow/>
      <TwinCTA/>
    </SiteShell>
  )
}
