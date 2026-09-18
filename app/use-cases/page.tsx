import { AgenticSystemExplainer } from '@/components/use-cases/AgenticSystemExplainer'
import { HumanOversight } from '@/components/use-cases/HumanOversight'
import { UseCaseLibrary } from '@/components/use-cases/UseCaseLibrary'
import { UseCasesCTA } from '@/components/use-cases/UseCasesCTA'
import { UseCasesHero } from '@/components/use-cases/UseCasesHero'
import { CampusMotion } from '@/components/campus/campus-motion'
import { SiteShell } from '@/components/site-shell'

export const metadata = {
  title: 'Use Cases | AgenticX',
  description:
    'Explore real-world examples of how humans and AI agents work together across learning, work, business, research and wellbeing.',
}

export default function UseCasesPage() {
  return (
    <SiteShell>
      <CampusMotion>
        <UseCasesHero />
        <UseCaseLibrary />
        <AgenticSystemExplainer />
        <HumanOversight />
        <UseCasesCTA />
      </CampusMotion>
    </SiteShell>
  )
}
