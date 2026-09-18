import { Compass, Eye, Sparkles } from 'lucide-react'

const pillars = [
  {
    number: '01',
    title: 'Mission',
    icon: Compass,
    statement: 'Equip people and organizations to thrive responsibly in the Agentic and AGI era.',
  },
  {
    number: '02',
    title: 'Vision',
    icon: Eye,
    statement:
      'A human-centred civilization where intelligence technologies expand capability, wellbeing and inclusive opportunity.',
  },
  {
    number: '03',
    title: 'Purpose',
    icon: Sparkles,
    statement: 'Transform knowledge into human agency, innovation and sustainable value.',
  },
]

export function GuidingCompass() {
  return (
    <section className="relative overflow-hidden bg-[#05060d] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-[-180px] h-[520px] w-[620px] rounded-full bg-[#6D35F5]/10 blur-[150px]" />
        <div className="absolute -right-[180px] top-[30%] h-[480px] w-[480px] rounded-full bg-[#A855F7]/[0.07] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[900px] text-center" data-campus-reveal>
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-violet-500/70" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#A99AFF]">
              Why we exist
            </span>
            <span className="h-px w-12 bg-violet-500/70" />
          </div>

          <h2 className="text-[clamp(2.6rem,5vw,5rem)] font-normal leading-[0.98] tracking-[-0.055em]">
            A compass for
            <br />
            <span className="bg-gradient-to-r from-[#8B6CFF] via-[#A855F7] to-[#C4B5FD] bg-clip-text text-transparent">
              the Agentic era.
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <article
                key={pillar.title}
                data-campus-reveal
                className="group relative overflow-hidden rounded-[28px] border border-white/[0.10] bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#7C5CFF]/50 hover:bg-white/[0.04] sm:p-8"
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#6D35F5]/10 blur-[80px] transition-all duration-500 group-hover:bg-[#6D35F5]/20" />

                <div className="relative flex items-center justify-between">
                  <span className="text-[18px] font-semibold tracking-[0.22em] text-[#9B86FF]/70">
                    {pillar.number}
                  </span>
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-[#8065FF]/30 bg-[#6D35F5]/10 text-[#A994FF] transition-all duration-300 group-hover:border-[#8065FF]/50 group-hover:bg-[#6D35F5]/20">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                </div>

                <h3 className="relative mt-8 text-[32px] font-normal leading-[1.05] tracking-[-0.045em] sm:text-[36px]">
                  {pillar.title}
                </h3>

                <p className="relative mt-5 text-[15px] leading-[1.75] text-white/55 sm:text-[16px]">
                  {pillar.statement}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
