import Link from 'next/link'
import { BriefcaseBusiness, GraduationCap, Users } from 'lucide-react'

const arenas = [
  {
    label: 'Campus',
    href: '/solutions/campus',
    caption: 'Students',
    icon: GraduationCap,
  },
  {
    label: 'Corporate',
    href: '/solutions/corporate',
    caption: 'Employees',
    icon: BriefcaseBusiness,
  },
  {
    label: 'Community',
    href: '/solutions/community',
    caption: 'Entrepreneurs',
    icon: Users,
  },
]

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#050711] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-220px] h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,91,255,0.16)_0%,rgba(99,91,255,0.05)_35%,transparent_70%)] blur-2xl" />
        <div className="absolute bottom-[-280px] left-[10%] h-[520px] w-[520px] rounded-full bg-[#7C3AED]/10 blur-[160px]" />
        <div className="absolute right-[-8%] top-[18%] h-[420px] w-[420px] rounded-full bg-[#5B5BFF]/10 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 pb-20 pt-32 sm:px-10 lg:px-16 lg:pb-28 lg:pt-40">
        <div className="max-w-[980px]" data-campus-reveal>
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-12 bg-gradient-to-r from-[#8B6CFF] to-[#A855F7]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#A99AFF]">
              Organization · About
            </span>
          </div>

          <h1 className="text-[clamp(3.1rem,6.4vw,6.2rem)] font-medium leading-[0.92] tracking-[-0.055em]">
            AgenticX
            <br />
            <span className="bg-gradient-to-r from-[#B8A8FF] via-[#8B7CFF] to-[#C05CFF] bg-clip-text text-transparent">
              Global Business
              <br />
              Transformation
            </span>
          </h1>

          <p className="mt-8 max-w-[680px] text-[17px] leading-[1.75] text-white/60 sm:text-[18px]">
            A DeepTech venture advancing responsible human–AI collaboration across
            Campus, Corporate and Community.
          </p>

          <blockquote className="mt-10 max-w-[720px] border-l border-[#8065FF]/50 pl-6">
            <p className="text-[18px] leading-[1.7] text-white/85 sm:text-[20px]">
              We believe the next civilization should be shaped not only by more capable
              machines, but by{' '}
              <span className="text-white">wiser, healthier and more capable people.</span>
            </p>
          </blockquote>
        </div>

        <div className="relative mt-14 lg:mt-16" data-campus-reveal>
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[90px]" />

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {arenas.map((arena) => {
              const Icon = arena.icon
              return (
                <Link
                  key={arena.label}
                  href={arena.href}
                  className="group flex items-center justify-between rounded-[24px] border border-white/[0.10] bg-[#090c1a]/80 px-5 py-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7C5CFF]/55 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-[#8065FF]/30 bg-[#6D35F5]/10 text-[#A994FF] transition-all duration-300 group-hover:border-[#8065FF]/50 group-hover:bg-[#6D35F5]/20">
                      <Icon size={22} strokeWidth={1.6} />
                    </div>
                    <div>
                      <p className="text-[18px] font-medium tracking-[-0.02em] text-white">
                        {arena.label}
                      </p>
                      <p className="mt-0.5 text-[13px] text-white/45">{arena.caption}</p>
                    </div>
                  </div>
                  <span className="text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#B8A8FF]">
                    →
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
