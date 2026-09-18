import { SectionHeading } from '@/components/personalizedAgents/SectionHeading'
import { polymathFlow, traditionalFlow } from '@/components/polymathground/data'

export function ShiftSection() {
  return (
    <section id="the-shift" className="relative scroll-mt-28 overflow-hidden bg-white text-[#101936]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-24 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-[#635BFF]/6 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div data-campus-reveal>
          <SectionHeading
            tone="light"
            eyebrow="The Shift"
            headline={
              <>
                The Next Generation Needs More Than{' '}
                <span className="bg-gradient-to-r from-[#1677ff] via-[#635BFF] to-[#c23de8] bg-clip-text text-transparent">
                  One Discipline.
                </span>
              </>
            }
            description="AI and DeepTech increasingly emerge at the intersection of technology, science, human behaviour, business and society."
          />
        </div>

        <div
          className="mt-16 grid items-stretch gap-5 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-8"
          data-campus-reveal
        >
          <FlowCard title="Traditional" steps={[...traditionalFlow]} muted />

          <div className="flex items-center justify-center py-1" aria-hidden="true">
            <span className="text-2xl text-[#635BFF] lg:hidden">↓</span>
            <span className="hidden text-2xl text-[#635BFF] lg:inline">→</span>
          </div>

          <FlowCard title="PolymathGround" steps={[...polymathFlow]} />
        </div>
      </div>
    </section>
  )
}

function FlowCard({
  title,
  steps,
  muted = false,
}: {
  title: string
  steps: string[]
  muted?: boolean
}) {
  return (
    <div
      className={`flex h-full min-h-[240px] min-w-0 flex-col rounded-[24px] border p-7 sm:p-8 ${
        muted
          ? 'border-[#e6eaf2] bg-[#f8f9fc]'
          : 'border-[#dcd6ff] bg-[#f8f7ff] shadow-[0_18px_50px_rgba(99,91,255,0.08)]'
      }`}
    >
      <p
        className={`text-[11px] font-medium uppercase tracking-[0.28em] ${
          muted ? 'text-[#6875a0]' : 'text-[#635BFF]'
        }`}
      >
        {title}
      </p>

      <ol className="mt-8 flex flex-1 flex-col justify-center gap-2">
        {steps.map((step, index) => (
          <li key={step} className="flex flex-col items-center gap-2">
            <span
              className={`inline-flex min-h-[44px] w-full items-center justify-center rounded-full px-4 text-sm tracking-[-0.02em] ${
                muted
                  ? 'bg-white text-[#4d5b7c] ring-1 ring-[#e6eaf2]'
                  : 'bg-white text-[#4338ca] shadow-sm ring-1 ring-[#dcd6ff]'
              }`}
            >
              {step}
            </span>
            {index < steps.length - 1 ? (
              <span className={muted ? 'text-[#65708c]' : 'text-[#635BFF]'} aria-hidden="true">
                ↓
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  )
}
