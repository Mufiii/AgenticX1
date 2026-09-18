import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/personalizedAgents/SectionHeading";
import {
  shiftAgents,
  shiftStages,
} from "@/components/personalizedAgents/data";

export function ConceptualShift() {
  return (
    <section className="relative overflow-hidden bg-white text-[#101936]">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div
          className="
            absolute left-[-10%] top-[15%]
            h-[420px] w-[520px]
            rounded-full
            bg-[#8B5CF6]/[0.055]
            blur-[130px]
          "
        />

        <div
          className="
            absolute right-[-10%] bottom-[-5%]
            h-[420px] w-[520px]
            rounded-full
            bg-[#4F7CFF]/[0.05]
            blur-[130px]
          "
        />

        {/* Very subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(#101936 1px, transparent 1px),
              linear-gradient(90deg, #101936 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        {/* Header */}
        <SectionHeading
          tone="light"
          eyebrow="The Shift"
          headline={
            <>
              The Difference Is Context, Goals and{" "}
              <span className="bg-gradient-to-r from-[#4F7CFF] via-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent">
                Agency.
              </span>
            </>
          }
        />

        {/* Conceptual flow */}
        <div className="relative mt-20">
          {/* Desktop connecting line */}
          <div
            className="
              pointer-events-none
              absolute left-[8%] right-[8%] top-[42px]
              hidden h-px
              bg-gradient-to-r
              from-transparent
              via-[#8B5CF6]/25
              to-transparent
              lg:block
            "
            aria-hidden="true"
          />

          <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">
            {shiftStages.map((stage, index) => (
              <div key={stage.title} className="relative">
                {/* Number */}
                <div className="relative z-10 flex items-center gap-4">
                  <div
                    className="
                      flex h-[44px] w-[44px]
                      items-center justify-center
                      rounded-full
                      border border-[#8B5CF6]/20
                      bg-white
                      text-[11px]
                      font-medium
                      tracking-[0.2em]
                      text-[#8B5CF6]
                      shadow-[0_0_0_6px_rgba(139,92,246,0.035)]
                    "
                  >
                    0{index + 1}
                  </div>

                  <div className="h-px flex-1 bg-[#e9e7f0] lg:hidden" />
                </div>

                {/* Content */}
                <article className="mt-8">
                  <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#8B5CF6]">
                    {index === 0
                      ? "Foundation"
                      : index === 1
                        ? "Intelligence"
                        : "Outcome"}
                  </p>

                  <h3
                    className="
                      mt-4
                      text-[clamp(1.8rem,3vw,2.5rem)]
                      font-medium
                      leading-[1.08]
                      tracking-[-0.045em]
                      text-[#101936]
                    "
                  >
                    {stage.title}
                  </h3>

                  <p className="mt-5 max-w-md text-[15px] leading-7 text-[#64708A]">
                    {stage.description}
                  </p>
                </article>

                {/* Mobile / tablet connector */}
                {index < shiftStages.length - 1 && (
                  <div
                    className="
                      mt-8
                      flex
                      justify-center
                      lg:hidden
                    "
                    aria-hidden="true"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8B5CF6]/15 bg-[#8B5CF6]/[0.03]">
                      <ArrowDown
                        className="h-4 w-4 text-[#8B5CF6]/60"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                )}

                {/* Desktop arrow */}
                {index < shiftStages.length - 1 && (
                  <div
                    className="
                      pointer-events-none
                      absolute right-[-42px] top-[31px]
                      hidden
                      lg:block
                    "
                    aria-hidden="true"
                  >
                    <ArrowRight
                      className="h-5 w-5 text-[#8B5CF6]/45"
                      strokeWidth={1.3}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Agentic Brain bridge */}
        <div className="mt-24 lg:mt-28">
          <div className="relative overflow-hidden rounded-[28px] border border-[#e7e5ef] bg-[#fafaff] px-6 py-12 sm:px-10 sm:py-14">
            {/* Internal glow */}
            <div
              className="
                pointer-events-none
                absolute left-1/2 top-1/2
                h-[280px] w-[500px]
                -translate-x-1/2 -translate-y-1/2
                rounded-full
                bg-[#8B5CF6]/[0.06]
                blur-[100px]
              "
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-4xl text-center">
              {/* Label */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/15 bg-white px-4 py-2 shadow-sm">
                <Sparkles
                  className="h-3.5 w-3.5 text-[#8B5CF6]"
                  strokeWidth={1.5}
                />

                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#8B5CF6]">
                  Agentic Brain
                </span>
              </div>

              {/* Vertical connector */}
              <div
                className="mx-auto mt-6 h-8 w-px bg-gradient-to-b from-[#8B5CF6]/50 to-[#8B5CF6]/10"
                aria-hidden="true"
              />

              {/* Agents */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
                {shiftAgents.map((agent, index) => (
                  <div
                    key={agent}
                    className="flex items-center gap-4"
                  >
                    <span
                      className="
                        rounded-full
                        border border-[#e4e1ed]
                        bg-white
                        px-4 py-2
                        text-[12px]
                        font-medium
                        tracking-[0.04em]
                        text-[#30384f]
                        shadow-sm
                        transition-all duration-300
                        hover:border-[#8B5CF6]/25
                        hover:text-[#8B5CF6]
                      "
                    >
                      {agent}
                    </span>

                    {index < shiftAgents.length - 1 && (
                      <span
                        className="hidden text-[#c4c0d4] sm:inline"
                        aria-hidden="true"
                      >
                        ·
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Connector to person */}
              <div
                className="mx-auto mt-6 h-8 w-px bg-gradient-to-b from-[#8B5CF6]/10 to-[#8B5CF6]/50"
                aria-hidden="true"
              />

              {/* Person */}
              <div
                className="
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.32em]
                  text-[#101936]
                "
              >
                Person
              </div>
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-[17px] leading-8 text-[#52607A]">
            Personalized intelligence becomes powerful when agents can
            work together around a person&apos;s{" "}
            <span className="font-medium text-[#101936]">
              goals, context and intent.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}