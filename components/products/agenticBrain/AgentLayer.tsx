import Image from 'next/image'
import { CampusSection } from '@/components/campus/campus-ui'

export function AgentLayerSection() {
  return (
    <CampusSection>
      <section
        className="relative overflow-hidden py-6 sm:py-12 lg:py-6"
        data-campus-reveal
      >
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-10">

          {/* Header */}
          <div className="mx-auto max-w-[900px] text-center">

            {/* Eyebrow */}
            <div className="mb-7 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#7c5cff]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#9b83ff]">
                The Agent Layer
              </span>

              <span className="h-px w-10 bg-[#7c5cff]" />
            </div>

            {/* Title */}
            <h2 className="text-[clamp(2.6rem,6vw,5.5rem)] font-normal leading-[0.98] tracking-[-0.065em] text-white mb-3">
              One Brain.
              <br />
              <span className="bg-gradient-to-r from-[#8b6cff] via-[#b06cff] to-[#e35cff] bg-clip-text text-transparent ">
                Many Specialized Agents.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-7 max-w-[720px] text-[15px] leading-[1.75] text-[#9895a5] sm:text-[17px]">
              Different goals require different kinds of intelligence.
              <br className="hidden sm:block" />
              Agentic Brain coordinates specialized AI agents around a shared
              context.
            </p>
          </div>

          {/* Agent Layer Image */}
          <div className="relative mx-auto mt-14 w-full max-w-[1200px] sm:mt-16 lg:mt-20">

            {/* Optional glow behind image */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6246ff]/10 blur-[100px]"
            />

            {/* YOUR IMAGE */}
            <div className="relative">
              <Image
                src="/images/agent-layer.png"
                alt="Agentic Brain coordinating specialized AI agents"
                width={1200}
                height={720}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>


        </div>
      </section>
    </CampusSection>
  )
}