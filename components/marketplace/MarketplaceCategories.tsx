import { ArrowUpRight } from 'lucide-react'
import { MarketplaceEyebrow } from '@/components/marketplace/MarketplaceEyebrow'
import { categories, type FilterCategoryId, type MarketplaceCategoryId } from '@/components/marketplace/data'
import { cn } from '@/lib/utils'

type MarketplaceCategoriesProps = {
  selected: FilterCategoryId
  onSelect: (id: MarketplaceCategoryId) => void
}

export function MarketplaceCategories({ selected, onSelect }: MarketplaceCategoriesProps) {
  return (
    <section id="marketplace" className="relative scroll-mt-28 overflow-hidden bg-[#050711] text-white">
      <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="max-w-[720px]" data-campus-reveal>
          <MarketplaceEyebrow>Categories</MarketplaceEyebrow>
          <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.045em]">
            Explore the Marketplace
          </h2>
          <p className="mt-5 max-w-[540px] text-[15px] leading-[1.7] text-white/55 sm:text-[16px]">
            Discover curated solutions designed to help people and organizations learn, operate and grow.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {categories.map((category) => {
            const Icon = category.icon
            const isActive = selected === category.id
            const featured = Boolean(category.featured)

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onSelect(category.id)}
                aria-pressed={isActive}
                className={cn(
                  'group flex h-full flex-col rounded-[24px] border p-6 text-left transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7',
                  featured
                    ? 'border-[#8B5CF6]/40 bg-[#8B5CF6]/[0.06] hover:border-[#8B5CF6]/60 hover:bg-[#8B5CF6]/[0.09]'
                    : 'border-white/[0.08] bg-white/[0.02] hover:border-white/[0.16] hover:bg-white/[0.04]',
                  isActive && (featured ? 'border-[#8B5CF6]/70 bg-[#8B5CF6]/[0.12]' : 'border-[#8B5CF6]/45 bg-white/[0.05]'),
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6]',
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={cn(
                      'flex size-11 items-center justify-center rounded-2xl border transition-colors duration-300',
                      featured
                        ? 'border-[#8065FF]/40 bg-[#6D35F5]/15 text-[#C4B5FD]'
                        : 'border-white/[0.08] bg-white/[0.03] text-[#A994FF]',
                    )}
                  >
                    <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="mt-1 text-white/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#C4B5FD]"
                    aria-hidden="true"
                  />
                </div>

                {featured ? (
                  <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C4B5FD]">
                    Primary category
                  </p>
                ) : null}

                <h3
                  className={cn(
                    'font-medium tracking-[-0.03em] text-white',
                    featured ? 'mt-2 text-[24px] sm:text-[26px]' : 'mt-6 text-[20px] sm:text-[22px]',
                  )}
                >
                  {category.label}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-white/50">{category.description}</p>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
