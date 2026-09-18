import { AgenticCTA } from '@/components/agenticEnterprises/AgenticCTA'
import AgenticEnterprise from '@/components/agenticEnterprises/AgenticEnterprise'
import { AIWorkforce } from '@/components/agenticEnterprises/AIWorkforce'
import { TheShift } from '@/components/agenticEnterprises/TheShift'
import { TransformationCTA } from '@/components/agenticEnterprises/TransformationCTA'
import { SiteShell } from '@/components/site-shell'
import { pageContent } from '@/lib/page-content'

const content = pageContent['services/agentic-enterprises']

export const metadata = {
  title: 'Agentic Enterprises | AgenticX',
  description: content.intro,
}

export default function AgenticEnterprisesPage() {
  return (
    <SiteShell>
      <AgenticEnterprise />
      <TheShift/>
      <AIWorkforce/>
      <TransformationCTA/>
      <AgenticCTA />
    </SiteShell>
  )
}
