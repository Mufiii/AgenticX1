import { SectionHeading } from '@/components/personalizedAgents/SectionHeading'
import { capabilities } from '@/components/qaqPassport/data'

export function CapabilityGrid() {
  return (
    <section id="capability" className="relative scroll-mt-28 overflow-hidden bg-[#08080d] text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div data-campus-reveal>
          <SectionHeading
            eyebrow="Your Capability Record"
            headline={
              <>
                More Than a{' '}
                <span className="bg-gradient-to-r from-[#8CCBFF] via-[#8B6CFF] to-[#D66BFF] bg-clip-text text-transparent">
                  Certificate.
                </span>
              </>
            }
            description="The QaQ Passport can hold the evidence of what you know, build and demonstrate."
          />
        </div>

        <ul
          className="mt-16 grid border-t border-white/[0.08] sm:grid-cols-2 lg:grid-cols-4"
          data-campus-reveal
        >
          {capabilities.map((item, index) => {
            const Icon = item.icon
            return (
              <li
                key={item.title}
                className="group border-b border-white/[0.08] py-8 pr-6 sm:odd:border-r lg:border-r lg:py-10 lg:[&:nth-child(4n)]:border-r-0 lg:[&:nth-child(n+5)]:border-b-0"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[11px] tracking-[0.2em] text-[#a9a3ff]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <Icon className="size-4 text-white/30 transition group-hover:text-[#c4b5fd]" aria-hidden="true" />
                </div>
                <h3 className="mt-8 text-[18px] font-medium tracking-[-0.02em] sm:text-[20px]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[240px] text-[14px] leading-6 text-white/45">
                  {item.description}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
