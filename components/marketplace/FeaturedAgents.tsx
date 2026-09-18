import type { ReactNode } from 'react'
import { MarketplaceEyebrow } from '@/components/marketplace/MarketplaceEyebrow'
import type { MarketplaceItem } from '@/components/marketplace/data'

type FeaturedAgentsProps = {
  items: MarketplaceItem[]
  hasActiveFilters: boolean
  onClear: () => void
  children?: ReactNode
}

function AgentCard({ item }: { item: MarketplaceItem }) {
  return (
    <article className="group flex h-full flex-col rounded-[22px] border border-white/[0.08] bg-white/[0.02] p-5 transition-[border-color,background-color] duration-300 hover:border-white/[0.16] hover:bg-white/[0.04] motion-reduce:transition-none sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-[11px] font-medium tracking-[0.14em] text-[#C4B5FD]/80">{item.industryLabel}</p>
        <span className="text-white/15" aria-hidden="true">
          /
        </span>
        <ul className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/[0.08] px-2 py-0.5 text-[11px] text-white/45"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <h3 className="mt-4 text-[20px] font-medium tracking-[-0.03em] text-white sm:text-[22px]">{item.name}</h3>
      <p className="mt-3 text-[14px] leading-[1.65] text-white/50">{item.description}</p>

      <dl className="mt-6 grid gap-3 border-t border-white/[0.08] pt-4 sm:grid-cols-2">
        <div>
          <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35">Data</dt>
          <dd className="mt-1 text-[12px] leading-[1.55] text-white/50">{item.metadata.data}</dd>
        </div>
        <div>
          <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35">Integrations</dt>
          <dd className="mt-1 text-[12px] leading-[1.55] text-white/50">{item.metadata.integrations}</dd>
        </div>
        <div>
          <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35">Permissions</dt>
          <dd className="mt-1 text-[12px] leading-[1.55] text-white/50">{item.metadata.permissions}</dd>
        </div>
        <div>
          <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35">Evidence</dt>
          <dd className="mt-1 text-[12px] leading-[1.55] text-white/50">{item.metadata.evidence}</dd>
        </div>
      </dl>
    </article>
  )
}

export function FeaturedAgents({ items, hasActiveFilters, onClear, children }: FeaturedAgentsProps) {
  const heading = hasActiveFilters ? 'Matching solutions' : 'Featured AI Agents'
  const description = hasActiveFilters
    ? 'Results from the current marketplace catalog. These listings are examples for evaluation.'
    : 'Specialized agents designed for specific workflows, industries and outcomes.'

  return (
    <section id="agents" className="relative scroll-mt-28 overflow-hidden bg-[#050711] text-white">
      <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="max-w-[720px]" data-campus-reveal>
          <MarketplaceEyebrow>Catalog</MarketplaceEyebrow>
          <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.045em]">
            {heading}
          </h2>
          <p className="mt-5 max-w-[540px] text-[15px] leading-[1.7] text-white/55 sm:text-[16px]">{description}</p>
        </div>

        {children ? <div className="mt-10">{children}</div> : null}

        {items.length > 0 ? (
          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
              <AgentCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-[22px] border border-white/[0.08] px-6 py-12 text-center">
            <p className="text-[16px] text-white/70">No marketplace solutions match these filters.</p>
            <p className="mt-2 text-[14px] text-white/40">Try another category, industry or search term.</p>
            <button
              type="button"
              onClick={onClear}
              className="mt-6 inline-flex min-h-11 items-center rounded-full border border-white/20 px-5 text-[13px] font-medium text-white/80 transition hover:border-[#8b6cff] hover:bg-white/[0.04]"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
