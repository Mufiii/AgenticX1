import { CampusSection } from '@/components/campus/campus-ui'

const inbound = ['Technology', 'Business', 'Psychology', 'Healthcare'] as const
const outbound = ['Design', 'Economics', 'Entrepreneurship'] as const

export function MultidisciplinaryLearning() {
  return (
    <CampusSection tone="light">
      <div className="max-w-[680px]" data-campus-reveal>
        <h2 className="text-[clamp(2.25rem,4.8vw,4.375rem)] font-normal leading-[1.05] tracking-[-0.06em]">
          Innovation Happens at the <em className="not-italic text-[#6354c9]">Intersection</em>
        </h2>
        <p className="mt-6 max-w-[440px] text-[16px] leading-[1.7] text-[#6d6b76]">
          Innovation happens at the intersection of disciplines.
        </p>
        <p className="mt-4 text-[15px] leading-[1.7] text-[#8a8792]">Students connect:</p>
      </div>

      <div
        className="mt-14 grid items-center gap-8 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-6"
        data-campus-reveal
      >
        <ul className="grid gap-px bg-[#d9d6df] lg:order-1 lg:bg-transparent lg:gap-5">
          {inbound.map((item) => (
            <li
              key={item}
              className="flex items-center justify-between bg-[#fafaf9] px-0 py-4 text-[18px] tracking-[-0.03em] text-[#17151c] lg:justify-end lg:gap-4 lg:py-0 lg:text-[20px]"
            >
              <span>{item}</span>
              <span className="hidden h-px w-10 bg-[#6D35F5]/40 lg:block" aria-hidden="true" />
            </li>
          ))}
        </ul>

        <div className="order-last border border-[#d9d6df] px-8 py-10 text-center lg:order-2 lg:px-10 lg:py-14">
          <p className="text-[22px] leading-[1.25] tracking-[-0.04em] text-[#17151c] sm:text-[26px] lg:text-[28px]">
            AI + Human Intelligence + Innovation
          </p>
        </div>

        <ul className="grid gap-px bg-[#d9d6df] lg:order-3 lg:bg-transparent lg:gap-5">
          {outbound.map((item) => (
            <li
              key={item}
              className="flex items-center justify-between bg-[#fafaf9] px-0 py-4 text-[18px] tracking-[-0.03em] text-[#17151c] lg:justify-start lg:gap-4 lg:py-0 lg:text-[20px]"
            >
              <span className="hidden h-px w-10 bg-[#6D35F5]/40 lg:block" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </CampusSection>
  )
}
