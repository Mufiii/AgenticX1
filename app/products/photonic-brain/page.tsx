import DigitalTwinAgents from '@/components/Photonics-brain/DigitalTwinAgents'
import HumanOperatingSystem from '@/components/Photonics-brain/HumanOperatingSystem'
import { LongevityTwin } from '@/components/Photonics-brain/LongevityTwin'
import { PhotonicsBrainHero } from '@/components/Photonics-brain/PhotonicsBrainHero'
import { ProductLanding } from '@/components/products/product-landing'
import { SiteShell } from '@/components/site-shell'
import { pageContent } from '@/lib/page-content'

const content = pageContent['research/photonic-brain']

export const metadata = {
  title: 'Photonic Brain — Light-speed intelligence infrastructure | AgenticX',
  description: content.intro,
}

export default function PhotonicBrainPage() {
  return (
    <SiteShell>
      <PhotonicsBrainHero/>
      <HumanOperatingSystem/>
      <DigitalTwinAgents/>
      <LongevityTwin/>
    </SiteShell>
  )
}
