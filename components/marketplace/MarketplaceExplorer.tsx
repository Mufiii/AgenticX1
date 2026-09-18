'use client'

import { useMemo, useState } from 'react'
import { FeaturedAgents } from '@/components/marketplace/FeaturedAgents'
import { IndustryExplorer } from '@/components/marketplace/IndustryExplorer'
import { MarketplaceCategories } from '@/components/marketplace/MarketplaceCategories'
import { MarketplaceFilters } from '@/components/marketplace/MarketplaceFilters'
import {
  itemMatchesFilters,
  marketplaceItems,
  type FilterCategoryId,
  type FilterIndustryId,
  type MarketplaceCategoryId,
  type MarketplaceIndustryId,
} from '@/components/marketplace/data'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function scrollToSection(id: string) {
  const target = document.getElementById(id)
  if (!target) return
  target.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  })
}

export function MarketplaceExplorer() {
  const [category, setCategory] = useState<FilterCategoryId>('all')
  const [industry, setIndustry] = useState<FilterIndustryId>('all')
  const [query, setQuery] = useState('')

  const hasActiveFilters = category !== 'all' || industry !== 'all' || query.trim().length > 0

  const items = useMemo(() => {
    const matches = marketplaceItems.filter((item) => itemMatchesFilters(item, category, industry, query))
    if (!hasActiveFilters) return matches.filter((item) => item.featured)
    return matches
  }, [category, industry, query, hasActiveFilters])

  const clearFilters = () => {
    setCategory('all')
    setIndustry('all')
    setQuery('')
  }

  const selectCategory = (id: MarketplaceCategoryId) => {
    setCategory(id)
    setIndustry('all')
    scrollToSection('agents')
  }

  const selectIndustry = (id: MarketplaceIndustryId) => {
    setIndustry(id)
    setCategory('ai-agents')
    scrollToSection('agents')
  }

  return (
    <>
      <MarketplaceCategories selected={category} onSelect={selectCategory} />
      <IndustryExplorer selected={industry} onSelect={selectIndustry} />
      <FeaturedAgents items={items} hasActiveFilters={hasActiveFilters} onClear={clearFilters}>
        <MarketplaceFilters
          query={query}
          category={category}
          industry={industry}
          onQueryChange={setQuery}
          onCategoryChange={setCategory}
          onIndustryChange={setIndustry}
          onClear={clearFilters}
        />
      </FeaturedAgents>
    </>
  )
}
