import CorporateIntro from '@/components/corporate/corporate-intro'
import CorporateHero from '@/components/corporate/corporate-hero'
import { SiteShell } from '@/components/site-shell'
import EmployeeTransformation from '@/components/corporate/EmployeeTransformation'
import AgenticAIBrainSection from '@/components/corporate/AgenticAIBrainSection'
import AIReadinessSection from '@/components/corporate/AIReadinessSection'
import CorporateFutureCTA from '@/components/corporate/CorporateFutureCTA'




export const metadata = {
  title: 'Corporate — Build a healthier, AI-powered workforce | AgenticX',
  description:
    'Prepare people and processes for agentic work through workforce enablement, voluntary wellness insights and ethical governance.',
}

export default function CorporatePage() {
  return (
    <SiteShell>
      <CorporateHero />
      <CorporateIntro />
      <EmployeeTransformation/>
      {/* <AgenticAIBrainSection /> */}
      <AIReadinessSection/>
      <CorporateFutureCTA/>
    </SiteShell>
  )
}
