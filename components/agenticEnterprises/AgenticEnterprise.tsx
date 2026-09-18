import Image from "next/image";

export default function AgenticEnterprise() {
  return (
    <section className="relative overflow-hidden bg-[#050711] py-24 lg:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6d4aff]/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT — Content */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#7c5cff]" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#a9a3ff]">
                Agentic Enterprise
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build a Business
              <br />
              That{" "}
              <span className="bg-gradient-to-r from-[#ffffff] via-[#a78bfa] to-[#7c5cff] bg-clip-text text-transparent">
                Thinks, Acts & Learns.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-lg text-base leading-7 text-white/60 sm:text-lg">
              AgenticX connects your business goals, knowledge, AI agents and
              systems into one intelligent enterprise.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#explore"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#6d4aff] to-[#4f7cff] px-7 py-3.5 text-sm font-medium text-white shadow-[0_0_35px_rgba(109,74,255,0.3)] transition hover:shadow-[0_0_45px_rgba(109,74,255,0.5)]"
              >
                Explore Agentic Enterprise
                <span className="text-lg transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition hover:border-[#8b6cff] hover:bg-white/5"
              >
                Talk to Us
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT — Diagram Image */}
          <div className="relative flex min-h-[360px] items-center justify-center lg:min-h-[520px]">
            
            {/* Glow behind diagram */}
            <div className="absolute h-72 w-72 rounded-full bg-[#6d4aff]/20 blur-[120px]" />

            <div className="relative w-full">
              <Image
                src="/images/agentic-enterprise.png"
                alt="Agentic Enterprise architecture"
                width={800}
                height={500}
                priority
                className="h-[600px] w-full object-contain"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}