import { Compass, Globe2, Heart, Scale, ShieldCheck, Workflow } from 'lucide-react'

const values = [
  {
    number: '01',
    title: 'Human First',
    icon: Heart,
    description: 'Technology must strengthen dignity, choice, wellbeing and meaningful participation.',
  },
  {
    number: '02',
    title: 'Responsible Intelligence',
    icon: ShieldCheck,
    description: 'Design for consent, privacy, safety, transparency and accountability.',
  },
  {
    number: '03',
    title: 'Curiosity',
    icon: Compass,
    description: 'Explore across disciplines and challenge assumptions.',
  },
  {
    number: '04',
    title: 'Integrity',
    icon: Scale,
    description: 'Communicate capabilities, evidence and limitations honestly.',
  },
  {
    number: '05',
    title: 'Inclusion',
    icon: Globe2,
    description: 'Expand access to knowledge, tools and opportunity.',
  },
  {
    number: '06',
    title: 'Collaborative Progress',
    icon: Workflow,
    description: 'Connect campuses, companies, communities and disciplines.',
  },
]

export function CoreValues() {
  return (
    <section className="relative overflow-hidden bg-[#050711] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[820px] text-center" data-campus-reveal>
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-violet-500/70" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#A99AFF]">
              Core Values
            </span>
            <span className="h-px w-12 bg-violet-500/70" />
          </div>

          <h2 className="text-[clamp(2.5rem,5vw,4.8rem)] font-normal leading-[0.98] tracking-[-0.055em]">
            Principles that keep
            <br />
            intelligence{' '}
            <span className="bg-gradient-to-r from-[#8B6CFF] via-[#A855F7] to-[#C4B5FD] bg-clip-text text-transparent">
              human-centred.
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <article
                key={value.title}
                data-campus-reveal
                className="group relative overflow-hidden rounded-[28px] border border-violet-500/20 bg-[#090c1a]/80 p-7 shadow-[0_0_50px_rgba(100,70,255,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#7C5CFF]/50 hover:shadow-[0_0_50px_rgba(100,70,255,0.14)] sm:p-8"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#6D35F5]/10 blur-[70px] transition-all duration-500 group-hover:bg-[#6D35F5]/20" />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-[#8065FF]/30 bg-[#6D35F5]/10 text-[#A994FF] transition-all duration-300 group-hover:border-[#8065FF]/50 group-hover:bg-[#6D35F5]/20">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                  <span className="text-[13px] font-medium tracking-[0.2em] text-[#9B86FF]/60">
                    {value.number}
                  </span>
                </div>

                <h3 className="relative mt-6 text-[22px] font-medium tracking-[-0.03em] text-white sm:text-[24px]">
                  {value.title}
                </h3>

                <p className="relative mt-3 text-[15px] leading-[1.7] text-white/50">
                  {value.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
