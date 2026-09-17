import { CampusSection } from '@/components/campus/campus-ui'

const projects = [
  'AI-powered applications',
  'AI Agents',
  'Robotics Systems',
  'Digital Twins',
  'Smart IoT Solutions',
  'Wellness Technologies',
  'Agentic Business Solutions',
  'DeepTech Prototypes',
] as const

export function RealWorldProjects() {
  return (
    <CampusSection tone="light">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16" data-campus-reveal>
        <div>
          <h2 className="max-w-[560px] text-[clamp(2.25rem,4.8vw,4.375rem)] font-normal leading-[1.05] tracking-[-0.06em]">
            Build for the <em className="not-italic text-[#6354c9]">Real World</em>
          </h2>
          <p className="mt-6 max-w-[460px] text-[16px] leading-[1.7] text-[#6d6b76]">
            Students solve challenges inspired by industry, communities, healthcare, education and
            business.
          </p>
        </div>
        <p className="max-w-[380px] text-[15px] leading-[1.7] text-[#8a8792] lg:text-right">
          Every project helps students build a practical innovation portfolio.
        </p>
      </div>

      <ul className="mt-14 grid grid-cols-1 sm:grid-cols-2" data-campus-reveal>
        {projects.map((project, index) => (
          <li
            key={project}
            className="flex items-baseline gap-5 border-t border-[#d9d6df] py-5 sm:odd:pr-8 sm:even:border-l sm:even:pl-8"
          >
            <span className="w-8 shrink-0 text-[11px] tracking-[0.14em] text-[#6D35F5]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-[18px] tracking-[-0.03em] text-[#17151c] sm:text-[20px]">{project}</span>
          </li>
        ))}
      </ul>
    </CampusSection>
  )
}
