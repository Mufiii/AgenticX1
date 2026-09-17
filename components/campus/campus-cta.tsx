import {
  CampusPrimaryLink,
  CampusSecondaryLink,
  CampusTextLink,
} from '@/components/campus/campus-ui'

export function CampusCTA() {
  return (
    <section className="border-t border-[#2c2932] bg-[#0b0a0f] text-[#f7f6f3]">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-24 text-center sm:px-8 sm:py-28 lg:py-36">
        <div data-campus-reveal>
          <h2 className="mx-auto max-w-[900px] text-[clamp(2.5rem,6.4vw,5.75rem)] font-normal leading-[1.02] tracking-[-0.07em]">
            Build the Next Generation of <em className="not-italic text-[#c4b5fd]">Innovators</em>
          </h2>
          <p className="mx-auto mt-6 max-w-[420px] text-[16px] leading-[1.7] text-[#9b979e]">
            Learn AI. Build DeepTech. Create the Future.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <CampusPrimaryLink href="/company/contact">Build a Future-Ready Campus</CampusPrimaryLink>
            <CampusSecondaryLink href="/company/contact">Talk to AgenticX</CampusSecondaryLink>
          </div>
        </div>

        <nav
          className="mx-auto mt-16 flex max-w-[480px] flex-col items-center justify-center gap-5 border-t border-[#2c2932] pt-8 sm:mt-20 sm:flex-row sm:gap-10"
          aria-label="Campus ecosystem partners"
          data-campus-reveal
        >
          <CampusTextLink href="/ecosystem">PolymathGround</CampusTextLink>
          <CampusTextLink href="/services">AgenticX ARMY</CampusTextLink>
        </nav>
      </div>
    </section>
  )
}
