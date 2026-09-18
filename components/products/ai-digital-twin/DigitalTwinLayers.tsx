import Image from 'next/image'

export function DigitalTwinLayers() {
  return (
    <section className="relative overflow-hidden bg-[#05060d] text-white">
      <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

        {/* Header */}
        <div
          className="mx-auto max-w-[900px] text-center"
          data-campus-reveal
        >
          {/* Eyebrow */}
          <div className="mb-6 flex items-center justify-center gap-4">

            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#A99AFF]">
              One Human. Multiple Specialized Twins.
            </span>

          </div>

          {/* Heading */}
          <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-normal leading-[0.98] tracking-[-0.055em]">
            Different Dimensions of You.
            <br />

            <span className="bg-gradient-to-r from-[#6EC8FF] via-[#8B7CFF] to-[#D05CFF] bg-clip-text text-transparent">
              One Connected Intelligence.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-[760px] text-[16px] leading-[1.7] text-white/55 sm:text-[18px]">
            The Digital Twin can be structured into specialized intelligence
            layers that connect different dimensions of your life.
          </p>
        </div>

        {/* Infographic */}
        <div
          className="relative mx-auto mt-14 w-full max-w-[1400px] sm:mt-16 lg:mt-20"
          data-campus-reveal
        >
          <Image
            src="/images/twins.png"
            alt="Personal AI Digital Twin with specialized identity, knowledge, wellness, medical, financial and brand intelligence layers"
            width={1536}
            height={1024}
            priority
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Bottom statement */}
        <div
          className="mx-auto mt-10 flex max-w-[1000px] items-center justify-center gap-5"
          data-campus-reveal
        >
          <span className="hidden h-px flex-1 bg-gradient-to-r from-transparent to-white/10 sm:block" />

          <p className="text-center text-[13px] tracking-wide text-white/40 sm:text-[14px]">
            Each layer can operate independently while contributing context
            to the larger intelligence system.
          </p>

          <span className="hidden h-px flex-1 bg-gradient-to-l from-transparent to-white/10 sm:block" />
        </div>

      </div>
    </section>
  )
}