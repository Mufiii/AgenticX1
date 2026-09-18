import Link from 'next/link'
import { MarketplaceEyebrow } from '@/components/marketplace/MarketplaceEyebrow'
import { marketplacePrimaryClass, marketplaceSecondaryClass } from '@/components/marketplace/styles'

export function MarketplaceHero() {
  return (
    <section className="relative overflow-hidden bg-[#050711] text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-[-200px] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.14)_0%,rgba(59,130,246,0.05)_42%,transparent_70%)] blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 pb-16 pt-32 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24 lg:pt-36">
        <div className="max-w-[760px]" data-campus-reveal>
          <MarketplaceEyebrow>Marketplace</MarketplaceEyebrow>

          <h1 className="text-[clamp(2.2rem,4.8vw,4.25rem)] font-medium leading-[0.98] tracking-[-0.05em]">
            Discover Intelligence
            <span className="mt-1 block bg-gradient-to-r from-white via-[#c4b5fd] to-[#8B5CF6] bg-clip-text text-transparent">
              Built for Your World.
            </span>
          </h1>

          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.7] text-[#A1A1AA] sm:text-[17px]">
            AI agents, expertise, learning and emerging technology — curated for real
            industries, real workflows and real outcomes.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a href="#agents" className={marketplacePrimaryClass}>
              Explore AI Agents
            </a>
            <Link href="#marketplace" className={marketplaceSecondaryClass}>
              Explore Marketplace
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
