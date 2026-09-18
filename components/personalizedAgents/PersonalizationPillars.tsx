import { SectionHeading } from '@/components/personalizedAgents/SectionHeading'
import { personalizationPillars } from '@/components/personalizedAgents/data'

export function PersonalizationPillars() {
  return (
    <section className="relative overflow-hidden bg-[#050507] text-white">
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '72px 72px',
          }}
        />

        {/* Purple glow */}
        <div className="absolute right-[-12%] top-[20%] h-[600px] w-[600px] rounded-full bg-[#8B5CF6]/10 blur-[160px]" />

        {/* Blue glow */}
        <div className="absolute left-[-15%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-[#4F46E5]/[0.06] blur-[150px]" />

        {/* Top radial glow */}
        <div className="absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-[#8B5CF6]/[0.04] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

        {/* Section heading */}
        <div className="max-w-4xl">
          <SectionHeading
            eyebrow="What Makes It Personal"
            headline={
              <>
                Not Just Memory.{' '}
                <span className="bg-gradient-to-r from-white via-[#c4b5fd] to-[#8B5CF6] bg-clip-text text-transparent">
                  A Model of How You Work.
                </span>
              </>
            }
          />
        </div>

        {/* Intro */}
        <div className="mt-10 flex max-w-2xl items-start gap-4">

          <p className="text-[16px] leading-7 text-white/45">
            AGIx learns from context, patterns, preferences and interactions
            to create intelligence that becomes increasingly relevant to you.
          </p>
        </div>

        {/* Pillars */}
        <div className="relative mt-20">
          
          {/* Connecting line */}
          <div
            className="pointer-events-none absolute left-[8%] right-[8%] top-[34px] hidden h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {personalizationPillars.map((pillar, index) => {
              const Icon = pillar.icon

              return (
                <article
                  key={pillar.title}
                  className="
                    group relative overflow-hidden
                    rounded-[24px]
                    border border-white/[0.08]
                    bg-white/[0.025]
                    p-7
                    backdrop-blur-sm
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:border-[#8B5CF6]/30
                    hover:bg-white/[0.04]
                    hover:shadow-[0_20px_70px_rgba(139,92,246,0.08)]
                  "
                >
                  {/* Card glow */}
                  <div
                    className="
                      pointer-events-none absolute
                      -right-20 -top-20
                      h-48 w-48
                      rounded-full
                      bg-[#8B5CF6]/0
                      blur-[80px]
                      transition-all duration-500
                      group-hover:bg-[#8B5CF6]/10
                    "
                    aria-hidden="true"
                  />

                  {/* Top row */}
                  <div className="relative flex items-center justify-between">
                    
                    {/* Number */}
                    <div
                      className="
                        flex h-10 w-10 items-center justify-center
                        rounded-full
                        border border-white/[0.08]
                        bg-white/[0.035]
                        text-[11px]
                        font-medium
                        tracking-[0.18em]
                        text-white/35
                        transition-all duration-300
                        group-hover:border-[#8B5CF6]/30
                        group-hover:text-[#c4b5fd]
                      "
                    >
                      {pillar.number}
                    </div>

                    {/* Icon */}
                    <div
                      className="
                        flex h-11 w-11 items-center justify-center
                        rounded-[13px]
                        border border-white/[0.08]
                        bg-white/[0.035]
                        transition-all duration-300
                        group-hover:border-[#8B5CF6]/30
                        group-hover:bg-[#8B5CF6]/10
                      "
                    >
                      <Icon
                        className="size-[19px] text-[#c4b5fd]"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative mt-14">
                    <h3
                      className="
                        text-[17px]
                        font-medium
                        tracking-[0.12em]
                        text-white
                        transition-colors duration-300
                        group-hover:text-[#ddd6fe]
                      "
                    >
                      {pillar.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        max-w-sm
                        text-[15px]
                        leading-7
                        text-white/40
                        transition-colors duration-300
                        group-hover:text-white/55
                      "
                    >
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bottom indicator */}
                  <div className="relative mt-10 flex items-center gap-3">
                    <div className="h-px w-8 bg-white/[0.12] transition-all duration-500 group-hover:w-14 group-hover:bg-[#8B5CF6]/60" />

                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 transition-colors duration-300 group-hover:text-white/40">
                      Context Layer
                    </span>
                  </div>

                  {/* Bottom border highlight */}
                  <div
                    className="
                      absolute bottom-0 left-1/2 h-px w-0
                      -translate-x-1/2
                      bg-gradient-to-r
                      from-transparent
                      via-[#8B5CF6]
                      to-transparent
                      transition-all duration-500
                      group-hover:w-2/3
                    "
                    aria-hidden="true"
                  />
                </article>
              )
            })}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-20 flex items-start gap-5 border-t border-white/[0.07] pt-8">
          <div className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B5CF6] shadow-[0_0_14px_rgba(139,92,246,0.8)]" />

          <p className="max-w-2xl text-[16px] leading-7 text-white/40">
            Personalization comes from context —{' '}
            <span className="text-white/70">
              not assumptions.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}