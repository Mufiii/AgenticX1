import { AgentEvolution } from '@/components/personalizedAgents/AgentEvolution'
import { AgentNetwork } from '@/components/personalizedAgents/AgentNetwork'
import { ConceptualShift } from '@/components/personalizedAgents/ConceptualShift'
import { DigitalTwinEvolution } from '@/components/personalizedAgents/DigitalTwinEvolution'
import { HumanJourneys } from '@/components/personalizedAgents/HumanJourneys'
import { PersonalizationPillars } from '@/components/personalizedAgents/PersonalizationPillars'
import { PersonalizedAgentsHero } from '@/components/personalizedAgents/PersonalizedAgentsHero'
import { SiteShell } from '@/components/site-shell'
import { pageContent } from '@/lib/page-content'
import '@/components/personalizedAgents/personalized-agents.css'

const content = pageContent['services/personalized-agents']

export const metadata = {
  title: 'Personalized Agents | AgenticX',
  description: content.intro,
}

export default function PersonalizedAgentsPage() {
  return (
    <SiteShell>
      <PersonalizedAgentsHero />
      <AgentEvolution />
      <ConceptualShift />
      <PersonalizationPillars />
      <AgentNetwork />
      <HumanJourneys />
      <DigitalTwinEvolution />
    </SiteShell>
  )
}
