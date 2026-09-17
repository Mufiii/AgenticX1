import { CampusEyebrow, CampusPrimaryLink, CampusSecondaryLink } from '@/components/campus/campus-ui'

const stages = ['Learn', 'Build', 'Innovate', 'Prototype', 'Launch'] as const

export function CampusHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b0a0f] text-[#f7f6f3]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute right-[-12%] top-[18%] h-[55%] w-[48%] rounded-full bg-[radial-gradient(circle,rgba(109,53,245,0.12),transparent_68%)] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40">
        <div className="max-w-[820px]">
          <CampusEyebrow>Campus</CampusEyebrow>
          <h1 className="mt-6 max-w-[900px] text-[clamp(2.75rem,7vw,5.125rem)] font-normal leading-[1.02] tracking-[-0.06em]">
            From AI Learner
            <br />
            <em className="not-italic text-[#c4b5fd]">to DeepTech Innovator</em>
          </h1>
          <div className="mt-8 max-w-[600px] space-y-5 text-[17px] leading-[1.7] text-[#aaa6af] sm:text-lg">
            <p>
              We transform students from AI learners into DeepTech innovators through AI leadership,
              multidisciplinary learning, hands-on innovation and real-world projects.
            </p>
            <p>
              Students explore AI, Robotics, Digital Twins, IoT, Blockchain, AR/VR, Semiconductors and
              Photonics while developing critical thinking, creativity, entrepreneurship and human–AI
              collaboration skills.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <CampusPrimaryLink href="/company/contact">Build a Future-Ready Campus</CampusPrimaryLink>
            <CampusSecondaryLink href="#pathway">Explore the Campus Journey</CampusSecondaryLink>
          </div>
        </div>

        <ol
          className="mt-16 grid grid-cols-1 gap-6 border-t border-[#2c2932] pt-8 sm:mt-20 lg:mt-24 lg:grid-cols-5 lg:gap-6"
          aria-label="Transformation from learning to launch"
          data-campus-reveal
        >
          {stages.map((stage, index) => (
            <li key={stage} className="relative flex items-start gap-4 lg:flex-col lg:items-start lg:gap-0">
              {index < stages.length - 1 && (
                <span
                  className="pointer-events-none absolute left-[5px] top-5 h-[calc(100%+8px)] w-px bg-[#2c2932] lg:hidden"
                  aria-hidden="true"
                />
              )}
              {index < stages.length - 1 && (
                <span
                  className="pointer-events-none absolute left-[11px] top-[5px] right-[-12px] hidden h-px bg-[#2c2932] lg:block"
                  aria-hidden="true"
                />
              )}
              <span className="relative z-[1] mt-1 flex size-[11px] shrink-0 items-center justify-center rounded-full border border-[#6D35F5] bg-[#0b0a0f] lg:mb-4 lg:mt-0">
                <span className="size-1 rounded-full bg-[#6D35F5]" />
              </span>
              <div>
                <span className="text-[10px] font-bold tracking-[0.16em] text-[#c4b5fd]">
                  0{index + 1}
                </span>
                <span className="mt-1 block text-[16px] tracking-[-0.02em] text-[#f7f6f3] sm:text-[17px]">
                  {stage}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
