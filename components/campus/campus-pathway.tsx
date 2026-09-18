import {
  BookOpen,
  Hammer,
  Lightbulb,
  FlaskConical,
  Rocket,
} from 'lucide-react'

const stages = [
  {
    n: '01',
    title: 'Learn',
    copy: 'Build strong foundations in AI and emerging technologies.',
    icon: BookOpen,
  },
  {
    n: '02',
    title: 'Build',
    copy: 'Turn knowledge into practical projects and working systems.',
    icon: Hammer,
  },
  {
    n: '03',
    title: 'Innovate',
    copy: 'Explore new ideas across technology and disciplines.',
    icon: Lightbulb,
  },
  {
    n: '04',
    title: 'Prototype',
    copy: 'Transform ideas into prototypes and real-world demonstrations.',
    icon: FlaskConical,
  },
  {
    n: '05',
    title: 'Launch',
    copy: 'Move promising projects toward products, research or startups.',
    icon: Rocket,
  },
] as const

export function CampusPathway() {
  return (
    <section
      id="pathway"
      className="relative overflow-hidden bg-[#0b0a0f] text-white"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#6D35F5]/[0.06] blur-[140px]" />

        <div className="absolute left-1/2 top-[45%] h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#635BFF]/[0.035] blur-[120px]" />

        {/* Very subtle orbit */}
        <div className="absolute left-1/2 top-[300px] hidden h-[650px] w-[1100px] -translate-x-1/2 rounded-[50%] border border-white/[0.035] lg:block" />

        <div className="absolute left-1/2 top-[370px] hidden h-[500px] w-[850px] -translate-x-1/2 rounded-[50%] border border-[#6D35F5]/[0.08] lg:block" />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 md:py-28 lg:px-8 lg:py-[130px]">

        {/* ───────── Header ───────── */}
        <div
          className="mx-auto max-w-[720px] text-center"
          data-campus-reveal
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#7C5CFF]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#9B7BFF]">
              The Pathway
            </span>

            <span className="h-px w-8 bg-[#7C5CFF]" />
          </div>

          <h2 className="text-[clamp(2.7rem,5.5vw,5rem)] font-medium leading-[0.98] tracking-[-0.035em]">
            From Learning to{' '}
            <span className="bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#6D35F5] bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[540px] text-[15px] leading-[1.7] text-white/45 sm:text-[16px]">
            Our campus pathway connects learning, experimentation and
            entrepreneurship into one continuous journey.
          </p>
        </div>

        {/* ───────── Journey ───────── */}
        <div
          className="relative mt-16 lg:mt-24"
          data-campus-reveal
        >
          {/* Connecting line */}
          {/* <div className="pointer-events-none absolute left-[10%] right-[10%] top-[48px] hidden h-px bg-gradient-to-r from-transparent via-[#7C5CFF]/40 to-transparent lg:block" /> */}

          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
            {stages.map((stage, index) => {
              const Icon = stage.icon
              const isLast = index === stages.length - 1

              return (
                <li
                  key={stage.n}
                  className="relative"
                >
                  <article
                    className={`
                      group relative flex min-h-[300px] flex-col
                      overflow-hidden rounded-[22px]
                      border
                      px-6 py-7
                      transition-all duration-500
                      lg:min-h-[320px]
                      ${
                        isLast
                          ? `
                            border-[#7C5CFF]/35
                            bg-[#7C5CFF]/[0.055]
                            shadow-[0_0_60px_rgba(109,53,245,0.08)]
                          `
                          : `
                            border-white/[0.10]
                            bg-white/[0.018]
                            hover:border-[#7C5CFF]/30
                            hover:bg-white/[0.035]
                          `
                      }
                    `}
                  >
                    {/* Number */}
                    <div className="flex items-start justify-between">
    
                    </div>

                    {/* Icon */}
                    <div
                      className={`
                        mt-8 flex size-12 items-center justify-center
                        rounded-xl border
                        transition-all duration-500
                        ${
                          isLast
                            ? 'border-[#8B5CF6]/30 bg-[#7C5CFF]/15 text-[#A78BFA] shadow-[0_0_25px_rgba(124,92,246,0.18)]'
                            : 'border-white/[0.08] bg-white/[0.035] text-[#A78BFA] group-hover:border-[#8B5CF6]/30 group-hover:bg-[#7C5CFF]/10'
                        }
                      `}
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Content */}
                    <div className="mt-auto">
                      <h3 className="text-[24px] font-medium leading-[1.2] tracking-[-0.02em] text-white">
                        {stage.title}
                      </h3>

                      <p className="mt-3 max-w-[230px] text-[14px] leading-[1.65] text-white/40">
                        {stage.copy}
                      </p>
                    </div>

                    {/* Bottom accent */}
                    <div
                      className={`
                        absolute bottom-0 left-0 h-px
                        bg-gradient-to-r
                        from-[#4F46E5]
                        via-[#8B5CF6]
                        to-transparent
                        transition-all duration-500
                        ${
                          isLast
                            ? 'w-full opacity-80'
                            : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-70'
                        }
                      `}
                    />
                  </article>

                  {/* Journey node */}
                  {!isLast && (
                    <div className="pointer-events-none absolute -right-[7px] top-[43px] z-10 hidden size-[14px] rounded-full border border-[#8B5CF6]/60 bg-[#0b0a0f] lg:block">
                      <div className="absolute inset-[3px] rounded-full bg-[#8B5CF6]" />
                    </div>
                  )}
                </li>
              )
            })}
          </ol>
        </div>


      </div>
    </section>
  )
}