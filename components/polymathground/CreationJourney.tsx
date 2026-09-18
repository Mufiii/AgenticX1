'use client'

import { useEffect, useRef } from 'react'
import { SectionHeading } from '@/components/personalizedAgents/SectionHeading'
import { creationStages } from '@/components/polymathground/data'

export function CreationJourney() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('pg-reduced')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        el.classList.add('is-visible')
        observer.disconnect()
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="creation"
      className="pg-journey relative scroll-mt-28 overflow-hidden bg-[#050711] text-white"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#635BFF]/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div data-campus-reveal>
          <SectionHeading
            align="center"
            eyebrow="From Knowledge to Creation"
            headline={
              <>
                Turn Knowledge Into{' '}
                <span className="bg-gradient-to-r from-[#8CCBFF] via-[#8B6CFF] to-[#D66BFF] bg-clip-text text-transparent">
                  Something Real.
                </span>
              </>
            }
          />
        </div>

        <ol className="relative mx-auto mt-16 max-w-3xl lg:mt-20">
          {creationStages.map((stage, index) => {
            const last = index === creationStages.length - 1
            return (
              <li key={stage.title} className="pg-journey-stage relative text-center">
                <span className="text-[11px] tracking-[0.28em] text-[#a9a3ff]">
                  0{index + 1}
                </span>
                <h3
                  className={`mt-2 text-[clamp(2.2rem,7vw,5.2rem)] font-medium leading-[0.92] tracking-[-0.055em] ${
                    last ? 'bg-gradient-to-r from-white via-[#c4b5fd] to-[#635BFF] bg-clip-text text-transparent' : ''
                  }`}
                >
                  {stage.title}
                </h3>
                <p className="mt-3 text-[15px] text-white/45">{stage.description}</p>
                {!last ? (
                  <span className="my-6 block text-lg text-[#8B5CF6]" aria-hidden="true">
                    ↓
                  </span>
                ) : null}
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
