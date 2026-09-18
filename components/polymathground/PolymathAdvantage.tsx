"use client";

import {
  ArrowRight,
  Layers3,
  Network,
  Boxes,
  Lightbulb,
} from "lucide-react";

const advantages = [
  {
    number: "01",
    title: "Think Across Domains",
    description:
      "Explore ideas beyond boundaries and combine knowledge from different fields.",
    action: "EXPLORE",
    icon: Layers3,
    glow: "from-violet-500/30 via-blue-500/10 to-transparent",
  },
  {
    number: "02",
    title: "Connect Patterns",
    description:
      "See relationships others miss and turn insights into meaningful opportunities.",
    action: "DISCOVER",
    icon: Network,
    glow: "from-blue-500/30 via-violet-500/10 to-transparent",
  },
  {
    number: "03",
    title: "Solve Complex Problems",
    description:
      "Bring multiple perspectives together to tackle real-world challenges.",
    action: "BUILD",
    icon: Boxes,
    glow: "from-indigo-500/30 via-purple-500/10 to-transparent",
  },
  {
    number: "04",
    title: "Create New Possibilities",
    description:
      "Turn your unique perspective into innovative solutions for a better tomorrow.",
    action: "INNOVATE",
    icon: Lightbulb,
    glow: "from-purple-500/30 via-fuchsia-500/10 to-transparent",
  },
];

export default function PolymathAdvantage() {
  return (
    <section className="relative overflow-hidden bg-[#050817] py-24 text-white sm:py-28 lg:py-32">
      {/* Background atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-[-20%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#4f46e5]/10 blur-[160px]" />

        <div className="absolute bottom-[-20%] left-[10%] h-[500px] w-[500px] rounded-full bg-[#7c3aed]/10 blur-[160px]" />

        <div className="absolute bottom-[-20%] right-[5%] h-[500px] w-[500px] rounded-full bg-[#2563eb]/10 blur-[160px]" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-12">
        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div className="mb-7 flex items-center justify-center gap-7">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#8b5cf6]" />

            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#a78bfa] sm:text-xs">
              THE POLYMATH{" "}
              <span className="text-white/80">ADVANTAGE</span>
            </p>

            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#60a5fa]" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-5xl lg:text-[68px]">
            <span className="text-white">From Specialists to</span>
            <br />

            <span className="bg-gradient-to-r from-[#a855f7] via-[#8b5cf6] to-[#60a5fa] bg-clip-text text-transparent">
              Connected Thinkers
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-[#a8b4d0] sm:text-lg sm:leading-8">
            AGIx helps you go beyond silos — bringing knowledge, people and
            tools together so you can see the bigger picture and create
            greater impact.
          </p>
        </div>

        {/* ================= CARDS ================= */}

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {advantages.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group relative min-h-[430px] overflow-hidden rounded-[24px] border border-[#3558a0]/70 bg-[#091126]/80 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#657fff]/80 hover:shadow-[0_20px_80px_rgba(79,70,229,0.18)] sm:p-8"
              >
                {/* Card glow */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.glow} opacity-30 transition-opacity duration-500 group-hover:opacity-60`}
                />

                {/* Bottom glow */}
                <div
                  className="pointer-events-none absolute bottom-[-80px] left-1/2 h-[180px] w-[280px] -translate-x-1/2 rounded-full bg-[#4f46e5]/15 blur-[80px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex h-full flex-col">
                  {/* Number */}
                  <span className="text-[17px] font-medium tracking-[0.12em] text-[#91a9e5]">
                    {item.number}
                  </span>

                  {/* Visual */}
                  <div className="relative flex h-[165px] items-center justify-center">
                    {/* orbit */}
                    <div className="absolute h-[125px] w-[125px] rounded-full border border-[#647cff]/20" />

                    <div className="absolute h-[90px] w-[90px] rounded-full border border-[#8b5cf6]/20" />

                    {/* glow */}
                    <div className="absolute h-[90px] w-[90px] rounded-full bg-[#6366f1]/20 blur-[35px]" />

                    {/* icon container */}
                    <div className="relative flex h-[92px] w-[92px] items-center justify-center rounded-[22px] border border-[#7184ff]/40 bg-gradient-to-br from-[#435ee8]/40 via-[#7c3aed]/30 to-[#101a40] shadow-[0_0_45px_rgba(99,102,241,0.25)] transition-transform duration-500 group-hover:scale-105">
                      <Icon
                        className="h-12 w-12 text-[#a9b7ff]"
                        strokeWidth={1.3}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-2">
                    <h3 className="text-[24px] font-semibold leading-[1.12] tracking-[-0.025em] text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-[300px] text-[16px] leading-6 text-[#9aa9c8]">
                      {item.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-7">
                    <a
                      href="#"
                      className="group/cta inline-flex items-center gap-4"
                    >
                      <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full border border-[#6385ff] bg-[#101c40] text-white transition-all duration-300 group-hover/cta:bg-[#4f63d9] group-hover/cta:shadow-[0_0_25px_rgba(99,102,241,0.35)]">
                        <ArrowRight
                          className="h-5 w-5 transition-transform duration-300 group-hover/cta:translate-x-1"
                          strokeWidth={1.5}
                        />
                      </span>

                      <span className="text-[11px] font-medium tracking-[0.3em] text-white/90">
                        {item.action}
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ================= BOTTOM LABEL ================= */}

        <div className="mt-12 flex items-center justify-center gap-6">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#8b5cf6]" />

          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#8fa0c5] sm:text-[11px]">
            BROADER THINKING. BRIGHTER TOMORROWS.
          </p>

          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#60a5fa]" />
        </div>
      </div>
    </section>
  );
}