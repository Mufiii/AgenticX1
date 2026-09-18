import Image from "next/image";

export default function HumanOperatingSystem() {
  return (
    <section className="relative overflow-hidden bg-[#050711] py-24 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Content */}
        <div className="mx-auto max-w-4xl text-center">

          {/* Label */}
          <div className="mb-6 flex items-center justify-center gap-4">

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#a9a3ff]">
              Human Operating System
            </span>

          </div>

          {/* Title */}
          <h2 className="text-4xl font-semibold leading-[1.16] tracking-tight text-white sm:text-5xl lg:text-6xl mb-3">
            The Intelligence Layer Between
            <br />
            <span className="bg-gradient-to-r from-white via-[#a78bfa] to-[#7c5cff] bg-clip-text text-transparent">
               You and Your Digital World.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            A Human Operating System that connects your digital twin,
            AI agents, data and connected systems into one coordinated
            intelligence layer.
          </p>
        </div>

        {/* Diagram */}
        <div className="relative mx-auto mt-14 flex max-w-6xl items-center justify-center lg:mt-20">

          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6d4aff]/20 blur-[130px]" />

          {/* Image */}
          <div className="relative w-full">
            <Image
              src="/images/humanos.png"
              alt="Human Operating System"
              width={1400}
              height={800}
              priority
              className="h-auto w-full object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}