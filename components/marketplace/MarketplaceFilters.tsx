'use client'

import { Search, SlidersHorizontal, X } from 'lucide-react'
import { useId, useState } from 'react'
import {
  categoryFilters,
  industryFilters,
  type FilterCategoryId,
  type FilterIndustryId,
} from '@/components/marketplace/data'
import { marketplaceFieldClass } from '@/components/marketplace/styles'
import { cn } from '@/lib/utils'

type MarketplaceFiltersProps = {
  query: string
  category: FilterCategoryId
  industry: FilterIndustryId
  onQueryChange: (value: string) => void
  onCategoryChange: (value: FilterCategoryId) => void
  onIndustryChange: (value: FilterIndustryId) => void
  onClear: () => void
}

function FilterChip({
  label,
  pressed,
  onClick,
}: {
  label: string
  pressed: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={pressed}
      className={cn(
        'inline-flex min-h-9 items-center rounded-full border px-3.5 text-[12px] font-medium tracking-[0.01em] transition-[background-color,border-color,color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6] motion-reduce:transition-none',
        pressed
          ? 'border-[#8B5CF6]/55 bg-[#8B5CF6]/15 text-white'
          : 'border-white/[0.08] bg-transparent text-white/55 hover:border-white/20 hover:text-white',
      )}
    >
      {label}
    </button>
  )
}

export function MarketplaceFilters({
  query,
  category,
  industry,
  onQueryChange,
  onCategoryChange,
  onIndustryChange,
  onClear,
}: MarketplaceFiltersProps) {
  const searchId = useId()
  const panelId = useId()
  const [open, setOpen] = useState(false)
  const hasActiveFilters = category !== 'all' || industry !== 'all' || query.trim().length > 0
  const activeCount = Number(category !== 'all') + Number(industry !== 'all') + Number(query.trim().length > 0)

  return (
    <div className="border-b border-white/[0.08] pb-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="relative min-w-0 flex-1">
          <label htmlFor={searchId} className="sr-only">
            Search marketplace solutions
          </label>
          <Search
            size={16}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35"
            aria-hidden="true"
          />
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search solutions, industries or workflows"
            className={cn(marketplaceFieldClass, 'pl-11')}
          />
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((current) => !current)}
            className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-4 text-[13px] font-medium text-white/80 transition hover:border-[#8b6cff] hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6]"
          >
            <SlidersHorizontal size={15} aria-hidden="true" />
            Filters
            {activeCount > 0 ? (
              <span className="inline-flex size-5 items-center justify-center rounded-full bg-[#7C3AED] text-[11px] text-white">
                {activeCount}
              </span>
            ) : null}
          </button>
          {hasActiveFilters ? (
            <button
              type="button"
              onClick={onClear}
              className="inline-flex min-h-11 items-center gap-1 rounded-full px-3 text-[13px] text-white/50 transition hover:text-white"
            >
              <X size={14} aria-hidden="true" />
              Clear
            </button>
          ) : null}
        </div>
      </div>

      <div
        id={panelId}
        className={cn(
          'grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none lg:grid-rows-[1fr] lg:opacity-100',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 max-lg:pointer-events-none lg:opacity-100',
        )}
      >
        <div className="overflow-hidden lg:overflow-visible">
          <div className="flex flex-col gap-6 pt-6">
            <div role="group" aria-label="Filter by category">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                Category
              </p>
              <div className="flex flex-wrap gap-2">
                {categoryFilters.map((filter) => (
                  <FilterChip
                    key={filter.id}
                    label={filter.label}
                    pressed={category === filter.id}
                    onClick={() => onCategoryChange(filter.id)}
                  />
                ))}
              </div>
            </div>

            <div role="group" aria-label="Filter by industry">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                Industry
              </p>
              <div className="flex flex-wrap gap-2">
                {industryFilters.map((filter) => (
                  <FilterChip
                    key={filter.id}
                    label={filter.label}
                    pressed={industry === filter.id}
                    onClick={() => onIndustryChange(filter.id)}
                  />
                ))}
              </div>
            </div>

            {hasActiveFilters ? (
              <button
                type="button"
                onClick={onClear}
                className="hidden w-fit text-[13px] text-white/45 underline-offset-4 transition hover:text-white hover:underline lg:inline-flex"
              >
                Clear filters
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
