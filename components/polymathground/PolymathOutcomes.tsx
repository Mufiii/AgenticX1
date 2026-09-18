"use client";

import { ArrowUpRight } from "lucide-react";

const outcomes = [
  {
    number: "01",
    title: "More Adaptive Teams",
    description:
      "Employees who can learn beyond their existing role and adapt across disciplines, technologies and changing business needs.",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    number: "02",
    title: "Better Problem Solving",
    description:
      "Teams capable of connecting perspectives across functions to understand complex problems and develop better solutions.",
    accent: "from-blue-500 to-violet-500",
  },
  {
    number: "03",
    title: "Stronger Innovation",
    description:
      "Cross-disciplinary thinking creates new approaches, unexpected connections and opportunities for meaningful innovation.",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    number: "04",
    title: "AI-Ready Workforce",
    description:
      "People equipped to understand, collaborate with and work alongside increasingly capable AI systems.",
    accent: "from-fuchsia-500 to-cyan-400",
  },
];

export default function PolymathOutcomes() {
  return (
    <section className="relative overflow-hidden bg-[#030817] text-white">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {/* Ambient glow */}
        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[150px]" />

        <div className="absolute bottom-[-200px] left-[-150px] h-[450px] w-[450px] rounded-full bg-cyan-500/[0.05] blur-[130px]" />

        <div className="absolute right-[-150px] top-[35%] h-[450px] w-[450px] rounded-full bg-blue-600/[0.05] blur-[130px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-5">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-violet-500" />

            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-violet-300">
              The Outcome
            </span>

            <span className="h-px w-14 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          {/* Heading */}
          <h2 className="mt-7 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-[64px]">
            What Organizations
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              Can Build.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-[16px] leading-7 text-white/50 sm:text-[18px]">
            Polymath thinking is not just about knowing more. It is about
            building people and teams capable of navigating complexity,
            technology and change.
          </p>

          {/* Divider */}
          <div className="mx-auto mt-9 h-[2px] w-20 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
        </div>

        {/* Outcomes */}
        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {outcomes.map((outcome) => (
            <article
              key={outcome.number}
              className="group relative min-h-[360px] overflow-hidden rounded-[24px] border border-white/[0.09] bg-white/[0.025] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-white/[0.18] hover:bg-white/[0.045]"
            >
              {/* Hover glow */}
              <div
                className={`pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-gradient-to-br ${outcome.accent} opacity-0 blur-[90px] transition-opacity duration-500 group-hover:opacity-30`}
              />

              {/* Number */}
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[12px] tracking-[0.25em] text-white/30">
                  {outcome.number}
                </span>

                <ArrowUpRight
                  className="h-5 w-5 text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  strokeWidth={1.5}
                />
              </div>

              {/* Gradient line */}
              <div
                className={`mt-8 h-[2px] w-10 rounded-full bg-gradient-to-r ${outcome.accent} transition-all duration-500 group-hover:w-20`}
              />

              {/* Content */}
              <div className="relative mt-8">
                <h3 className="text-[25px] font-medium leading-[1.15] tracking-[-0.035em] text-white">
                  {outcome.title}
                </h3>

                <p className="mt-5 text-[15px] leading-7 text-white/45">
                  {outcome.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div
                className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${outcome.accent} transition-all duration-500 group-hover:w-full`}
              />
            </article>
          ))}
        </div>  
      </div>
    </section>
  );
}