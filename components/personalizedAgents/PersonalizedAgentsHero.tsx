import Link from 'next/link'
import { heroSteps } from '@/components/personalizedAgents/data'

export function PersonalizedAgentsHero() {
  return (
    <section className="relative overflow-hidden bg-[#050711] text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-12%] top-[8%] h-[520px] w-[520px] rounded-full bg-[#8B5CF6]/10 blur-[150px]" />
        <div className="absolute right-[-8%] top-[18%] h-[460px] w-[460px] rounded-full bg-[#4f46e5]/10 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 pb-20 pt-32 sm:px-10 sm:pb-24 sm:pt-36 lg:px-16 lg:pb-32 lg:pt-40">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="max-w-[680px] min-w-0">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-[#8B5CF6] to-transparent" aria-hidden="true" />
              <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#a9a3ff]">
                Personalized Agents
              </span>
            </div>

            <h1 className="text-[clamp(2.6rem,6vw,5.4rem)] font-medium leading-[0.96] tracking-[-0.055em]">
              From AI That Responds to AI That{' '}
              <span className="bg-gradient-to-r from-white via-[#c4b5fd] to-[#8B5CF6] bg-clip-text text-transparent">
                Understands You.
              </span>
            </h1>

            <p className="mt-7 max-w-[540px] text-[16px] leading-[1.75] text-white/55 sm:text-[17px]">
              Personalized Agents progressively learn a person&apos;s goals, context,
              preferences, working style, permissions and approved data so they can
              move from answering questions to helping achieve meaningful outcomes.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#6d4aff] to-[#4f7cff] px-7 text-sm font-medium text-white shadow-[0_0_35px_rgba(109,74,255,0.3)] transition hover:shadow-[0_0_45px_rgba(109,74,255,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6] motion-reduce:transition-none"
              >
                Build Your Personalized Agent
                <span className="text-lg transition-transform group-hover:translate-x-1 motion-reduce:transform-none" aria-hidden="true">
                  →
                </span>
              </Link>

              <a
                href="#evolution"
                className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full border border-white/20 px-7 text-sm font-medium text-white/85 transition hover:border-[#8b6cff] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6]"
              >
                Explore the Evolution
              </a>
            </div>
          </div>

          <div className="min-w-0">
            <HeroEvolutionVisual />
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroEvolutionVisual() {
  const intensities = [22, 38, 54, 72, 100]

  return (
    <div className="relative">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/16 blur-[110px]" aria-hidden="true" />

      <figure className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] px-5 py-7 sm:px-8 sm:py-10">
        <figcaption className="mb-7 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/40">
            Agent evolution
          </span>
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/30">
            Response → Understanding
          </span>
        </figcaption>

        <div className="mb-8 flex flex-wrap items-center gap-x-2 gap-y-2 sm:mb-10" aria-hidden="true">
          {heroSteps.map((step, index) => (
            <div key={step} className="flex items-center gap-2">
              <span
                className={
                  index === heroSteps.length - 1
                    ? 'text-[10px] font-medium tracking-[0.14em] text-[#c4b5fd] sm:text-[11px] sm:tracking-[0.16em]'
                    : 'text-[10px] tracking-[0.14em] text-white/45 sm:text-[11px] sm:tracking-[0.16em]'
                }
              >
                {step}
              </span>
              {index < heroSteps.length - 1 ? (
                <span className="text-white/25">→</span>
              ) : null}
            </div>
          ))}
        </div>

        <ol className="space-y-4 sm:space-y-5">
          {heroSteps.map((step, index) => {
            const last = index === heroSteps.length - 1
            return (
              <li key={step} className="pa-hero-step grid grid-cols-[6.4rem_1fr] items-center gap-3 sm:grid-cols-[9rem_1fr] sm:gap-4">
                <span
                  className={
                    last
                      ? 'text-[10px] font-medium tracking-[0.14em] text-[#c4b5fd] sm:text-[11px] sm:tracking-[0.18em]'
                      : 'text-[10px] tracking-[0.14em] text-white/40 sm:text-[11px] sm:tracking-[0.18em]'
                  }
                >
                  {step}
                </span>
                <div className="relative h-1 w-full rounded-full bg-white/[0.08]">
                  <span
                    className={
                      last
                        ? 'absolute inset-y-0 left-0 rounded-full bg-[#8B5CF6] shadow-[0_0_18px_rgba(139,92,246,0.55)]'
                        : 'absolute inset-y-0 left-0 rounded-full bg-white/35'
                    }
                    style={{ width: `${intensities[index]}%` }}
                  />
                  <span
                    className={
                      last
                        ? 'absolute top-1/2 size-2.5 -translate-y-1/2 rounded-full bg-[#8B5CF6] shadow-[0_0_12px_rgba(139,92,246,0.8)]'
                        : 'absolute top-1/2 size-2 -translate-y-1/2 rounded-full bg-white/55'
                    }
                    style={{ left: `calc(${intensities[index]}% - 5px)` }}
                  />
                </div>
              </li>
            )
          })}
        </ol>
      </figure>
    </div>
  )
}
