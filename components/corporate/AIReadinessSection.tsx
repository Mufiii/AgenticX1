"use client";

import Image from "next/image";

export default function AIReadinessSection() {
  return (
    <section className="relative isolate overflow-hidden bg-black py-20 text-white sm:py-24 lg:py-28">
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================= */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        {/* Violet glow */}
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[120px]" />

        {/* Indigo glow */}
        <div className="absolute bottom-[-180px] right-[-180px] h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-[140px]" />

        {/* Very subtle center glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/[0.03] blur-[150px]" />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}
      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden bg-black sm:rounded-[32px]">
          {/* =====================================================
              DECORATIVE ORBIT RINGS
          ===================================================== */}
          <div
            className="pointer-events-none absolute -left-32 -top-32 z-0 h-[420px] w-[420px] rounded-full border border-white/[0.06]"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -left-24 -top-24 z-0 h-[320px] w-[320px] rounded-full border border-violet-500/[0.08]"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-40 -right-40 z-0 h-[600px] w-[600px] rounded-full border border-white/[0.06]"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-24 -right-24 z-0 h-[420px] w-[420px] rounded-full border border-violet-500/[0.08]"
            aria-hidden="true"
          />

          {/* =====================================================
              MAIN GRID
          ===================================================== */}
          <div className="relative z-10 grid min-h-[680px] items-center lg:grid-cols-[0.9fr_1.1fr]">
            {/* ===================================================
                LEFT CONTENT
            =================================================== */}
            <div className="relative z-20 px-7 py-14 sm:px-12 lg:px-14 lg:py-20 xl:px-16">
              {/* Eyebrow */}
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-violet-500" />

                <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-violet-300">
                  AI Readiness
                </span>

                <span className="h-px w-10 bg-violet-500/40" />
              </div>

              {/* Heading */}
              <h2 className="max-w-[650px] text-[clamp(2.75rem,5vw,4.375rem)] font-medium leading-[0.98] tracking-[-0.045em] text-white">
                Is Your
                <br />
                Organization
                <br />
                Ready for the
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
                  Agentic Era?
                </span>
              </h2>

              {/* Description */}
              <p className="mt-8 max-w-[520px] text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
                AI readiness starts with the right foundations. Align your
                people, data, workflows and governance to turn AI capability
                into real business impact.
              </p>

              {/* Supporting points */}
              <div className="mt-10 space-y-5">
                {/* Point 01 */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  </div>

                  <p className="text-sm leading-6 text-white/45">
                    Align people, processes and intelligent systems.
                  </p>
                </div>

                {/* Point 02 */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-purple-400/30 bg-purple-500/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                  </div>

                  <p className="text-sm leading-6 text-white/45">
                    Build the infrastructure required for responsible AI.
                  </p>
                </div>

                {/* Point 03 */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-indigo-400/30 bg-indigo-500/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  </div>

                  <p className="text-sm leading-6 text-white/45">
                    Move from AI experimentation to measurable outcomes.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/10"
                >
                  Explore AI Readiness

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* ===================================================
                RIGHT VISUAL
            =================================================== */}
            <div className="relative flex min-h-[520px] items-center justify-center px-5 py-10 sm:min-h-[600px] sm:px-8 lg:min-h-[680px] lg:px-6">
              {/* =================================================
                  IMAGE GLOW
              ================================================= */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[110px]"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[80px]"
                aria-hidden="true"
              />

              {/* =================================================
                  ORBIT RINGS
              ================================================= */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/20"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[670px] w-[670px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/[0.06]"
                aria-hidden="true"
              />

              {/* =================================================
                  ORBIT DOTS
              ================================================= */}
              <div
                className="pointer-events-none absolute left-[20%] top-[25%] h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(139,92,246,0.8)]"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute right-[18%] top-[35%] h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_16px_rgba(99,102,241,0.8)]"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute bottom-[22%] left-[27%] h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_16px_rgba(168,85,247,0.8)]"
                aria-hidden="true"
              />

              {/* =================================================
                  IMAGE
              ================================================= */}
              <div className="relative z-20 w-full max-w-[760px]">
                <Image
                  src="/images/readiness.png"
                  alt="AI Readiness framework"
                  width={1200}
                  height={1000}
                  priority
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}