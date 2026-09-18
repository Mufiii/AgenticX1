'use client'

import { useRef, type KeyboardEvent } from 'react'
import { cn } from '@/lib/utils'
import { useCaseCategories, type UseCaseCategoryId } from '@/components/use-cases/data'

type UseCaseFiltersProps = {
  value: UseCaseCategoryId
  onChange: (value: UseCaseCategoryId) => void
}

export function UseCaseFilters({ value, onChange }: UseCaseFiltersProps) {
  const buttonsRef = useRef<Array<HTMLButtonElement | null>>([])

  function moveFocus(nextIndex: number) {
    const next = useCaseCategories[nextIndex]
    if (!next) return
    onChange(next.id)
    buttonsRef.current[nextIndex]?.focus()
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = useCaseCategories.length - 1
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault()
      moveFocus(index === last ? 0 : index + 1)
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault()
      moveFocus(index === 0 ? last : index - 1)
    } else if (event.key === 'Home') {
      event.preventDefault()
      moveFocus(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      moveFocus(last)
    }
  }

  return (
    <div className="-mx-6 sm:-mx-10 lg:mx-0">
      <div
        role="radiogroup"
        aria-label="Filter use cases by category"
        className="flex gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] [-ms-overflow-style:none] snap-x snap-mandatory sm:px-10 lg:flex-wrap lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {useCaseCategories.map((category, index) => {
          const selected = value === category.id
          return (
            <button
              key={category.id}
              ref={(node) => {
                buttonsRef.current[index] = node
              }}
              type="button"
              role="radio"
              aria-checked={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => onChange(category.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={cn(
                'snap-start inline-flex min-h-10 shrink-0 items-center rounded-full border px-4 text-[13px] font-medium tracking-[0.02em] transition-[background-color,border-color,color,box-shadow] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6] motion-reduce:transition-none',
                selected
                  ? 'border-[#8B5CF6]/70 bg-[#8B5CF6]/16 text-white shadow-[0_0_20px_rgba(139,92,246,0.18)]'
                  : 'border-white/[0.1] bg-transparent text-white/55 hover:border-white/25 hover:text-white',
              )}
            >
              {category.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
