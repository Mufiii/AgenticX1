import { ArrowRight, Play } from "lucide-react";

export default function AgenticBrainHero() {
  return (
    <section className="relative overflow-hidden bg-[#080812] text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-[-180px] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[140px]" />

        <div className="absolute right-[-200px] top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full bg-violet-600/10 blur-[160px]" />

        <div className="absolute bottom-[-250px] left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-purple-600/[0.08] blur-[150px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto flex min-h-[720px] w-full max-w-[1500px] items-center px-6 py-20 sm:px-10 lg:px-14 xl:px-16">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] xl:gap-20">

          {/* ================= LEFT ================= */}
          <div className="relative z-10 max-w-[650px]">

            {/* Eyebrow */}
            <div className="mb-8 flex items-center gap-4">

              <span className="text-[10px] px-3 py-1 rounded-full bg-violet-300/10 font-medium uppercase tracking-[0.35em] text-violet-300">
                AGENTIC BRAIN
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[clamp(3.2rem,6vw,6.5rem)] font-normal leading-[0.91] tracking-[-0.065em] mb-3 space-y-2">
              Agentic Brain
              <br />

              {/* <span className="bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#C4B5FD] bg-clip-text text-transparent">
                Every Goal.
              </span>

              <br />

              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#C4B5FD] bg-clip-text text-transparent">
                Every Agent.
              </span> */}
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[570px] text-[16px] leading-[1.7] text-white/55 sm:text-[18px]">
              Agentic Brain is a personalized intelligence layer that connects
              your goals, knowledge, personality, AI agents and digital tools
              into one human-directed system.
            </p>

            {/* Secondary statement */}
            <p className="mt-5 max-w-[550px] text-[15px] leading-[1.7] text-white/45 sm:text-[17px]">
              <span className="font-medium text-white/80">
                Learn. Work. Create. Scale.
              </span>{" "}
              — with intelligence that grows with you.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-4">

              {/* Primary */}
              <button
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-full
                  bg-gradient-to-r
                  from-[#7C3AED]
                  to-[#8B5CF6]
                  px-7
                  py-3.5
                  text-sm
                  font-medium
                  shadow-[0_0_35px_rgba(124,58,237,0.35)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_0_50px_rgba(124,58,237,0.5)]
                "
              >
                Explore Agentic Brain

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              {/* Secondary */}
              <button
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.025]
                  px-6
                  py-3.5
                  text-sm
                  text-white/75
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-violet-400/50
                  hover:bg-white/[0.05]
                "
              >
                <span className="flex size-7 items-center justify-center rounded-full border border-violet-400/40">
                  <Play
                    size={11}
                    fill="currentColor"
                    className="ml-0.5 text-violet-300"
                  />
                </span>

                See How It Works
              </button>
            </div>

            {/* Bottom micro text */}
            <div className="mt-10 flex flex-wrap items-center gap-3 text-[9px] font-medium uppercase tracking-[0.28em] text-violet-300/60">
              <span>Your Goals</span>
              <span>•</span>
              <span>Your Knowledge</span>
              <span>•</span>
              <span>Your AI</span>
              <span>•</span>
              <span>All In Sync</span>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative flex min-h-[500px] items-center justify-center lg:min-h-[650px]">

            {/* Ambient glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[110px]" />

            {/* Orbit rings behind image */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[90%] max-w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/[0.10]" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[72%] max-w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/[0.12]" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[52%] max-w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/[0.15]" />

            {/* =========================================
                DUMMY IMAGE
                Replace /agentic-brain.png with your image
               ========================================= */}
            <div className="relative z-10 flex w-full max-w-[700px] items-center justify-center">

              <img
                src="/images/agentic-brain.png"
                alt="Agentic Brain"
                className="
                  relative
                  z-10
                  h-auto
                  w-full
                  object-contain
                  drop-shadow-[0_0_45px_rgba(124,58,237,0.25)]
                "
              />

            </div>

            {/* Top right label */}
            <div className="absolute right-0 top-[8%] hidden text-right lg:block">
              <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-violet-300/70">
                A More Intelligent You
              </p>
            </div>

            {/* Bottom right label */}
            <div className="absolute bottom-[10%] right-0 hidden text-right lg:block">
              <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-violet-300/70">
                A More Capable You
              </p>

              <div className="ml-auto mt-3 h-px w-12 bg-violet-400/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
