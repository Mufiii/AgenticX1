import BookPreorderSection from '@/components/BookPreorderSection'
import FAQSection from '@/components/FAQSection'
import { HeroSection } from '@/components/hero-section'
import { JourneySection } from '@/components/journey-section'
import { ProductSection } from '@/components/product-section'
import { ServicesSection } from '@/components/services-section'
import { SiteShell } from '@/components/site-shell'

export default function Page() {
  return (
    <SiteShell>
      <HeroSection />
      <JourneySection />
      <ProductSection />
      <ServicesSection />
      <BookPreorderSection/>
      <FAQSection/>
    </SiteShell>
  )
}
