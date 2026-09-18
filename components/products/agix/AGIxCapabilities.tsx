"use client";

import {
  Bot,
  BookOpen,
  GraduationCap,
  Fingerprint,
  Cloud,
  Link2,
  HeartPulse,
  Users,
  ArrowUpRight,
} from "lucide-react";

const capabilities = [
  {
    title: "AI Agents",
    description: "Interact with specialized agents for different tasks.",
    icon: Bot,
    iconBg: "bg-violet-500/15",
    iconColor: "text-violet-400",
    cardBg:
      "bg-gradient-to-br from-violet-500/20 via-violet-500/5 to-white/[0.02]",
    href: "#",
  },
  {
    title: "Knowledge",
    description: "Build and access your personal knowledge environment.",
    icon: BookOpen,
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-400",
    cardBg:
      "bg-gradient-to-br from-emerald-500/20 via-emerald-500/5 to-white/[0.02]",
    href: "#",
  },
  {
    title: "Learning",
    description: "Learn, research and develop new capabilities.",
    icon: GraduationCap,
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
    cardBg:
      "bg-gradient-to-br from-blue-500/20 via-blue-500/5 to-white/[0.02]",
    href: "#",
  },
  {
    title: "Identity",
    description: "Manage verified digital identity and credentials.",
    icon: Fingerprint,
    iconBg: "bg-fuchsia-500/15",
    iconColor: "text-fuchsia-400",
    cardBg:
      "bg-gradient-to-br from-fuchsia-500/20 via-fuchsia-500/5 to-white/[0.02]",
    href: "#",
  },
  {
    title: "Services",
    description: "Access AgenticX services and ecosystem capabilities.",
    icon: Cloud,
    iconBg: "bg-orange-500/15",
    iconColor: "text-orange-400",
    cardBg:
      "bg-gradient-to-br from-orange-500/20 via-orange-500/5 to-white/[0.02]",
    href: "#",
  },
  {
    title: "Connected Systems",
    description: "Connect approved digital tools and platforms.",
    icon: Link2,
    iconBg: "bg-cyan-500/15",
    iconColor: "text-cyan-400",
    cardBg:
      "bg-gradient-to-br from-cyan-500/20 via-cyan-500/5 to-white/[0.02]",
    href: "#",
  },
  {
    title: "Wellness & Productivity",
    description:
      "Support everyday planning, productivity and personal development.",
    icon: HeartPulse,
    iconBg: "bg-violet-500/15",
    iconColor: "text-violet-400",
    cardBg:
      "bg-gradient-to-br from-violet-500/20 via-violet-500/5 to-white/[0.02]",
    href: "#",
  },
  {
    title: "Communities",
    description: "Connect with AgenticX communities and opportunities.",
    icon: Users,
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
    cardBg:
      "bg-gradient-to-br from-blue-500/20 via-blue-500/5 to-white/[0.02]",
    href: "#",
  },
];

export default function AGIxCapabilities() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24 text-white sm:py-28 lg:py-32">
      
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/[0.06] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center sm:mb-20">

          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-white/45">
            WHAT YOU CAN DO{" "}
            <span className="text-violet-400">
              WITH AGIx
            </span>
          </p>

          <h2
            className="
              text-4xl
              font-semibold
              leading-[1.08]
              tracking-[-0.04em]
              text-white
              sm:text-5xl
              lg:text-[58px]
            "
          >
            Intelligence for Every Part of
            <br className="hidden sm:block" />
            Your Digital Life.
          </h2>

          {/* Gradient Divider */}
          <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-violet-600 to-cyan-400" />
        </div>

        {/* Capability Grid */}
        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-6
          "
        >
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                className={`
                  group
                  relative
                  flex
                  min-h-[340px]
                  flex-col
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-white/[0.08]
                  ${item.cardBg}
                  p-9
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/[0.16]
                  hover:shadow-2xl
                  hover:shadow-violet-500/10
                `}
              >

                {/* Subtle card glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-white/[0.04]
                    blur-3xl
                    transition-opacity
                    duration-300
                    group-hover:bg-white/[0.07]
                  "
                />

                {/* Icon */}
                <div
                  className={`
                    relative
                    flex
                    h-[102px]
                    w-[102px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-[30px]
                    ${item.iconBg}
                    ${item.iconColor}
                    ring-1
                    ring-white/[0.05]
                    transition-all
                    duration-300
                    group-hover:scale-105
                  `}
                >
                  <Icon
                    className="h-14 w-14"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Content */}
                <div className="relative mt-7">

                  <h3
                    className="
                      text-[27px]
                      font-semibold
                      leading-tight
                      tracking-[-0.03em]
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-[270px]
                      text-[17px]
                      leading-[1.45]
                      text-white/60
                    "
                  >
                    {item.description}
                  </p>

                </div>

                {/* Arrow */}
                <div
                  className={`
                    relative
                    mt-auto
                    pt-8
                    ${item.iconColor}
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  `}
                >
                  <ArrowUpRight
                    className="h-7 w-7"
                    strokeWidth={1.8}
                  />
                </div>

              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}