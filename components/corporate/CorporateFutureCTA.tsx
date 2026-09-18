"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CorporateFutureCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#4F6FFF] via-[#635BFF] to-[#A855F7] pt-10 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/15" />
      <div className="pointer-events-none absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full border border-white/10" />

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-24">
          <div className="relative z-10 flex flex-col justify-center py-6 lg:py-12">
            <div className="mb-7 flex items-center gap-5">
              <span className="h-px w-12 bg-white" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white">
                The Future of Work
              </span>
            </div>

            <h2 className="max-w-[760px] text-[clamp(2.5rem,5vw,4.25rem)] font-medium leading-[0.98] tracking-[-0.035em] text-white">
              Build the Future of Work
              <br />
              Around People
            </h2>

            <div className="mt-8 max-w-[720px] space-y-5 text-[16px] leading-7 text-white/85 sm:text-[17px]">
              <p>
                The organizations that thrive in the Agentic and AGI era will
                not simply deploy more AI. They will create environments
                where{" "}
                <strong className="font-semibold text-white">
                  people become more capable because of AI.
                </strong>
              </p>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-4 pb-10 sm:px-8 lg:items-end lg:px-6 lg:py-4 xl:px-10">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

            <div className="relative w-full max-w-[420px]">
              <Image
                src="/images/corp-cta.png"
                alt="People-centred future of work"
                width={500}
                height={750}
                className="h-auto w-full object-contain"
                priority
              />
            </div>

            <Link
              href="#contact"
              className="group relative z-20 flex w-full max-w-[420px] items-center justify-between rounded-full bg-white px-6 py-3.5 shadow-[0_14px_40px_rgba(20,12,70,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(20,12,70,0.32)] sm:px-7 sm:py-4"
            >
              <span className="text-[20px] font-semibold tracking-[0.01em] text-[#4524d8] sm:text-medium">
                Start Your Transformation
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#635BFF] text-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
