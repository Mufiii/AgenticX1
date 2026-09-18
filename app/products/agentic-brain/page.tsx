import AgenticBrainHero from '@/components/products/agenticBrain/agentic-brain-hero'
import { AgenticBrainProblem } from '@/components/products/agenticBrain/AgenticBrainProblem'
import { AgentLayerSection } from '@/components/products/agenticBrain/AgentLayer'
import { HumanDirectedCTA } from '@/components/products/agenticBrain/HumanDirectedCTA'
import { HumanJourneys } from '@/components/products/agenticBrain/HumanJourneys'
import TheCore from '@/components/products/agenticBrain/TheCore'
import { SiteShell } from '@/components/site-shell'

export const metadata = {
  title: 'Agentic Brain — Your human-directed AI operating layer | AgenticX',
  description:
    'A secure orchestration layer connecting goals, knowledge, personality, mental models, specialized agents, permissions and approved tools.',
}

export default function AgenticBrainPage() {
  return (
    <SiteShell>
      <AgenticBrainHero />
      <AgenticBrainProblem />
      {/* <TheCore /> */}
      <AgentLayerSection/>
      <HumanJourneys/>
      <HumanDirectedCTA/>
    </SiteShell>
  )
}
