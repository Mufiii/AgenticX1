import { CampusEyebrow, CampusSection } from '@/components/campus/campus-ui'

const outcomes = [
  'Skills',
  'Projects',
  'Prototypes',
  'Research Exposure',
  'Industry Experience',
  'Entrepreneurial Capability',
] as const

export function BeyondCertificates() {
  return (
    <CampusSection>
      <div
        className="grid gap-10 sm:gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16 xl:gap-24"
        data-campus-reveal
      >
        <div className="max-w-[560px] lg:pr-4 flex justify-start flex-col">
          <h2 className="mt-6 mb-3 text-[clamp(2.6rem,5.2vw,4.75rem)] font-medium leading-[0.98] tracking-[-0.035em] text-[#f7f6f3]">
            Beyond{' '}
            <span className="text-[#c4b5fd]">Certificates</span>
          </h2>
          <p className="mt-7 max-w-[440px] px-3 text-[16px] leading-[1.75] text-[#9b979e] sm:text-[17px]">
            Our goal is to help students build more than credentials, so they are prepared not only
            to participate in the AI economy, but to create within it.
          </p>
        </div>

        <ol className="min-w-0 lg:pt-1">
          {outcomes.map((item, index) => (
            <li
              key={item}
              className="group flex items-center justify-between gap-6 border-t border-[#2c2932] py-5 last:border-b sm:py-6"
            >
              <span className="text-[20px] font-medium leading-[1.2] tracking-[-0.02em] text-[#f7f6f3] transition-colors duration-300 group-hover:text-white sm:text-[22px] lg:text-[24px]">
                {item}
              </span>
              <span className="shrink-0 text-[12px] font-semibold tracking-[0.16em] text-[#c4b5fd]">
                {String(index + 1).padStart(2, '0')}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </CampusSection>
  )
}
