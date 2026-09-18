"use client";

import { ArrowUpRight } from "lucide-react";

export default function PolymathGroundHero() {
  return (
    <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden bg-black px-6 pb-24 pt-32 text-white sm:min-h-[600px] sm:pt-36">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[140px]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Eyebrow */}
        <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-[#a78bfa]">
          POLYMATHGROUND
        </p>

        {/* Headline */}
        <h2 className="text-4xl font-medium leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-[64px]">
          Building Multidisciplinary Minds
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-white via-[#c4b5fd] to-[#8B5CF6] bg-clip-text text-transparent">
            {" "}for the AI Era.
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
          Develop employees who can understand across disciplines, connect
          ideas, and solve complex problems with AI and emerging technology.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-full bg-[#8B5CF6] px-7 py-3.5 text-sm font-medium text-black transition-all duration-300  hover:text-white"
          >
            Explore PolymathGround
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.8}
            />
          </a>
        </div>
      </div>
    </section>
  );
}