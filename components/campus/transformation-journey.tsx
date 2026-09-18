import { CampusSection } from '@/components/campus/campus-ui'

const stages = ['AI Learner', 'AI Thinker', 'Builder', 'DeepTech Innovator'] as const

export function TransformationJourney() {
  return (
    <CampusSection tone="light">
      <div className="mx-auto max-w-[720px] text-center" data-campus-reveal>
        <h2 className="text-[clamp(2.25rem,5vw,4.375rem)] font-normal leading-[1.02] tracking-[-0.035em]">
          The Transformation <em className="not-italic text-[#6354c9]">Journey</em>
        </h2>
      </div>

      <ol className="relative mx-auto mt-16 max-w-[880px] before:pointer-events-none before:absolute before:top-3 before:bottom-[8.5rem] before:left-[11px] before:w-px before:bg-[#6D35F5]/30 before:content-[''] lg:before:top-0 lg:before:bottom-auto lg:before:left-1/2 lg:before:h-[calc(100%-7rem)] lg:before:-translate-x-1/2" data-campus-reveal>

        {stages.map((stage, index) => (
          <li
            key={stage}
            className={`relative flex items-center gap-5 pb-10 last:pb-0 lg:pb-8 ${
              index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'
            }`}
          >
            <span className="relative z-[1] size-6 shrink-0 rounded-full border-[3px] border-[#6D35F5] bg-white lg:absolute lg:left-1/2 lg:-translate-x-1/2" />
            <div
              className={`min-w-0 lg:w-[calc(50%-48px)] ${
                index % 2 === 0 ? 'lg:pr-2 lg:text-right' : 'lg:pl-2 lg:text-left'
              }`}
            >
              <span className="text-[10px] font-bold tracking-[0.16em] text-[#6D35F5]">
                0{index + 1}
              </span>
              <h3 className="mt-1 text-[26px] font-normal leading-[1.15] tracking-[-0.025em] text-[#17151c] sm:text-[32px]">
                {stage}
              </h3>
            </div>
          </li>
        ))}

        <li className="relative mt-4 flex items-start gap-5 lg:mt-8 lg:block">
          <span className="relative z-[1] mt-6 size-6 shrink-0 rounded-full border-[3px] border-[#6D35F5] bg-[#6D35F5] lg:mx-auto lg:mt-0 lg:mb-5 lg:block" />
          <div className="flex-1 border border-[#6D35F5]/35 bg-white px-6 py-7 sm:px-8 sm:py-8 lg:text-center">
            <span className="text-[10px] font-bold tracking-[0.16em] text-[#6D35F5]">05</span>
            <p className="mt-3 text-[clamp(1.5rem,3.2vw,2.5rem)] font-normal leading-[1.15] tracking-[-0.025em] text-[#17151c]">
              Entrepreneur / Researcher / Industry Leader
            </p>
          </div>
        </li>
      </ol>
    </CampusSection>
  )
}
