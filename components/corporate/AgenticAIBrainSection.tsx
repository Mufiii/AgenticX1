"use client";

import Image from "next/image";

export default function AgenticAIBrainSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-violet-100/50 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-[32px] border border-violet-200/70 bg-white/80 shadow-[0_20px_80px_rgba(91,61,255,0.08)] backdrop-blur-sm">
          
          {/* Decorative curves */}
          <div className="pointer-events-none absolute -left-32 -top-32 h-[450px] w-[450px] rounded-full border border-violet-100" />
          <div className="pointer-events-none absolute -right-40 -bottom-40 h-[600px] w-[600px] rounded-full border border-violet-100" />

          <div className="grid min-h-[650px] items-center lg:grid-cols-2">
            
            {/* ================= LEFT CONTENT ================= */}
            <div className="relative z-10 px-8 py-14 sm:px-12 lg:px-16 lg:py-20">
              

              {/* Heading */}
              <h2 className="max-w-[600px] text-[clamp(2.75rem,5vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.035em] text-slate-950">
                Intelligence
                <br />
                that works
                <br />
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  around you.
                </span>
              </h2>

              {/* Description */}
              <p className="mt-8 max-w-[590px] text-lg leading-8 text-slate-600 lg:text-xl">
                Every employee works differently. Agentic AI Brain creates a
                personalized intelligence layer that connects goals, knowledge,
                workflows and approved systems.
              </p>

              {/* Capability flow */}
              <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-3 text-sm font-medium text-slate-700 sm:text-base">
                <span>Learn</span>
                <span className="text-violet-500">•</span>

                <span>Research</span>
                <span className="text-violet-500">•</span>

                <span>Plan</span>
                <span className="text-violet-500">•</span>

                <span>Communicate</span>
                <span className="text-violet-500">•</span>

                <span>Execute</span>
                <span className="text-violet-500">•</span>

                <span>Develop</span>
              </div>
            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <div className="relative flex min-h-[500px] items-center justify-center px-6 py-10 lg:min-h-[650px] lg:px-8">
              
              {/* Soft image glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-200/30 blur-[90px]" />

              {/* Decorative orbit */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-200/60" />

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-100/70" />

              {/* 
                MANUALLY PLACE YOUR IMAGE HERE

                Replace:
                /images/agentic-ai-brain.png

                with your actual image path.
              */}
              <div className="relative z-10 w-full max-w-[680px]">
                <Image
                  src="/corp-brain.png"
                  alt="Agentic AI Brain"
                  width={1000}
                  height={800}
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