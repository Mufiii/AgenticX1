import { ArrowRight } from 'lucide-react'
import { MarketplaceEyebrow } from '@/components/marketplace/MarketplaceEyebrow'
import { industries, type FilterIndustryId, type MarketplaceIndustryId } from '@/components/marketplace/data'
import { cn } from '@/lib/utils'

type IndustryExplorerProps = {
  selected: FilterIndustryId
  onSelect: (id: MarketplaceIndustryId) => void
}

export function IndustryExplorer({ selected, onSelect }: IndustryExplorerProps) {
  return (
    <section id="industries" className="relative scroll-mt-28 overflow-hidden bg-[#05060d] text-white">
      <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="max-w-[720px]" data-campus-reveal>
          <MarketplaceEyebrow>Industries</MarketplaceEyebrow>
          <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.045em]">
            Explore AI Agents by Industry
          </h2>
          <p className="mt-5 max-w-[540px] text-[15px] leading-[1.7] text-white/55 sm:text-[16px]">
            Discover specialized intelligence designed around real business environments and workflows.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry, index) => {
            const isActive = selected === industry.id
            const featured = industry.emphasis === 'featured'
            const number = String(index + 1).padStart(2, '0')

            return (
              <button
                key={industry.id}
                type="button"
                onClick={() => onSelect(industry.id)}
                aria-pressed={isActive}
                className={cn(
                  'group flex h-full flex-col justify-between rounded-[20px] border text-left transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0',
                  featured
                    ? 'border-white/[0.12] bg-white/[0.035] px-6 py-6 xl:col-span-2'
                    : 'border-white/[0.07] bg-transparent px-5 py-5 hover:bg-white/[0.03]',
                  isActive && 'border-[#8B5CF6]/45 bg-[#8B5CF6]/[0.08]',
                  !isActive && 'hover:border-white/[0.16]',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6]',
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[11px] font-medium tracking-[0.16em] text-[#9B86FF]/55">
                    {number}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-white/35 transition-colors duration-300 group-hover:text-[#C4B5FD]">
                    View Agents
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <div className={featured ? 'mt-8' : 'mt-6'}>
                  <h3
                    className={cn(
                      'font-medium tracking-[-0.03em] text-white',
                      featured ? 'text-[24px] sm:text-[26px]' : 'text-[18px] sm:text-[19px]',
                    )}
                  >
                    {industry.label}
                  </h3>
                  <p
                    className={cn(
                      'mt-2 leading-[1.6] text-white/45',
                      featured ? 'max-w-[34ch] text-[15px]' : 'text-[13px]',
                    )}
                  >
                    {industry.description}
                  </p>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
