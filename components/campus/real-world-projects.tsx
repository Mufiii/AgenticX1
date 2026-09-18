import {
  Cpu,
  Bot,
  Cog,
  Boxes,
  Radio,
  HeartPulse,
  Briefcase,
  Atom,
} from 'lucide-react'

const projects = [
  {
    title: 'AI-powered applications',
    description: 'Build intelligent solutions that solve real problems.',
    icon: Cpu,
  },
  {
    title: 'AI Agents',
    description: 'Create autonomous agents for real-world use cases.',
    icon: Bot,
  },
  {
    title: 'Robotics Systems',
    description: 'Design and prototype intelligent robotic systems.',
    icon: Cog,
  },
  {
    title: 'Digital Twins',
    description: 'Create virtual models for smarter simulation and decision making.',
    icon: Boxes,
  },
  {
    title: 'Smart IoT Solutions',
    description: 'Build connected devices for a smarter world.',
    icon: Radio,
  },
  {
    title: 'Wellness Technologies',
    description: 'Create solutions for better health and wellbeing.',
    icon: HeartPulse,
  },
  {
    title: 'Agentic Business Solutions',
    description: 'Solve business challenges with agentic AI systems.',
    icon: Briefcase,
  },
  {
    title: 'DeepTech Prototypes',
    description: 'Explore and build cutting-edge technologies for the future.',
    icon: Atom,
  },
]

export function RealWorldProjects() {
  return (
    <section className="relative overflow-hidden bg-[#0b0a0f] text-white">
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#6D35F5]/[0.06] blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[450px] w-[450px] rounded-full bg-[#7C3AED]/[0.05] blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 md:py-28 lg:px-8">

        {/* Header */}
        <div
          className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-24"
          data-campus-reveal
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-[#6D35F5]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#9B7BFF]">
                Student Projects
              </span>
            </div>

            <h2 className="max-w-[700px] text-[clamp(3rem,6vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.035em]">
              Build for the{' '}
              <span className="text-[#8B5CF6]">
                Real World
              </span>
            </h2>
          </div>

          <div className="max-w-[470px] lg:pb-1">
            <p className="text-[16px] leading-[1.7] text-white/65 sm:text-[17px]">
              Students solve challenges inspired by industry,
              communities, healthcare, education and business.
            </p>

            <p className="mt-4 text-[16px] leading-[1.7] text-white/65 sm:text-[17px]">
              Every project helps students build a practical
              innovation portfolio.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-12 bg-[#6D35F5]" />

              <span className="text-[11px] uppercase tracking-[0.28em] text-white/35">
                Ideas to Impact
              </span>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <ul
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-5"
          data-campus-reveal
        >
          {projects.map((project, index) => {
            const Icon = project.icon

            return (
              <li key={project.title}>
                <article
                  className="
                    group relative flex min-h-[235px] flex-col
                    overflow-hidden rounded-[22px]
                    border border-white/[0.12]
                    bg-white/[0.025]
                    px-7 py-7
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:border-[#7C5CFF]/50
                    hover:bg-white/[0.045]
                  "
                >
                  {/* Card number */}
                  <div className="flex items-start justify-between">
                    <div
                      className="
                        flex size-[68px] items-center justify-center
                        rounded-full
                        border border-[#7C5CFF]/20
                        bg-[#7C5CFF]/[0.10]
                        text-[#9B7BFF]
                        transition-all duration-500
                        group-hover:border-[#8B5CF6]/40
                        group-hover:bg-[#7C5CFF]/[0.16]
                      "
                    >
                      <Icon
                        size={30}
                        strokeWidth={1.5}
                      />
                    </div>

                    <span className="text-[11px] font-medium tracking-[0.2em] text-[#9B7BFF]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-auto">
                    <h3
                      className="
                        max-w-[240px]
                        text-[22px]
                        font-medium
                        leading-[1.15]
                        tracking-[-0.02em]
                        text-white
                        sm:text-[23px]
                      "
                    >
                      {project.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        max-w-[270px]
                        text-[14px]
                        leading-[1.65]
                        text-white/45
                      "
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute bottom-0 left-1/2
                      h-px w-0
                      -translate-x-1/2
                      bg-[#8B5CF6]
                      shadow-[0_0_20px_5px_rgba(124,92,246,0.45)]
                      transition-all duration-500
                      group-hover:w-[70%]
                    "
                  />
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}