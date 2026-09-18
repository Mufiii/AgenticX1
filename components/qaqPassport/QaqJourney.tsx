'use client'

import { useEffect, useRef } from 'react'
import { SectionHeading } from '@/components/personalizedAgents/SectionHeading'
import { identityFormula, journeyStages } from '@/components/qaqPassport/data'

export function QaqJourney() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('qaq-reduced')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        el.classList.add('is-visible')
        observer.disconnect()
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="journey"
      className="qaq-journey relative scroll-mt-28 overflow-hidden bg-[#050711] text-white"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div data-campus-reveal>
          <SectionHeading
            align="center"
            eyebrow="The QaQ Journey"
            headline={
              <>
                Your Capability{' '}
                <span className="bg-gradient-to-r from-[#8CCBFF] via-[#8B6CFF] to-[#D66BFF] bg-clip-text text-transparent">
                  Compounds Over Time.
                </span>
              </>
            }
          />
        </div>

        <ol className="relative mx-auto mt-16 max-w-3xl">
          {journeyStages.map((stage, index) => (
            <li key={stage.label} className="qaq-journey-stage relative py-3 text-center sm:py-4">
              <span className="text-[11px] tracking-[0.28em] text-[#a9a3ff]">
                {stage.number}
              </span>
              <h3 className="mt-2 text-[clamp(2.4rem,7vw,5.6rem)] font-medium leading-[0.92] tracking-[-0.055em]">
                {stage.label}
              </h3>
              {index < journeyStages.length - 1 ? (
                <span className="mt-5 block text-lg text-[#8B5CF6]" aria-hidden="true">
                  ↓
                </span>
              ) : null}
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-16 max-w-xl text-center text-[16px] leading-7 text-white/50 sm:text-[17px]">
          Every project, skill and verified achievement becomes part of a learning
          identity that grows with you.
        </p>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/30">
            Capability identity
          </p>
          <p className="mt-4 text-[13px] leading-7 tracking-[0.06em] text-white/55 sm:text-[14px]">
            {identityFormula.map((part, index) => (
              <span key={part}>
                {part}
                {index < identityFormula.length - 1 ? (
                  <span className="mx-2 text-[#8B5CF6]" aria-hidden="true">
                    +
                  </span>
                ) : null}
              </span>
            ))}
            <span className="mt-2 block text-white/80">
              → Your capability identity
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
