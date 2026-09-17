import { CampusSection } from '@/components/campus/campus-ui'

const stages = [
  'Idea',
  'Validation',
  'Prototype',
  'MVP',
  'Mentorship',
  'Incubation',
  'Startup',
] as const

export function StartupPathway() {
  return (
    <CampusSection>
      <div className="max-w-[680px]" data-campus-reveal>
        <h2 className="text-[clamp(2.25rem,4.8vw,4.375rem)] font-normal leading-[1.05] tracking-[-0.06em]">
          Turn Ideas Into <em className="not-italic text-[#c4b5fd]">Ventures</em>
        </h2>
        <p className="mt-6 max-w-[520px] text-[16px] leading-[1.7] text-[#9b979e]">
          Promising ideas can progress through a structured innovation pathway.
        </p>
      </div>

      <ol
        className="relative mt-14 grid grid-cols-1 gap-8 before:absolute before:top-3 before:bottom-3 before:left-[15px] before:w-px before:bg-[#2c2932] before:content-[''] lg:mt-16 lg:grid-cols-7 lg:gap-3 lg:before:top-[15px] lg:before:right-0 lg:before:bottom-auto lg:before:left-0 lg:before:h-px lg:before:w-auto"
        data-campus-reveal
      >
        {stages.map((stage, index) => {
          const isOutcome = index === stages.length - 1
          return (
            <li
              key={stage}
              className="relative flex items-start gap-5 lg:flex-col lg:items-center lg:text-center"
            >
              <span
                className={`relative z-[1] grid size-[31px] shrink-0 place-items-center rounded-full border bg-[#0b0a0f] text-[10px] font-bold tracking-[0.08em] ${
                  isOutcome ? 'border-[#6D35F5] text-[#c4b5fd]' : 'border-[#3a3642] text-[#8f8a94]'
                }`}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <span
                className={`pt-1 text-[16px] tracking-[-0.03em] lg:pt-4 lg:text-[17px] ${
                  isOutcome ? 'text-white' : 'text-[#c7c4ca]'
                }`}
              >
                {stage}
              </span>
            </li>
          )
        })}
      </ol>

      <p className="mt-12 max-w-[520px] text-[15px] leading-[1.7] text-[#8f8a94]" data-campus-reveal>
        Students learn how to transform technical ideas into products, services and scalable ventures.
      </p>
    </CampusSection>
  )
}
