import Link from 'next/link'

const CONTACT_HREF = '/contact'

function PrimaryButton({
  href,
  children,
}: {
  href: string
  children: string
}) {
  const className =
    'group inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#6d4aff] to-[#4f7cff] px-6 py-3 text-sm font-medium text-white shadow-[0_0_35px_rgba(109,74,255,0.3)] transition hover:shadow-[0_0_45px_rgba(109,74,255,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6] motion-reduce:transition-none'

  const content = (
    <>
      {children}
      <span
        className="text-lg leading-none transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
        aria-hidden="true"
      >
        →
      </span>
    </>
  )

  if (href.startsWith('mailto:') || href.startsWith('http')) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  )
}

export function CareerPage() {
  return (
    <section className="relative overflow-hidden bg-[#050508] text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-[-180px] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,91,255,0.16)_0%,rgba(79,124,255,0.06)_40%,transparent_70%)] blur-2xl" />
        <div className="absolute left-[-8%] top-[38%] h-[480px] w-[480px] rounded-full bg-[#7C3AED]/16 blur-[160px]" />
        <div className="absolute left-1/2 top-[48%] h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-[#5B5BFF]/14 blur-[150px]" />
        <div className="absolute right-[-10%] top-[42%] h-[460px] w-[460px] rounded-full bg-[#22d3ee]/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-6 pb-24 pt-32 sm:px-10 sm:pb-28 lg:px-16 lg:pb-32 lg:pt-40">
        <div className="mx-auto max-w-[820px] text-center">
          <div className="mb-7 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#7c5cff]/70" aria-hidden="true" />
            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#a9a3ff]">
              Career
            </span>
            <span className="h-px w-10 bg-[#7c5cff]/70" aria-hidden="true" />
          </div>

          <h1 className="text-[clamp(2.4rem,6.4vw,5.4rem)] font-medium leading-[0.96] tracking-[-0.055em]">
            Latest Jobs
            <br />
            <span className="bg-gradient-to-r from-[#4f7cff] via-[#7c5cff] to-[#a78bfa] bg-clip-text text-transparent">
              &amp; Positions
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-[640px] text-[17px] leading-[1.75] text-white/55 sm:text-[18px]">
            We&apos;re building the future of human-centered intelligence.
            While we don&apos;t have any open positions at the moment, we&apos;re
            always interested in connecting with talented people who share our
            vision.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-[760px] lg:mt-28">
          <h2 className="text-center text-[clamp(1.7rem,3.4vw,2.4rem)] font-medium tracking-[-0.04em] text-white">
            Current Opportunities
          </h2>

          <article className="relative mt-10 overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#090c1a]/70 px-8 py-12 text-center shadow-[0_0_50px_rgba(100,70,255,0.08)] backdrop-blur-xl sm:px-12 sm:py-14">
            <div
              className="pointer-events-none absolute left-1/2 top-[-80px] h-40 w-72 -translate-x-1/2 rounded-full bg-[#6D35F5]/16 blur-[70px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute right-[-60px] bottom-[-80px] h-36 w-36 rounded-full bg-[#4f7cff]/12 blur-[60px]"
              aria-hidden="true"
            />

            <h3 className="relative text-[28px] font-medium leading-tight tracking-[-0.03em] text-white sm:text-[32px]">
              No Open Positions Right Now
            </h3>

            <p className="relative mx-auto mt-5 max-w-[52ch] text-[17px] leading-[1.7] text-white/55 sm:text-[18px]">
              We don&apos;t have any active openings at the moment. As our team
              and projects grow, new opportunities will be posted here.
            </p>

            <p className="relative mt-8 text-[15px] text-white/45 sm:text-[16px]">
              Interested in working with us?
            </p>

            <div className="relative mt-5">
              <PrimaryButton href={CONTACT_HREF}>Get in Touch</PrimaryButton>
            </div>
          </article>
        </div>

        <div className="mx-auto mt-20 max-w-[640px] text-center lg:mt-28">
          <h2 className="text-[clamp(1.7rem,3.4vw,2.4rem)] font-medium tracking-[-0.04em] text-white">
            Stay Connected
          </h2>

          <p className="mx-auto mt-5 text-[17px] leading-[1.75] text-white/55 sm:text-[18px]">
            Even when we&apos;re not actively hiring, we&apos;re always open to
            meeting exceptional people. If you believe you can contribute to
            what we&apos;re building, introduce yourself.
          </p>

          <div className="mt-8">
            <PrimaryButton href={CONTACT_HREF}>Contact Us</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}
