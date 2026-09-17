import { CampusSection } from '@/components/campus/campus-ui'

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
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20" data-campus-reveal>
        <div>
          <h2 className="text-[clamp(2.25rem,4.8vw,4.375rem)] font-normal leading-[1.05] tracking-[-0.06em]">
            Beyond <em className="not-italic text-[#c4b5fd]">Certificates</em>
          </h2>
          <p className="mt-6 max-w-[400px] text-[16px] leading-[1.7] text-[#9b979e]">
            Our goal is to help students build:
          </p>
        </div>

        <ol>
          {outcomes.map((item, index) => (
            <li
              key={item}
              className="flex items-baseline justify-between gap-6 border-t border-[#2c2932] py-4 last:border-b"
            >
              <span className="text-[22px] tracking-[-0.04em] text-[#f7f6f3] sm:text-[26px] lg:text-[30px]">
                {item}
              </span>
              <span className="shrink-0 text-[11px] tracking-[0.14em] text-[#c4b5fd]">
                {String(index + 1).padStart(2, '0')}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <p className="mt-12 max-w-[560px] text-[16px] leading-[1.7] text-[#8f8a94]" data-campus-reveal>
        So they are prepared not only to participate in the AI economy, but to create within it.
      </p>
    </CampusSection>
  )
}
