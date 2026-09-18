import { SectionHeading } from '@/components/personalizedAgents/SectionHeading'
import { connectionExamples } from '@/components/polymathground/data'

export function ConnectionExamples() {
  return (
    <section id="connect-the-patterns" className="relative scroll-mt-28 overflow-hidden bg-white text-[#101936]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-[-12%] top-20 h-[380px] w-[380px] rounded-full bg-[#635BFF]/7 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div data-campus-reveal>
          <SectionHeading
            tone="light"
            eyebrow="Connect the Patterns"
            headline={
              <>
                The Value Isn&apos;t Knowing More.
                <span className="mt-1 block bg-gradient-to-r from-[#1677ff] via-[#635BFF] to-[#c23de8] bg-clip-text text-transparent">
                  It&apos;s Seeing Connections.
                </span>
              </>
            }
          />
        </div>

        <ul className="mt-16 space-y-4 lg:mt-20" data-campus-reveal>
          {connectionExamples.map((example) => (
            <li key={example.outcome}>
              <MergeRow disciplines={example.disciplines} outcome={example.outcome} />
            </li>
          ))}
        </ul>

        <p
          className="mx-auto mt-16 max-w-2xl text-center text-[16px] leading-7 text-[#64708a] sm:text-[17px]"
          data-campus-reveal
        >
          Polymath thinking is the ability to recognize patterns across disciplines
          and combine ideas to solve problems differently.
        </p>
      </div>
    </section>
  )
}

function MergeRow({
  disciplines,
  outcome,
}: {
  disciplines: [string, string, string]
  outcome: string
}) {
  return (
    <article className="min-w-0 rounded-[24px] border border-[#e6eaf2] bg-[#fbfbfe] px-5 py-6 sm:px-8 sm:py-7">
      <div className="flex min-w-0 flex-col items-stretch gap-5 lg:flex-row lg:items-center lg:gap-6">
        <div className="grid min-w-0 flex-1 grid-cols-1 gap-2 sm:grid-cols-3">
          {disciplines.map((discipline) => (
            <span
              key={discipline}
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#e6eaf2] bg-white px-3 text-center text-[13px] font-medium tracking-[-0.01em] text-[#101936] sm:px-4"
            >
              {discipline}
            </span>
          ))}
        </div>

        <div className="hidden shrink-0 items-center lg:flex" aria-hidden="true">
          <MergeGlyph />
        </div>
        <div className="flex justify-center lg:hidden" aria-hidden="true">
          <span className="text-xl text-[#635BFF]">↓</span>
        </div>

        <div className="flex min-h-[56px] min-w-0 items-center justify-center rounded-full border border-[#dcd6ff] bg-white px-5 text-center shadow-[0_10px_30px_rgba(99,91,255,0.08)] lg:w-[260px] lg:shrink-0">
          <p className="text-[15px] font-medium tracking-[-0.02em] text-[#4338ca] sm:text-[17px]">
            {outcome}
          </p>
        </div>
      </div>
    </article>
  )
}

function MergeGlyph() {
  return (
    <svg viewBox="0 0 72 56" className="h-14 w-[72px]" aria-hidden="true">
      <path
        d="M4 8 C28 8, 28 28, 48 28"
        fill="none"
        stroke="#635BFF"
        strokeWidth="1.4"
        strokeLinecap="round"
        className="pg-network-flow"
      />
      <path
        d="M4 28 H48"
        fill="none"
        stroke="#8B5CF6"
        strokeWidth="1.4"
        strokeLinecap="round"
        className="pg-network-flow"
      />
      <path
        d="M4 48 C28 48, 28 28, 48 28"
        fill="none"
        stroke="#635BFF"
        strokeWidth="1.4"
        strokeLinecap="round"
        className="pg-network-flow"
      />
      <line x1="48" y1="28" x2="66" y2="28" stroke="#635BFF" strokeWidth="1.4" strokeLinecap="round" />
      <polygon points="66,23 72,28 66,33" fill="#635BFF" />
    </svg>
  )
}
