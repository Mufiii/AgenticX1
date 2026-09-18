
import PolymathAdvantage from '@/components/polymathground/PolymathAdvantage'
import PolymathGroundCTA from '@/components/polymathground/PolymathGroundCTA'
import PolymathGroundHero from '@/components/polymathground/PolymathGroundHero'
import PolymathOutcomes from '@/components/polymathground/PolymathOutcomes'
import { SiteShell } from '@/components/site-shell'
import { pageContent } from '@/lib/page-content'

const content = pageContent['services/polymathground-startups']

export const metadata = {
  title: 'PolymathGround Startups | AgenticX',
  description: content.intro,
}

export default function PolymathGroundStartupsPage() {
  return (
    <SiteShell>
      <PolymathGroundHero />
      <PolymathAdvantage />
      <PolymathOutcomes />
      <PolymathGroundCTA />
    </SiteShell>
  )
}
