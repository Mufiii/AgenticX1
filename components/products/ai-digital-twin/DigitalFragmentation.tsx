import Image from 'next/image'

const fragmentedData = [
  {
    title: 'Health',
    items: 'Sleep · Activity · Recovery',
  },
  {
    title: 'Knowledge',
    items: 'Skills · Education · Experience',
  },
  {
    title: 'Finance',
    items: 'Income · Expenses · Goals',
  },
  {
    title: 'Identity',
    items: 'Voice · Communication · Presence',
  },
]

export function DigitalFragmentation() {
  return (
    <section className="relative overflow-hidden bg-[#08080d] text-white">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[30%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#6D35F5]/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div
          className="mx-auto max-w-[900px] text-center"
          data-campus-reveal
        >
          {/* Eyebrow */}
          <div className="mb-6 flex items-center justify-center gap-4">

            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#A99AFF] sm:text-[11px]">
              The Problem
            </span>

          </div>
          <div className="flex items-center justify-center gap-4 max-w-[720px] mx-auto"> 



          {/* Title */}
          <h2 className="text-[clamp(2.6rem,6vw,5.5rem)] font-normal leading-[0.98] tracking-[-0.06em] mb-3">
            Your Digital Life
            <br />

            <span className="bg-gradient-to-r from-white via-[#C4B5FD] to-[#8B6CFF] bg-clip-text text-transparent">
              Is Fragmented.
            </span>
          </h2>
          </div>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-[700px] text-[16px] leading-[1.7] text-white/55 sm:text-[18px]">
            Your knowledge, health, finances and identity live across
            disconnected systems that rarely understand how they connect.
          </p>
        </div>

        {/* =====================================================
            IMAGE
        ====================================================== */}
        <div
          className="relative mx-auto mt-16 flex justify-center sm:mt-20 lg:mt-10"
          data-campus-reveal
        >
          {/* Very subtle glow behind image */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6D35F5]/10 blur-[120px]" />

          {/* Transparent image */}
          <div className="relative w-full max-w-[1100px]">
            <Image
              src="/images/fragmen.png"
              alt="Fragmented digital life"
              width={1600}
              height={900}
              priority
              className="
                relative
                h-auto
                w-full
                object-contain
              "
            />
          </div>
        </div>



      </div>
    </section>
  )
}