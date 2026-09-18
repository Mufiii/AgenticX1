'use client'

import type { CSSProperties, MouseEvent } from 'react'
import { contactPrimaryClass } from '@/components/contact/contact-styles'
import { systemStatement } from '@/components/use-cases/data'

const revealClass =
  'opacity-0 motion-reduce:opacity-100 motion-reduce:[animation:none]'

function revealStyle(delay: string): CSSProperties {
  return {
    animation: 'hero-fade-up 0.7s ease forwards',
    animationDelay: delay,
  }
}

function scrollToLibrary(event: MouseEvent<HTMLAnchorElement>) {
  const target = document.getElementById('use-case-library')
  if (!target) return
  event.preventDefault()
  target.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    block: 'start',
  })
}

export function UseCasesHero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-[-220px] h-[560px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18)_0%,rgba(99,102,241,0.08)_38%,transparent_70%)] blur-2xl" />
        <div className="absolute right-[-12%] top-[28%] h-[380px] w-[380px] rounded-full bg-indigo-600/10 blur-[140px]" />
        <div className="absolute left-[-10%] bottom-[-18%] h-[320px] w-[320px] rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-96px)] max-w-[1400px] flex-col justify-center px-6 pb-20 pt-32 sm:px-10 sm:pb-24 lg:px-16 lg:pb-28 lg:pt-36">
        <div className="max-w-[920px] text-left md:mx-auto md:text-center">
          <div className={`mb-7 flex items-center gap-4 md:justify-center ${revealClass}`} style={revealStyle('0ms')}>
            <span className="h-px w-10 bg-[#7c5cff]/70" aria-hidden="true" />
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#a9a3ff]">Use Cases</p>
            <span className="hidden h-px w-10 bg-[#7c5cff]/70 md:block" aria-hidden="true" />
          </div>

          <h1
            className={`text-[clamp(2.6rem,6.4vw,5.4rem)] font-medium leading-[0.96] tracking-[-0.05em] ${revealClass}`}
            style={revealStyle('90ms')}
          >
            See Agentic Systems
            <span className="mt-1 block bg-gradient-to-r from-white via-[#c4b5fd] to-[#8B5CF6] bg-clip-text text-transparent">
              Create Practical Value.
            </span>
          </h1>

          <p
            className={`mt-7 max-w-[640px] text-[16px] leading-[1.7] text-white/55 sm:text-[18px] md:mx-auto ${revealClass}`}
            style={revealStyle('180ms')}
          >
            Explore real-world examples of how humans and AI agents work together across learning, work, business,
            research and wellbeing.
          </p>

          <div className={`mt-9 md:flex md:justify-center ${revealClass}`} style={revealStyle('270ms')}>
            <a href="#use-case-library" className={contactPrimaryClass} onClick={scrollToLibrary}>
              Explore Use Cases
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <p
            className={`mt-10 flex max-w-[720px] flex-wrap items-center gap-x-1.5 gap-y-1.5 text-[10px] font-medium uppercase leading-6 tracking-[0.16em] text-white/35 sm:gap-x-2.5 sm:text-[11px] sm:tracking-[0.18em] md:mx-auto md:justify-center ${revealClass}`}
            style={revealStyle('360ms')}
          >
            {systemStatement.map((item, index) => (
              <span key={item} className="inline-flex items-center">
                {item}
                {index < systemStatement.length - 1 ? (
                  <span className="ml-1.5 text-[#8B5CF6]/80 sm:ml-2.5" aria-hidden="true">
                    ×
                  </span>
                ) : null}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}
