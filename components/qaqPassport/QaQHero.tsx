import Link from 'next/link'
import { passportSkills, passportStats } from '@/components/qaqPassport/data'

export function QaQHero() {
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

      <div className="relative mx-auto max-w-[1400px] px-6 pb-20 pt-32 sm:px-10 sm:pb-24 sm:pt-36 lg:px-16 lg:pb-32 lg:pt-40">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 xl:gap-20">
          <div className="max-w-[680px]">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-[#8B5CF6] to-transparent" aria-hidden="true" />
              <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#a9a3ff]">
                QaQ Passport
              </span>
            </div>

            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.28em] text-white/40">
              Qualification-as-a-Quantum
            </p>

            <h1 className="text-[clamp(2.5rem,6vw,5.2rem)] font-medium leading-[0.96] tracking-[-0.055em]">
              Don&apos;t Just Show What You Studied.
              <span className="mt-2 block bg-gradient-to-r from-white via-[#c4b5fd] to-[#8B5CF6] bg-clip-text text-transparent">
                Show What You Can Do.
              </span>
            </h1>

            <p className="mt-7 max-w-[520px] text-[16px] leading-[1.75] text-white/55 sm:text-[17px]">
              A learner-controlled digital record of skills, competencies, projects
              and demonstrated capabilities — built to evolve with you.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#6d4aff] to-[#4f7cff] px-7 text-sm font-medium text-white shadow-[0_0_35px_rgba(109,74,255,0.3)] transition hover:shadow-[0_0_45px_rgba(109,74,255,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6] motion-reduce:transition-none sm:w-auto"
              >
                Build Your QaQ Passport
                <span className="text-lg transition-transform group-hover:translate-x-1 motion-reduce:transform-none" aria-hidden="true">
                  →
                </span>
              </Link>

              <a
                href="#qaq-model"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-white/20 px-7 text-sm font-medium text-white/85 transition hover:border-[#8b6cff] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6] sm:w-auto"
              >
                Explore the Model
              </a>
            </div>
          </div>

          <PassportVisual />
        </div>
      </div>
    </section>
  )
}

function PassportVisual() {
  return (
    <div className="relative min-w-0 w-full" data-campus-reveal>
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/16 blur-[110px]"
        aria-hidden="true"
      />

      <article
        className="qaq-passport-card relative overflow-hidden rounded-[28px] border border-white/[0.1] bg-[#0c0d18]/90 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
        aria-label="Simplified QaQ Passport profile"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent" aria-hidden="true" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />

        <header className="relative flex items-start justify-between gap-4 px-6 pb-5 pt-6 sm:px-8">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#a9a3ff]">
              QaQ Passport
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/35">
              Qualification-as-a-Quantum
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/35 bg-[#8B5CF6]/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#c4b5fd]">
            <span className="size-1.5 rounded-full bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6]" aria-hidden="true" />
            Record
          </span>
        </header>

        <div className="relative mx-6 h-px bg-white/[0.08] sm:mx-8" aria-hidden="true" />

        <div className="relative flex items-center gap-4 px-6 py-6 sm:px-8">
          <div
            className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.03]"
            aria-hidden="true"
          >
            <span className="size-6 rotate-45 border border-[#8B5CF6]/80" />
          </div>
          <div>
            <p className="text-lg font-medium tracking-[-0.03em]">Learner Profile</p>
            <p className="mt-1 text-[12px] uppercase tracking-[0.18em] text-white/35">
              Capability Identity
            </p>
          </div>
        </div>

        <div className="relative px-6 pb-6 sm:px-8">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-white/40">
            Skills
          </p>
          <ul className="flex flex-wrap gap-2">
            {passportSkills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[12px] text-white/80"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <dl className="relative grid grid-cols-3 border-t border-white/[0.08]">
          {passportStats.map((stat) => (
            <div
              key={stat.label}
              className="border-white/[0.08] px-2 py-4 text-center first:pl-4 last:pr-4 [&:not(:last-child)]:border-r sm:px-6 sm:py-6 sm:first:pl-6 sm:last:pr-6"
            >
              <dt className="text-[8px] font-medium uppercase tracking-[0.12em] text-white/35 sm:text-[9px] sm:tracking-[0.2em]">
                {stat.label}
              </dt>
              <dd className="mt-2 text-[24px] font-medium leading-none tracking-[-0.04em] text-white sm:text-[32px]">
                {stat.value}
              </dd>
              <p className="mt-2 text-[8px] uppercase tracking-[0.08em] text-[#c4b5fd] sm:text-[10px] sm:tracking-[0.16em]">
                {stat.detail}
              </p>
            </div>
          ))}
        </dl>
      </article>
    </div>
  )
}
