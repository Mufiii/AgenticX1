import { CapabilityGrid } from '@/components/qaqPassport/CapabilityGrid'
import { CTASection } from '@/components/qaqPassport/CTASection'
import { PolymathProfile } from '@/components/qaqPassport/PolymathProfile'
import { QaQHero } from '@/components/qaqPassport/QaQHero'
import { QaqJourney } from '@/components/qaqPassport/QaqJourney'
import { QaqModel } from '@/components/qaqPassport/QaqModel'
import { QualificationShift } from '@/components/qaqPassport/QualificationShift'
import { VerificationFlow } from '@/components/qaqPassport/VerificationFlow'
import { CampusMotion } from '@/components/campus/campus-motion'
import { SiteShell } from '@/components/site-shell'
import { pageContent } from '@/lib/page-content'
import '@/components/qaqPassport/qaq-passport.css'

const content = pageContent['services/qaq-passport']

export const metadata = {
  title: 'QaQ Passport — Qualification-as-a-Quantum | AgenticX',
  description: content.intro,
}

export default function QaqPassportPage() {
  return (
    <SiteShell>
      <CampusMotion>
        <QaQHero />
        <QualificationShift />
        <QaqModel />
        <CapabilityGrid />
        <VerificationFlow />
        <PolymathProfile />
        <QaqJourney />
        <CTASection />
      </CampusMotion>
    </SiteShell>
  )
}
