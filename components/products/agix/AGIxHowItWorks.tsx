import { Bot, Compass, GitBranch, Link2, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Connect your approved information and services.",
    icon: Link2,
  },
  {
    number: "02",
    title: "Discover",
    description: "Access knowledge, agents, learning and services.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Interact",
    description: "Work with specialized AI agents.",
    icon: Bot,
  },
  {
    number: "04",
    title: "Orchestrate",
    description: "Coordinate information and capabilities through AGIx.",
    icon: GitBranch,
  },
  {
    number: "05",
    title: "Evolve",
    description: "Build richer personal intelligence over time.",
    icon: Sparkles,
  },
] as const;

export default function AGIxHowItWorks() {
  return (
    <section className="relative bg-black py-24 text-white sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />
        <div className="absolute bottom-[-18%] right-[8%] h-[320px] w-[320px] rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="mx-auto mb-16 max-w-4xl text-center sm:mb-20">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-white/45">
            HOW IT WORKS
          </p>

          <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-[58px]">
            One Interface.
            <span className="mt-1 block">Many Intelligent Connections.</span>
          </h2>

          <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-violet-600 to-cyan-400" />
        </div>

        <ol className="relative grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-12 xl:grid-cols-5 xl:gap-0">
          <div
            className="pointer-events-none absolute bottom-6 left-[29px] top-6 w-px bg-gradient-to-b from-violet-400/40 via-violet-400/20 to-cyan-400/30 md:hidden"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-[8%] right-[8%] top-[29px] hidden h-px bg-gradient-to-r from-transparent via-violet-400/45 to-transparent xl:block"
            aria-hidden="true"
          />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <li
                key={step.number}
                className="group relative flex gap-5 xl:flex-col xl:items-center xl:gap-5 xl:px-5 xl:text-center 2xl:px-7"
              >
                <div className="relative z-10 flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border border-violet-400/25 bg-black text-violet-300 shadow-[0_0_0_8px_#000] transition-all duration-300 group-hover:border-violet-400/60 group-hover:text-violet-200 group-hover:shadow-[0_0_0_8px_#000,0_0_28px_rgba(139,92,246,0.28)]">
                  <Icon size={22} strokeWidth={1.7} />
                </div>

                <div className="min-w-0 pt-1 xl:pt-2">
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-violet-300/80">
                    {step.number}
                  </p>
                  <h3 className="mt-2 text-[26px] font-semibold leading-tight tracking-[-0.03em] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[32ch] text-[15px] leading-[1.65] text-white/50 xl:mx-auto">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
