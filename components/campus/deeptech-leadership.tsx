import { CampusSection } from '@/components/campus/campus-ui'

const technologies = [
  {
    title: 'Artificial Intelligence',
    short: 'AI',
    description: 'Build intelligent systems that learn, reason and adapt.',
  },
  {
    title: 'Agentic Systems',
    short: 'Agents',
    description: 'Design AI systems that can plan, act and collaborate.',
  },
  {
    title: 'Robotics',
    short: 'Robotics',
    description: 'Connect intelligence with machines that act in the physical world.',
  },
  {
    title: 'Digital Twins',
    short: 'Digital Twins',
    description: 'Model real-world systems through intelligent digital counterparts.',
  },
  {
    title: 'Internet of Things',
    short: 'IoT',
    description: 'Connect devices, environments and intelligent systems.',
  },
  {
    title: 'Blockchain',
    short: 'Blockchain',
    description: 'Explore decentralized systems, trust and programmable infrastructure.',
  },
  {
    title: 'AR / VR / MR',
    short: 'Spatial',
    description: 'Create immersive interfaces and spatial computing experiences.',
  },
  {
    title: 'Semiconductors',
    short: 'Chips',
    description: 'Understand the hardware foundations powering intelligent systems.',
  },
  {
    title: 'Photonics',
    short: 'Photonics',
    description: 'Explore computing and communication at the speed of light.',
  },
] as const

export function DeepTechLeadership() {
  return (
    <CampusSection>
      <section className="relative overflow-hidden">
        {/* Subtle background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#6d4aff]/[0.06] blur-[120px]"
        />

        {/* ───────────────────────── HEADER ───────────────────────── */}
        <div
          className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20"
          data-campus-reveal
        >
          {/* Left */}
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#7c5cff]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#a78bfa]">
                DeepTech Leadership
              </span>
            </div>

            <h2 className="max-w-[760px] text-[clamp(2.75rem,5.8vw,5.5rem)] font-normal leading-[0.98] tracking-[-0.035em] text-[#f7f6f3]">
              Lead in the
              <br />
              technologies
              <br />
              <span className="bg-gradient-to-r from-[#b8a5ff] via-[#8b6cff] to-[#6845ff] bg-clip-text text-transparent">
                shaping tomorrow.
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-[470px] lg:pb-2">
            <p className="text-[16px] leading-[1.7] text-[#a39da8] sm:text-[17px]">
              Build strong foundations across the technologies defining the
              next generation of intelligent systems.
            </p>

          </div>
        </div>

        {/* ───────────────────────── DIVIDER ───────────────────────── */}
        <div
          className="relative mt-16 h-px w-full bg-gradient-to-r from-[#7c5cff]/60 via-[#302c38] to-transparent lg:mt-20"
          data-campus-reveal
        />

        {/* ───────────────────────── TECHNOLOGIES ───────────────────────── */}
        <div
          className="relative mt-8 grid border-l border-[#2b2831] sm:grid-cols-2 lg:grid-cols-3"
          data-campus-reveal
        >
          {technologies.map((tech, index) => (
            <article
              key={tech.title}
              className="
                group relative
                border-b border-r border-[#2b2831]
                px-6 py-7
                transition-all duration-300
                hover:bg-[#17141d]
                sm:px-7 sm:py-8
                lg:min-h-[220px]
                lg:px-8 lg:py-9
              "
            >
              {/* Hover accent */}
              <div
                className="
                  absolute left-0 top-0 h-px w-0
                  bg-gradient-to-r from-[#8b6cff] to-transparent
                  transition-all duration-500
                  group-hover:w-full
                "
              />

              {/* Number + short label */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[14px] font-medium tracking-[0.18em] text-[#7658ff]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span
                  className="
                    text-[10px] uppercase tracking-[0.16em]
                    text-[#5f5965]
                    transition-colors duration-300
                    group-hover:text-[#a78bfa]
                  "
                >
                  {tech.short}
                </span>
              </div>

              {/* Title */}
              <h3
                className="
                  mt-8 mb-2
                  max-w-[280px]
                  text-[24px]
                  font-medium
                  leading-[1.15]
                  tracking-[-0.025em]
                  text-[#f3f1f5]
                  transition-colors duration-300
                  group-hover:text-[#b8a5ff]
                  sm:text-[26px]
                "
              >
                {tech.title}
              </h3>

              {/* Technology description */}
              <p
                className="
                  mt-4
                  max-w-[320px]
                  text-[16px]
                  font-normal
                  leading-[1.65]
                  tracking-[-0.01em]
                  text-[#85808a]
                  transition-colors duration-300
                  group-hover:text-[#aaa5af]
                "
              >
                {tech.description}
              </p>

              {/* Bottom arrow */}
              <span
                className="
                  absolute bottom-7 right-7
                  translate-x-1
                  text-[16px]
                  text-[#4b4650]
                  opacity-0
                  transition-all duration-300
                  group-hover:translate-x-0
                  group-hover:text-[#9277ff]
                  group-hover:opacity-100
                "
              >
                ↗
              </span>
            </article>
          ))}
        </div>


      </section>
    </CampusSection>
  )
}