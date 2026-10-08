import BookPreorderSection from '@/components/BookPreorderSection'
import FAQSection from '@/components/FAQSection'
import { HeroSection } from '@/components/hero-section'
import { HumanJourneys } from '@/components/humanJourneys'
import { JourneySection } from '@/components/journey-section'
import { ServicesSection } from '@/components/services-section'
import { SiteShell } from '@/components/site-shell'

export default function Page() {
  return (
    <SiteShell>
      <HeroSection />
      <HumanJourneys />
      {/* <JourneySection /> */}
      <ServicesSection />
      <BookPreorderSection/>
      <FAQSection/>
    </SiteShell>
  )
}
