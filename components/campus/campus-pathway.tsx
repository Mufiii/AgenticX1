import { CampusEyebrow, CampusSection } from '@/components/campus/campus-ui'

const stages = [
  {
    n: '01',
    title: 'Learn',
    copy: 'Build strong foundations in AI and emerging technologies.',
  },
  {
    n: '02',
    title: 'Build',
    copy: 'Turn knowledge into practical projects and working systems.',
  },
  {
    n: '03',
    title: 'Innovate',
    copy: 'Explore new ideas across technology and disciplines.',
  },
  {
    n: '04',
    title: 'Prototype',
    copy: 'Transform ideas into prototypes and real-world demonstrations.',
  },
  {
    n: '05',
    title: 'Launch',
    copy: 'Move promising projects toward products, research or startups.',
  },
] as const

export function CampusPathway() {
  return (
    <CampusSection id="pathway" tone="light" className="scroll-mt-24">
      <div className="mx-auto max-w-[720px] text-center" data-campus-reveal>
        <CampusEyebrow tone="light">The Pathway</CampusEyebrow>
        <h2 className="mt-6 text-[clamp(2.25rem,5vw,4.25rem)] font-normal leading-[1.05] tracking-[-0.06em]">
          From Learning to <em className="not-italic text-[#6354c9]">Innovation</em>
        </h2>
        <p className="mx-auto mt-5 max-w-[520px] text-[15px] leading-[1.65] text-[#6d6b76]">
          Our campus pathway connects learning, experimentation and entrepreneurship into one
          continuous journey.
        </p>
      </div>

      <ol
        className="relative mt-16 grid grid-cols-1 gap-10 before:pointer-events-none before:absolute before:top-8 before:bottom-2 before:left-[11px] before:w-px before:bg-[#6D35F5]/25 before:content-[''] lg:mt-20 lg:grid-cols-5 lg:gap-8 lg:before:top-[11px] lg:before:right-[8%] lg:before:bottom-auto lg:before:left-[8%] lg:before:h-px lg:before:w-auto lg:before:bg-[#6D35F5]/35"
        data-campus-reveal
      >
        {stages.map((stage) => (
          <li key={stage.n} className="relative lg:text-center">
            <div className="flex items-start gap-5 lg:flex-col lg:items-center lg:gap-0">
              <span className="relative z-[1] mt-0.5 size-6 shrink-0 rounded-full border-[3px] border-[#6D35F5] bg-white shadow-[0_0_0_6px_rgba(109,53,245,0.1)] lg:mx-auto lg:mt-0" />
              <div className="min-w-0 pb-2 lg:pb-0">
                <span className="text-[10px] font-bold tracking-[0.16em] text-[#6D35F5]">{stage.n}</span>
                <h3 className="mt-2 text-[22px] font-normal tracking-[-0.04em] text-[#17151c] lg:mt-3 lg:text-[24px]">
                  {stage.title}
                </h3>
                <p className="mt-3 max-w-[260px] text-[14px] leading-[1.65] text-[#6c6c78] lg:mx-auto">
                  {stage.copy}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </CampusSection>
  )
}
