import { MarketplaceEyebrow } from '@/components/marketplace/MarketplaceEyebrow'
import { trustColumns } from '@/components/marketplace/data'

export function TrustModel() {
  return (
    <section className="relative overflow-hidden bg-[#05060d] text-white">
      <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="max-w-[720px]" data-campus-reveal>
          <MarketplaceEyebrow>Trust model</MarketplaceEyebrow>
          <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.045em]">
            Know What You&apos;re Getting.
          </h2>
          <p className="mt-5 max-w-[540px] text-[15px] leading-[1.7] text-white/55 sm:text-[16px]">
            Every marketplace solution should clearly explain what it does, what it needs and what evidence
            supports it.
          </p>
        </div>

        <div className="mt-12 grid gap-6 border-t border-white/[0.08] pt-10 md:grid-cols-3 md:gap-8">
          {trustColumns.map((column) => (
            <article key={column.id} data-campus-reveal className="min-w-0">
              <p className="text-[11px] font-medium tracking-[0.18em] text-[#9B86FF]/70">{column.id}</p>
              <h3 className="mt-4 text-[20px] font-medium tracking-[-0.03em] text-white sm:text-[22px]">
                {column.title}
              </h3>
              <p className="mt-3 max-w-[34ch] text-[14px] leading-[1.7] text-white/50 sm:text-[15px]">
                {column.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
