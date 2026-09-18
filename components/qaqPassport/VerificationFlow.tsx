import { SectionHeading } from '@/components/personalizedAgents/SectionHeading'
import { verificationDestinations, verificationSteps } from '@/components/qaqPassport/data'

export function VerificationFlow() {
  return (
    <section id="verify" className="relative scroll-mt-28 overflow-hidden bg-[#050711] text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
          <div data-campus-reveal>
            <SectionHeading
              eyebrow="Verifiable + Portable"
              headline={
                <>
                  Your Learning Identity.{' '}
                  <span className="bg-gradient-to-r from-[#8CCBFF] via-[#8B6CFF] to-[#D66BFF] bg-clip-text text-transparent">
                    Owned by You.
                  </span>
                </>
              }
              description="The QaQ Passport is designed as a learner-controlled record that can carry verified evidence across institutions, employers and professional ecosystems."
            />

            <aside className="mt-10 max-w-md rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/40">
                Blockchain-based verification
              </p>
              <p className="mt-3 text-[14px] leading-6 text-white/50">
                Where appropriate, credentials may use blockchain-based verification to
                support tamper-resistant credential records.
              </p>
            </aside>
          </div>

          <div data-campus-reveal>
            <ol className="relative">
              {verificationSteps.map((step, index) => {
                const last = index === verificationSteps.length - 1
                return (
                  <li key={step} className="flex gap-4">
                    <div className="flex w-6 shrink-0 flex-col items-center">
                      <span
                        className={`relative z-[1] size-3 rounded-full ${
                          last
                            ? 'bg-[#8B5CF6] shadow-[0_0_16px_rgba(139,92,246,0.55)]'
                            : 'border border-[#8B5CF6] bg-[#050711]'
                        }`}
                        aria-hidden="true"
                      />
                      {!last ? (
                        <span className="my-1 w-px flex-1 bg-gradient-to-b from-[#8B5CF6]/50 to-white/10" aria-hidden="true" />
                      ) : null}
                    </div>

                    <div className={`min-w-0 pb-7 ${last ? 'pb-8' : ''}`}>
                      <span className="text-[10px] tracking-[0.22em] text-white/30">
                        0{index + 1}
                      </span>
                      <h3 className={`mt-1 text-[20px] tracking-[-0.03em] sm:text-[26px] ${last ? 'text-[#c4b5fd]' : 'text-white'}`}>
                        {step}
                      </h3>
                    </div>
                  </li>
                )
              })}
            </ol>

            <div className="pl-10">
              <span className="mb-3 block text-[#8B5CF6]" aria-hidden="true">
                ↓
              </span>
              <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-white/30">
                Institutions / Employers / Collaborators
              </p>
              <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                {verificationDestinations.map((destination) => (
                  <li
                    key={destination}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-center text-[11px] uppercase tracking-[0.16em] text-white/70"
                  >
                    {destination}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
