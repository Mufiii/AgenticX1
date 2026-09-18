"use client";

import Image from "next/image";

export default function AIReadinessSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-violet-100/40 blur-3xl" />
        <div className="absolute right-[-180px] bottom-[-180px] h-[600px] w-[600px] rounded-full bg-indigo-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden  sm:rounded-[32px]">

          {/* Decorative background curves */}
          <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full border border-violet-100/80" />
          <div className="pointer-events-none absolute -right-40 -bottom-40 h-[600px] w-[600px] rounded-full border border-violet-100/70" />

          <div className="grid min-h-[680px] items-center lg:grid-cols-[0.9fr_1.1fr]">

            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}
            <div className="relative z-10 px-7 py-14 sm:px-12 lg:px-14 xl:px-16 lg:py-20">

      

              {/* Heading */}
              <h2 className="max-w-[650px] text-[clamp(2.75rem,5vw,4.375rem)] font-medium leading-[0.98] tracking-[-0.035em] text-[#10143A]">
                Is Your
                <br />
                Organization
                <br />
                Ready for the
                <br />
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Agentic Era?
                </span>
              </h2>
                <div className="flex flex-col gap-4 mt-3">
              {/* First paragraph */}
              <p className=" max-w-[500px] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              AI readiness starts with the right foundations. Align your people, data, workflows and 
              governance to turn AI capability into real business impact.
              </p>

              
            </div>
            </div>

            {/* =====================================================
                RIGHT IMAGE
            ===================================================== */}
            <div className="relative flex min-h-[520px] items-center justify-center px-5 py-10 sm:min-h-[600px] sm:px-8 lg:min-h-[680px] lg:px-6">

              {/* Soft glow behind image */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-200/30 blur-[100px]" />

              {/* Orbit rings behind image */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-200/50" />

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-100/60" />

              {/* =================================================
                  REPLACE THIS IMAGE
                  
                  Put your image in:
                  /public/images/ai-readiness.png
                  ================================================= */}
              <div className="relative z-10 w-full max-w-[760px]">
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