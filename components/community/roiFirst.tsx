"use client";

import {
  BarChart3,
  FileText,
  PieChart,
  Settings,
  Target,
  User,
  Zap,
} from "lucide-react";

const outcomes = [
  {
    icon: FileText,
    title: "AI Strategy",
    label: "Clarity",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    label: "Insights",
  },
  {
    icon: Settings,
    title: "Automation",
    label: "Execution",
  },
  {
    icon: Target,
    title: "Measurable ROI",
    label: "Real Impact",
  },
] as const;

const identifies = [
  {
    number: "01",
    icon: BarChart3,
    title: "Revenue Opportunities",
    description: "Where more value can be created.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Operational Bottlenecks",
    description: "Where time, money and effort are being lost.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Automation Opportunities",
    description: "Which processes can be responsibly delegated to AI.",
  },
  {
    number: "04",
    icon: User,
    title: "Customer Intelligence",
    description: "Which customers, products and journeys create the greatest value.",
  },
  {
    number: "05",
    icon: PieChart,
    title: "Performance Intelligence",
    description: "Where AI can improve productivity, conversion and profitability.",
  },
] as const;

export default function RoiFirst() {
  return (
    <section
      id="roi-first"
      className="relative overflow-hidden scroll-mt-28 bg-[#050505] px-6 py-24 text-white sm:px-10 sm:py-28 lg:px-16 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-180px] top-[-220px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(99,91,255,0.22)_0%,rgba(99,91,255,0.06)_42%,transparent_70%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-120px] top-[18%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(115,85,255,0.10)_0%,transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:80px_80px]"
      />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-20">
          <div className="flex max-w-[640px] flex-col pt-2 lg:min-h-full">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#635BFF]" />
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#a5a1ff] sm:text-xs sm:tracking-[0.25em]">
                ROI-First AI Transformation
              </p>
            </div>

            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.035em] text-white">
              Turn AI Into
              <br />
              <span className="text-[#8B6CFF]">Business Value</span>
            </h2>

            <div className="mt-8 max-w-[520px] space-y-5 text-[16px] leading-[1.75] text-[#a9a9a9] sm:text-[17px] lg:text-[18px]">
              <p>AI should not become another layer of complexity.</p>
              <p>
                AgenticX starts with the business itself — understanding{" "}
                <span className="text-[#8B6CFF]">revenue</span>,{" "}
                <span className="text-[#8B6CFF]">customers</span>,{" "}
                <span className="text-[#8B6CFF]">operations</span>,{" "}
                <span className="text-[#8B6CFF]">costs</span>,{" "}
                <span className="text-[#8B6CFF]">workflows</span> and{" "}
                <span className="text-[#8B6CFF]">growth opportunities</span>{" "}
                before deciding where AI belongs.
              </p>
            </div>

            <div className="mt-14 lg:mt-auto lg:pt-16">
              <div className="mb-8 flex items-center gap-3">
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#8d8d8d] sm:text-[11px] sm:tracking-[0.24em]">
                  AI That Drives Real Outcomes
                </p>
                <span className="h-px w-10 bg-white/20" />
              </div>

              <ol className="grid grid-cols-2 justify-items-center gap-y-8 sm:flex sm:flex-wrap sm:items-start sm:justify-start sm:gap-x-5 lg:gap-x-6">
                {outcomes.map((item, index) => {
                  const Icon = item.icon;
                  const isLast = index === outcomes.length - 1;

                  return (
                    <li key={item.title} className="flex items-start">
                      <div className="flex w-[108px] flex-col items-center text-center sm:w-[118px]">
                        <div className="flex size-[62px] items-center justify-center rounded-full border border-[#635BFF]/45 bg-[#0a0914] shadow-[0_0_24px_rgba(99,91,255,0.18),inset_0_0_18px_rgba(99,91,255,0.08)] sm:size-[68px]">
                          <Icon
                            size={22}
                            strokeWidth={1.6}
                            className="text-[#b7a8ff]"
                          />
                        </div>
                        <h3 className="mt-4 text-[13px] font-medium leading-[1.25] tracking-[-0.02em] text-white sm:text-[14px]">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#6f6f7a]">
                          {item.label}
                        </p>
                      </div>

                      {!isLast ? (
                        <span
                          aria-hidden="true"
                          className="mt-[30px] hidden text-[#635BFF]/70 sm:mt-[32px] sm:inline"
                        >
                          →
                        </span>
                      ) : null}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          <div className="relative w-full lg:pt-1">
            <div className="mb-6 flex items-center gap-3 sm:pl-11 lg:justify-end lg:pr-1">
              <span className="h-px w-8 bg-[#635BFF]" />
              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#a5a1ff] sm:text-[11px]">
                What We Identify
              </p>
            </div>

            <svg
              aria-hidden="true"
              className="pointer-events-none absolute left-[6px] top-[58px] hidden h-[calc(100%-4.5rem)] w-8 sm:block"
              viewBox="0 0 32 620"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M16 6C6 80 26 150 14 220C4 280 26 340 16 400C8 450 24 510 16 580C12 600 16 612 16 614"
                stroke="url(#roi-line)"
                strokeWidth="1.5"
                strokeDasharray="2.5 6"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="roi-line" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#d8d2ff" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#7355FF" stopOpacity="0.15" />
                </linearGradient>
              </defs>
            </svg>

            <div className="space-y-3">
              {identifies.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="group relative rounded-[22px] border border-[#6b5cff]/55 bg-[linear-gradient(180deg,rgba(38,32,82,0.72)_0%,rgba(10,10,18,0.94)_100%)] px-4 py-4 shadow-[0_0_28px_rgba(99,91,255,0.16),inset_0_1px_0_rgba(214,208,255,0.16)] backdrop-blur-sm transition-all duration-300 hover:border-[#b4acff]/80 hover:shadow-[0_0_36px_rgba(99,91,255,0.28),inset_0_1px_0_rgba(214,208,255,0.24)] sm:ml-11 sm:px-5 sm:py-[15px]"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute -left-[44px] top-1/2 hidden size-[13px] -translate-y-1/2 rounded-full border-[2px] border-[#ece8ff] bg-[#050505] shadow-[0_0_0_5px_rgba(115,85,255,0.16),0_0_16px_rgba(165,148,255,0.9)] sm:block"
                    >
                      <span className="absolute inset-[2.5px] rounded-full bg-[#f2eeff]" />
                    </div>

                    <div className="flex items-center gap-3.5">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-[14px] border border-[#635BFF]/35 bg-[#635BFF]/10 text-[#b7a8ff] shadow-[0_0_18px_rgba(99,91,255,0.12)]">
                        <Icon size={18} strokeWidth={1.7} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-[15px] font-medium tracking-[-0.02em] text-white sm:text-[16px]">
                          {item.title}
                        </h3>
                        <p className="mt-1 max-w-[320px] text-[13px] leading-[1.55] text-[#9a9aa6]">
                          {item.description}
                        </p>
                      </div>

                      <span className="shrink-0 text-[12px] font-medium tracking-[0.14em] text-[#b7a8ff]/80">
                        {item.number}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
