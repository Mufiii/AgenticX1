import Link from 'next/link'
import { marketplacePrimaryClass, marketplaceSecondaryClass } from '@/components/marketplace/styles'

export function MarketplaceCTA() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#050711] text-white">
      <div className="relative mx-auto max-w-[1440px] px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[720px]" data-campus-reveal>
          <h2 className="text-[clamp(1.75rem,3.2vw,2.6rem)] font-medium leading-[1.12] tracking-[-0.04em]">
            Find the Intelligence
            <br />
            You Need.
          </h2>
          <p className="mx-auto mt-5 max-w-[540px] text-[15px] leading-[1.7] text-white/55 sm:text-[16px]">
            Explore AI agents, experts, learning and emerging technology built for the next generation of
            people and organizations.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a href="#marketplace" className={marketplacePrimaryClass}>
              Explore Marketplace
            </a>
            <Link href="/contact/sales" className={marketplaceSecondaryClass}>
              Become a Provider
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
