'use client'

import { useEffect, useRef } from 'react'
import { SectionHeading } from '@/components/personalizedAgents/SectionHeading'
import { EcosystemFlow } from '@/components/polymathground/EcosystemFlow'
import { journeySteps } from '@/components/polymathground/data'

export function PolymathJourney() {
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
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="polymath-journey"
      className="pg-journey relative scroll-mt-28 overflow-hidden bg-white text-[#101936]"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-8%] bottom-[-18%] h-[400px] w-[500px] rounded-full bg-[#6D35F5]/8 blur-[120px]" />
        <div className="absolute right-[-8%] top-[-10%] h-[360px] w-[420px] rounded-full bg-[#4D9FFF]/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div data-campus-reveal>
          <SectionHeading
            align="center"
            tone="light"
            eyebrow="The Polymath Journey"
            headline={
              <>
                Build Your{' '}
                <span className="bg-gradient-to-r from-[#1677ff] via-[#635BFF] to-[#c23de8] bg-clip-text text-transparent">
                  Multidisciplinary Edge.
                </span>
              </>
            }
          />
        </div>

        <div className="relative mt-16 lg:mt-20">
          <div
            className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-gradient-to-r from-[#4D9FFF]/30 via-[#8B5CF6]/40 to-[#A855F7]/30 lg:block"
            aria-hidden="true"
          />

          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-3">
            {journeySteps.map((step, index) => (
              <li key={step} className="pg-journey-stage relative min-w-0 text-center">
                <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#D9E2FF] bg-white text-[12px] tracking-[0.18em] text-[#635BFF] shadow-[0_8px_30px_rgba(80,90,180,0.08)]">
                  0{index + 1}
                </div>
                <h3 className="mt-5 text-[13px] font-semibold uppercase tracking-[0.14em] sm:text-[14px]">
                  {step}
                </h3>
                {index < journeySteps.length - 1 ? (
                  <span className="mt-4 block text-[#635BFF] lg:hidden" aria-hidden="true">
                    ↓
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-20 lg:mt-28" data-campus-reveal>
          <EcosystemFlow />
        </div>
      </div>
    </section>
  )
}
