'use client'

import { useId, useMemo, useState } from 'react'
import { UseCaseCard } from '@/components/use-cases/UseCaseCard'
import { UseCaseFilters } from '@/components/use-cases/UseCaseFilters'
import { filterUseCases, type UseCaseCategoryId } from '@/components/use-cases/data'

export function UseCaseLibrary() {
  const headingId = useId()
  const [category, setCategory] = useState<UseCaseCategoryId>('all')
  const items = useMemo(() => filterUseCases(category), [category])
  const categoryLabel = category === 'all' ? 'all categories' : category

  return (
    <section
      id="use-case-library"
      aria-labelledby={headingId}
      className="relative scroll-mt-32 overflow-hidden bg-[#050711] text-white"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-8%] top-[12%] h-[360px] w-[360px] rounded-full bg-violet-600/[0.07] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <div className="max-w-[720px]" data-campus-reveal>
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[#7c5cff]/70" aria-hidden="true" />
            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#a9a3ff]">
              Use-Case Library
            </span>
          </div>
          <h2
            id={headingId}
            className="text-[clamp(2.1rem,4.2vw,3.6rem)] font-medium leading-[1.02] tracking-[-0.045em]"
          >
            Agentic Systems,
            <span className="mt-1 block bg-gradient-to-r from-white via-[#c4b5fd] to-[#8B5CF6] bg-clip-text text-transparent">
              Made Concrete.
            </span>
          </h2>
          <p className="mt-6 max-w-[560px] text-[15px] leading-[1.7] text-white/55 sm:text-[16px]">
            Each use case shows the problem being addressed, the people involved, how the agent operates, what
            information it needs, where human oversight remains essential, and what outcomes can be measured.
          </p>
        </div>

        <div className="mt-10 sm:mt-12" data-campus-reveal>
          <UseCaseFilters value={category} onChange={setCategory} />
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {items.length} use {items.length === 1 ? 'case' : 'cases'} in {categoryLabel}.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-2 md:gap-6">
          {items.map((useCase, index) => (
            <div
              key={`${category}-${useCase.id}`}
              className="h-full opacity-0 motion-reduce:opacity-100 motion-reduce:[animation:none]"
              style={{
                animation: 'hero-fade-up 0.55s ease forwards',
                animationDelay: `${index * 70}ms`,
              }}
            >
              <UseCaseCard useCase={useCase} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
