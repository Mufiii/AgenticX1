'use client'

import { useRef, useState, type KeyboardEvent } from 'react'
import { EvolutionStage } from '@/components/personalizedAgents/EvolutionStage'
import { SectionHeading } from '@/components/personalizedAgents/SectionHeading'
import { evolutionLevels } from '@/components/personalizedAgents/data'

export function AgentEvolution() {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const active = evolutionLevels[activeIndex]
  const progress = (activeIndex / (evolutionLevels.length - 1)) * 100

  const select = (index: number, focus = false) => {
    const next = (index + evolutionLevels.length) % evolutionLevels.length
    setActiveIndex(next)
    if (focus) tabRefs.current[next]?.focus()
  }

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault()
      select(activeIndex + 1, true)
    }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault()
      select(activeIndex - 1, true)
    }
    if (event.key === 'Home') {
      event.preventDefault()
      select(0, true)
    }
    if (event.key === 'End') {
      event.preventDefault()
      select(evolutionLevels.length - 1, true)
    }
  }

  return (
    <section id="evolution" className="relative scroll-mt-28 overflow-hidden bg-[#070812] text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#8B5CF6]/8 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <SectionHeading
          eyebrow="The Evolution"
          headline={
            <>
              AI Gets More Personal at{' '}
              <span className="bg-gradient-to-r from-[#c4b5fd] via-[#8B5CF6] to-[#a78bfa] bg-clip-text text-transparent">
                Every Level.
              </span>
            </>
          }
        />

        <div className="relative mt-12 lg:mt-16">
          <div
            role="tablist"
            aria-label="Personalized agent evolution"
            onKeyDown={onKeyDown}
            className="relative flex flex-col lg:grid lg:grid-cols-8 lg:gap-0"
          >
            <div
              className="absolute bottom-3 left-[9px] top-3 w-px bg-white/10 lg:hidden"
              aria-hidden="true"
            />
            <div
              className="absolute left-[6.25%] right-[6.25%] top-[34px] hidden h-px bg-white/[0.08] lg:block"
              aria-hidden="true"
            />
            <div
              className="absolute top-[34px] hidden h-px bg-[#8B5CF6] shadow-[0_0_12px_rgba(139,92,246,0.45)] transition-[width] duration-500 ease-out motion-reduce:transition-none lg:block"
              style={{ left: '6.25%', width: `${(progress / 100) * 87.5}%` }}
              aria-hidden="true"
            />

            {evolutionLevels.map((stage, index) => (
              <EvolutionStage
                key={stage.id}
                stage={stage}
                index={index}
                active={index === activeIndex}
                onSelect={select}
                buttonRef={(element) => {
                  tabRefs.current[index] = element
                }}
              />
            ))}
          </div>

   
        </div>
      </div>
    </section>
  )
}
