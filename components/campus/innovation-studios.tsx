'use client'

import { useEffect, useState } from 'react'
import { CampusSection } from '@/components/campus/campus-ui'

const steps = ['Learn', 'Explore', 'Design', 'Build', 'Test', 'Improve'] as const

export function InnovationStudios() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches || paused) return undefined
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % steps.length)
    }, 2400)
    return () => window.clearInterval(id)
  }, [paused])

  return (
    <CampusSection>
      <div className="max-w-[720px]" data-campus-reveal>
        <h2 className="text-[clamp(2.25rem,4.8vw,4.375rem)] font-normal leading-[1.02] tracking-[-0.035em]">
          From Theory to <em className="not-italic text-[#c4b5fd]">Experimentation</em>
        </h2>
        <p className="mt-6 max-w-[520px] text-[16px] leading-[1.7] text-[#9b979e]">
          Students work inside collaborative innovation environments where ideas move through a
          structured process.
        </p>
      </div>

      <ol
        className="relative mt-14 grid grid-cols-1 gap-8 before:absolute before:top-3 before:bottom-3 before:left-[7px] before:w-px before:bg-[#2c2932] before:content-[''] lg:mt-16 lg:grid-cols-6 lg:gap-3 lg:before:top-[7px] lg:before:right-0 lg:before:bottom-auto lg:before:left-0 lg:before:h-px lg:before:w-auto"
        data-campus-reveal
        onMouseLeave={() => setPaused(false)}
      >
        {steps.map((step, index) => {
          const isActive = active === index
          return (
            <li key={step}>
              <button
                type="button"
                onMouseEnter={() => {
                  setPaused(true)
                  setActive(index)
                }}
                onFocus={() => {
                  setPaused(true)
                  setActive(index)
                }}
                onBlur={() => setPaused(false)}
                className="relative flex w-full items-start gap-5 text-left lg:flex-col lg:items-center lg:gap-0 lg:text-center"
                aria-current={isActive ? 'step' : undefined}
              >
                <span
                  className={`relative z-[1] mt-0.5 size-[15px] shrink-0 rounded-full border bg-[#0b0a0f] transition-colors duration-300 lg:mt-0 ${
                    isActive ? 'border-[#6D35F5] bg-[#6D35F5]' : 'border-[#55515b]'
                  }`}
                />
                <span className="lg:mt-5">
                  <span className="block text-[10px] font-bold tracking-[0.16em] text-[#c4b5fd]">
                    0{index + 1}
                  </span>
                  <span
                    className={`mt-2 block text-[18px] tracking-[-0.02em] transition-colors duration-300 sm:text-[20px] ${
                      isActive ? 'text-white' : 'text-[#8f8a94]'
                    }`}
                  >
                    {step}
                  </span>
                </span>
              </button>
            </li>
          )
        })}
      </ol>

      <p className="mt-10 max-w-[480px] text-[15px] leading-[1.7] text-[#8f8a94]" data-campus-reveal>
        Ideas become prototypes, demonstrations and real-world solutions.
      </p>
    </CampusSection>
  )
}
