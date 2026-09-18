import Image from 'next/image'

export function DigitalTwinHero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] text-white">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#4f46e5]/10 blur-[140px]" />
        <div className="absolute right-[15%] top-[15%] h-[450px] w-[450px] rounded-full bg-[#6366f1]/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.95fr] lg:gap-12">
          
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div className="max-w-[720px]">
            
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-4">

              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#9d91ff]">
                AI DIGITAL TWIN
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[720px] text-[clamp(3rem,6vw,5.8rem)] font-normal leading-[0.98] tracking-[-0.065em] mb-3">
            AI Digital Twin
            </h1>

            <p className="mt-5 max-w-[680px] text-[17px] leading-[1.7] text-[#b5bdd3] sm:text-[18px]">
              AI Digital Twin brings the authorized parts of that information
              together into one intelligent personal layer designed to help
              you understand yourself, make better decisions and interact with
              AI with greater context.
            </p>

            {/* Positioning line */}
            <div className="mt-8 flex items-center gap-4">

              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#a9a1d8]">
                Your Identity. Your Intelligence. Your Control.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#digital-twin"
                className="
                  group
                  inline-flex
                  h-[54px]
                  items-center
                  justify-center
                  gap-5
                  rounded-full
                  bg-gradient-to-r
                  from-[#4f8cff]
                  via-[#6455ff]
                  to-[#9b4dff]
                  px-7
                  text-[15px]
                  font-medium
                  text-white
                  shadow-[0_0_35px_rgba(99,91,255,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_0_45px_rgba(99,91,255,0.4)]
                "
              >
                <span>Explore Your Digital Twin</span>

                <span className="text-[20px] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#how-it-works"
                className="
                  inline-flex
                  h-[54px]
                  items-center
                  justify-center
                  gap-4
                  rounded-full
                  border
                  border-[#5d62a8]
                  bg-white/[0.02]
                  px-7
                  text-[15px]
                  font-medium
                  text-[#e5e7f5]
                  transition-all
                  duration-300
                  hover:border-[#8b7cff]
                  hover:bg-white/[0.05]
                "
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#7277b7]">
                  <span className="ml-0.5 text-[11px]">▶</span>
                </span>

                <span>See How It Works</span>
              </a>
            </div>
          </div>

          {/* =====================================================
              RIGHT IMAGE
              Replace the src with your manually added image.
          ====================================================== */}
          <div className="relative flex min-h-[480px] items-center justify-center lg:min-h-[620px]">
            
            {/* Image glow */}
            <div
              aria-hidden="true"
              className="
                absolute
                right-[10%]
                top-[25%]
                h-[320px]
                w-[320px]
                rounded-full
                bg-[#4f46e5]/20
                blur-[120px]
              "
            />

            {/* 
              MANUALLY ADD YOUR IMAGE HERE

              Example:
              src="/images/digital-twin-hero.png"
            */}
            <div className="relative z-10 w-full max-w-[650px]">
              <Image
                src="/images/digi-twin.png"
                alt="AI Digital Twin"
                width={900}
                height={900}
                priority
                className="
                  h-auto
                  w-full
                  object-contain
                  drop-shadow-[0_0_45px_rgba(79,70,229,0.18)]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}