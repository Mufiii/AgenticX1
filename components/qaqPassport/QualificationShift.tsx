import { SectionHeading } from '@/components/personalizedAgents/SectionHeading'
import { qaqItems, traditionalItems } from '@/components/qaqPassport/data'

export function QualificationShift() {
  return (
    <section id="the-shift" className="relative scroll-mt-28 overflow-hidden bg-[#08080d] text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div data-campus-reveal>
          <SectionHeading
            eyebrow="The Shift"
            headline={
              <>
                From Qualifications to{' '}
                <span className="bg-gradient-to-r from-[#8CCBFF] via-[#8B6CFF] to-[#D66BFF] bg-clip-text text-transparent">
                  Demonstrated Capability.
                </span>
              </>
            }
            description="Traditional qualifications show where you studied. QaQ is designed to show what you know, build and demonstrate."
          />
        </div>

        <div
          className="mt-16 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-8"
          data-campus-reveal
        >
          <div className="flex h-full min-h-[280px] flex-col rounded-[24px] border border-white/[0.07] bg-white/[0.015] p-7 sm:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/35">
              Traditional Qualification
            </p>
            <ul className="mt-8 space-y-0">
              {traditionalItems.map((item, index) => (
                <li
                  key={item}
                  className="flex items-center justify-between border-t border-white/[0.07] py-4 last:border-b"
                >
                  <span className="text-[18px] tracking-[-0.02em] text-white/45 sm:text-[20px]">
                    {item}
                  </span>
                  <span className="text-[11px] tracking-[0.16em] text-white/20">
                    0{index + 1}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center py-2" aria-hidden="true">
            <span className="text-2xl text-[#8B5CF6] lg:hidden">↓</span>
            <span className="hidden text-2xl text-[#8B5CF6] lg:inline">→</span>
          </div>

          <div className="flex h-full min-h-[280px] flex-col rounded-[24px] border border-[#8B5CF6]/30 bg-[#8B5CF6]/[0.06] p-7 sm:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#c4b5fd]">
              QaQ Passport
            </p>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {qaqItems.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[#8B5CF6]/25 bg-[#050711]/50 px-4 py-2.5 text-[13px] text-white/90"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
