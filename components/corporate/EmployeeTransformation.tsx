"use client";

import {
  BookOpen,
  FileText,
  Network,
  TrendingUp,
  Users,
  User,
  UserRoundCog,
  ArrowRight,
} from "lucide-react";

const capabilities = [
  {
    icon: BookOpen,
    title: "AI Literacy",
    description:
      "Understand AI, its capabilities and its responsible use.",
  },
  {
    icon: FileText,
    title: "AI-Assisted Work",
    description:
      "Use AI to research, analyze, communicate and create.",
  },
  {
    icon: Network,
    title: "Agentic Workflows",
    description:
      "Work with specialized AI agents that support everyday tasks.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning",
    description:
      "Build new skills as technology and roles evolve.",
  },
  {
    icon: Users,
    title: "Human–AI Collaboration",
    description:
      "Keep human judgement at the centre while AI handles intelligence-intensive and repetitive work.",
  },
];

export default function EmployeeTransformation() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-24">
      
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#635BFF]/10 blur-3xl" />
        <div className="absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#8B5CF6]/10 blur-3xl" />

        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full border border-white/10" />
        <div className="absolute left-1/2 top-0 h-[650px] w-[1150px] -translate-x-1/2 rounded-full border border-white/[0.06]" />
      </div>

      <div className="relative mx-auto max-w-[1400px]">

        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-[clamp(2.25rem,4.5vw,3.625rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white">
            From Employees to{" "}
            <span className="bg-gradient-to-r from-[#4F6FFF] via-[#635BFF] to-[#A855F7] bg-clip-text text-transparent">
              AI-Powered Professionals
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/55 sm:text-lg">
            AI should not simply automate work. It should expand what people
            are capable of doing. AgenticX helps employees develop the skills,
            tools and intelligence required to work effectively alongside AI.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative min-h-[220px] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#635BFF]/40 hover:shadow-[0_20px_50px_rgba(99,91,255,0.12)]"
              >
                {/* subtle number */}
                <span className="absolute right-5 top-5 text-xs font-medium text-[#635BFF]/40">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/15 to-indigo-500/10">
                  <Icon
                    size={23}
                    strokeWidth={1.8}
                    className="text-[#635BFF]"
                  />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-[17px] font-medium tracking-[-0.015em] text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  {item.description}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#635BFF] to-[#A855F7] transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Transformation Journey */}
        <div className="mt-7 rounded-3xl border border-white/[0.08] bg-white/[0.03] px-6 py-8 sm:px-10 lg:px-12">
          
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            {/* Label */}
            <div className="hidden shrink-0 lg:block">
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#635BFF]">
                Transformation
              </span>

              <div className="mt-3 h-px w-5 bg-[#635BFF]/30" />

              <p className="mt-4 max-w-[130px] text-[10px] font-medium uppercase leading-5 tracking-[0.2em] text-white/40">
                Same people.
                <br />
                A brighter tomorrow.
              </p>
            </div>

            {/* Journey */}
            <div className="flex w-full flex-col items-center justify-center gap-6 sm:flex-row lg:gap-8">

              {/* Step 1 */}
              <div className="flex flex-1 flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4F6FFF]/15">
                  <User
                    size={21}
                    strokeWidth={1.8}
                    className="text-[#4F6FFF]"
                  />
                </div>

                <h4 className="mt-3 text-sm font-medium text-white">
                  Employee
                </h4>

                <span className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/40">
                  Does the work
                </span>
              </div>

              {/* Arrow */}
              <ArrowRight
                size={20}
                strokeWidth={1.5}
                className="hidden shrink-0 text-[#635BFF] sm:block"
              />

              {/* Step 2 */}
              <div className="flex flex-1 flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#635BFF]/15">
                  <UserRoundCog
                    size={21}
                    strokeWidth={1.8}
                    className="text-[#635BFF]"
                  />
                </div>

                <h4 className="mt-3 text-sm font-medium text-[#635BFF]">
                  AI-Enabled Professional
                </h4>

                <span className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/40">
                  Works with AI
                </span>
              </div>

              {/* Arrow */}
              <ArrowRight
                size={20}
                strokeWidth={1.5}
                className="hidden shrink-0 text-[#635BFF] sm:block"
              />

              {/* Step 3 */}
              <div className="flex flex-1 flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10">
                  <Users
                    size={21}
                    strokeWidth={1.8}
                    className="text-[#7C3AED]"
                  />
                </div>

                <h4 className="mt-3 text-sm font-medium text-[#6D3BE8]">
                  AI-Powered Workforce
                </h4>

                <span className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/40">
                  Achieves more together
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}