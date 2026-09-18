import { AboutCTA } from '@/components/company/AboutCTA'
import { AboutHero } from '@/components/company/AboutHero'
import { CoreValues } from '@/components/company/CoreValues'
import { GuidingCompass } from '@/components/company/GuidingCompass'
import { TheLeaders } from '@/components/company/TheLeaders'
import { CampusMotion } from '@/components/campus/campus-motion'
import { SiteShell } from '@/components/site-shell'

export const metadata = {
  title: 'About Us | AgenticX',
  description:
    'AgenticX Global Business Transformation is a DeepTech venture advancing responsible human–AI collaboration across Campus, Corporate and Community.',
}

export default function CompanyPage() {
  return (
    <SiteShell>
      <CampusMotion>
        <AboutHero />
        <GuidingCompass />
        <CoreValues />
        <TheLeaders />
        <AboutCTA />
      </CampusMotion>
    </SiteShell>
  )
}
