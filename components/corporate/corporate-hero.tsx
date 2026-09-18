"use client";

import React from "react";

export default function CorporateHero() {
  return (
    <section
      id="corporate"
      className="
        relative
        min-h-[720px]
        overflow-hidden
        bg-[#050505]
        px-6
        py-28
        text-white
        sm:px-10
        sm:py-32
        lg:min-h-[760px]
        lg:px-16
        lg:py-36
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      {/* Main purple ambient glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-220px]
          h-[650px]
          w-[1000px]
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(99,91,255,0.14)_0%,rgba(99,91,255,0.05)_35%,transparent_70%)]
          blur-2xl
        "
      />

      {/* Secondary glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-300px]
          left-1/2
          h-[600px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(117,85,255,0.10)_0%,transparent_68%)]
          blur-3xl
        "
      />

      {/* Very subtle grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[560px]
          max-w-[1500px]
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        {/* Eyebrow */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#635BFF]" />

          <p
            className="
              text-[11px]
              font-medium
              uppercase
              tracking-[0.22em]
              text-[#a5a1ff]
              sm:text-xs
              sm:tracking-[0.25em]
            "
          >
            Corporate AI • Workforce Intelligence
          </p>

          <span className="h-px w-8 bg-[#635BFF]" />
        </div>

        {/* =====================================================
            MAIN HEADING
        ====================================================== */}

        <h1
          className="
            max-w-[1100px]
            text-[clamp(3rem,6.2vw,5.5rem)]
            font-medium
            leading-[0.98]
            tracking-[-0.035em]
            text-white
          "
        >
          Build a Healthier,
          <br />

          <span className="text-white">
            AI-Powered{" "}
          </span>

          <span className="text-[#7355FF]">
            Workforce
          </span>
        </h1>

        {/* =====================================================
            DESCRIPTION
        ====================================================== */}

        <p
          className="
            mt-9
            max-w-[680px]
            text-[16px]
            font-normal
            leading-[1.7]
            text-[#a9a9a9]

            sm:text-[17px]

            lg:text-[18px]
          "
        >
          The future of work is not human versus AI. It is human
          intelligence amplified by artificial intelligence. AgenticX
          helps organizations build AI-ready workforces through
          personalized intelligence, employee wellbeing, performance
          enablement and responsible AI adoption.
        </p>

        {/* =====================================================
            VALUE STATEMENT
        ====================================================== */}

        <div
          className="
            mt-8
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-3
            gap-y-2
            text-[10px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-[#8d8d8d]

            sm:text-xs
            sm:tracking-[0.2em]
          "
        >
          <span>Human Intelligence</span>

          <span className="text-[#7355FF]">+</span>

          <span>Artificial Intelligence</span>

          <span className="text-[#7355FF]">+</span>

          <span>Wellbeing</span>
        </div>

        {/* =====================================================
            CTA
        ====================================================== */}

        <div className="mt-12">
          <a
            href="#contact"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-4
              rounded-full
              border
              border-[#635BFF]
              px-8
              py-4
              text-sm
              font-medium
              text-white

              transition-all
              duration-300

              hover:bg-[#635BFF]
              hover:shadow-[0_0_40px_rgba(99,91,255,0.30)]

              sm:px-9
              sm:py-[17px]
              sm:text-base
            "
          >
            <span>
              Design Your Workforce Transformation
            </span>

            <span
              className="
                text-lg
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>
        </div>
      </div>

      {/* =========================================================
          BOTTOM FADE
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-32
          bg-gradient-to-t
          from-[#050505]
          to-transparent
        "
      />
    </section>
  );
}