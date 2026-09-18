import Image from 'next/image'

export function PhotonicsBrainHero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#5B5BFF]/10 blur-[140px]" />
        <div className="absolute right-[-10%] top-[10%] h-[600px] w-[600px] rounded-full bg-[#7C3AED]/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-16">

          {/* ================= LEFT ================= */}
          <div className="max-w-[720px]">

            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-[#6EA8FF] to-[#A855F7]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-white/60">
                Human Centric AI
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[clamp(3.2rem,6vw,6rem)] font-medium leading-[0.95] tracking-[-0.055em]">
              Photonics{' '}
              <span className="bg-gradient-to-r from-[#8EDBFF] via-[#8B8CFF] to-[#C05CFF] bg-clip-text text-transparent">
                Brain
              </span>
            </h1>

            {/* Sub heading */}
            <h2 className="mt-6 max-w-[680px] text-[clamp(1.7rem,3vw,2.7rem)] font-normal leading-tight tracking-[-0.035em] text-white/90">
              A Second Brain for Human Longevity
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-[650px] text-[16px] leading-[1.75] text-white/55 sm:text-[17px]">
              A personalized intelligence infrastructure designed to help
              individuals understand, optimize and manage the complex
              dimensions of health, cognition, performance and longevity.
            </p>


            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-4">

              {/* Primary */}
              <a
                href="#"
                className="group inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-[#5CA8FF] to-[#713BFF] px-7 py-4 text-[14px] font-medium text-white shadow-[0_0_35px_rgba(92,112,255,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(92,112,255,0.4)]"
              >
                Explore the Future

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* Secondary */}
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-4 text-[14px] font-medium text-white/80 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.04]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 text-[11px]">
                  ▶
                </span>

                <span>
                  Watch Our Vision
                  <span className="ml-2 text-[9px] uppercase tracking-[0.2em] text-white/40">
                    2 MIN
                  </span>
                </span>
              </a>

            </div>

          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative flex min-h-[480px] items-center justify-center lg:min-h-[620px]">

            {/* Glow behind image */}
            <div className="pointer-events-none absolute h-[400px] w-[400px] " />

            {/* =========================================
                DUMMY IMAGE
                Replace this div with your actual image
                ========================================= */}
            <div className="relative z-10 flex w-full max-w-[650px] items-center justify-center">

              <div className="relative aspect-[4/5] w-full max-w-[560px] overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.02]">

                {/* Replace with your image */}
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-[#7C7CFF]/40 bg-[#6D35F5]/10 text-4xl text-[#9C8CFF] shadow-[0_0_60px_rgba(100,80,255,0.25)]">
                      ✦
                    </div>

                    <p className="text-sm font-medium text-white/50">
                      Photonics Brain
                    </p>

                    <p className="mt-2 text-xs text-white/25">
                      Add your image here
                    </p>
                  </div>
                </div>

            
            

                <Image
                  src="/images/photonic-hero.png"
                  alt="Photonics Brain"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}


/* =========================================
   FLOW COMPONENTS
   ========================================= */

function FlowItem({
  icon,
  title,
  subtitle,
}: {
  icon: string
  title: string
  subtitle: string
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center text-center">

      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#7C8CFF]/40 bg-white/[0.02] text-xl text-[#91A7FF] shadow-[0_0_25px_rgba(100,100,255,0.12)]">
        {icon}
      </div>

      <h3 className="mt-3 text-[13px] font-medium text-white/90">
        {title}
      </h3>

      <p className="mt-1 text-[10px] text-white/35">
        {subtitle}
      </p>

    </div>
  )
}


function FlowArrow() {
  return (
    <div className="mx-2 mb-8 shrink-0 text-lg text-white/50">
      →
    </div>
  )
}