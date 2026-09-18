import Link from 'next/link'
import { CONTACT_EMAIL, CONTACT_MAILTO } from '@/components/contact/constants'
import { ContactEyebrow, ContactGlow } from '@/components/contact/contact-ui'
import { SalesForm } from '@/components/contact/SalesForm'

const steps = [
  {
    title: 'Share your context',
    copy: 'Tell us about your organization, the people involved and the outcomes you care about.',
  },
  {
    title: 'Meet the right team',
    copy: 'We connect you with the people who understand your environment: campus, corporate or community.',
  },
  {
    title: 'Explore a working path',
    copy: 'Together we map a responsible way to introduce agentic systems with human oversight.',
  },
]

export function SalesPage() {
  return (
    <section className="relative overflow-hidden bg-[#050508] text-white">
      <ContactGlow />

      <div className="relative mx-auto max-w-[1320px] px-6 pb-24 pt-32 sm:px-10 sm:pb-28 lg:px-16 lg:pb-32 lg:pt-40">
        <Link
          href="/contact"
          className="mb-10 inline-flex text-[13px] text-[#A1A1AA] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6]"
        >
          ← Contact
        </Link>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
          <div className="lg:sticky lg:top-32">
            <ContactEyebrow align="left">Contact · Sales</ContactEyebrow>

            <h1 className="max-w-[16ch] text-[clamp(2.4rem,5.2vw,4.6rem)] font-medium leading-[0.98] tracking-[-0.05em]">
              Talk with
              <br />
              <em className="not-italic text-[#8B5CF6]">our team.</em>
            </h1>

            <p className="mt-7 max-w-[520px] text-[17px] leading-[1.75] text-[#A1A1AA] sm:text-[18px]">
              Tell us about your organization, workflows and what you want to build. We&apos;ll
              connect you with the right people to explore how AgenticX can create measurable
              value.
            </p>

            <ol className="mt-10 space-y-6">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border border-white/[0.08] bg-white/[0.03] text-[12px] font-semibold text-[#C4B5FD]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-[16px] font-medium tracking-[-0.02em] text-white">{step.title}</p>
                    <p className="mt-1.5 max-w-[42ch] text-[14px] leading-[1.65] text-[#A1A1AA]">
                      {step.copy}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-10 text-[14px] text-[#A1A1AA]">
              Prefer email?{' '}
              <a
                href={CONTACT_MAILTO}
                className="text-white/85 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6]"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>

          <SalesForm />
        </div>
      </div>
    </section>
  )
}
