import { MarketplaceEyebrow } from '@/components/marketplace/MarketplaceEyebrow'
import { processSteps } from '@/components/marketplace/data'

export function MarketplaceProcess() {
  return (
    <section className="relative overflow-hidden bg-[#050711] text-white">
      <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="max-w-[760px]" data-campus-reveal>
          <MarketplaceEyebrow>How it works</MarketplaceEyebrow>
          <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-medium leading-[1.06] tracking-[-0.045em]">
            Discover → Evaluate → Connect → Deploy
          </h2>
        </div>

        <ol className="mt-12 grid gap-0 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <li
              key={step.id}
              data-campus-reveal
              className="relative border-t border-white/[0.08] py-8 md:border-t-0 md:border-l md:px-6 md:py-0 md:first:border-l-0 md:first:pl-0"
            >
              {index < processSteps.length - 1 ? (
                <span
                  className="pointer-events-none absolute right-0 top-8 hidden h-px w-6 bg-white/10 md:block lg:w-10"
                  aria-hidden="true"
                />
              ) : null}
              <p className="text-[11px] font-medium tracking-[0.18em] text-[#9B86FF]/70">{step.id}</p>
              <h3 className="mt-4 text-[22px] font-medium tracking-[-0.03em] text-white">{step.title}</h3>
              <p className="mt-3 max-w-[28ch] text-[14px] leading-[1.7] text-white/50">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
