import {
    UserRound,
    BookOpen,
    Home,
    BarChart3,
    Target,
    Brain,
    Heart,
    Moon,
    Apple,
    Dumbbell,
    Leaf,
    Infinity,
    ArrowRight,
  } from "lucide-react";
  
  const twinItems = [
    { label: "Who you are", icon: UserRound },
    { label: "What you know", icon: BookOpen },
    { label: "How you live", icon: Home },
    { label: "How you perform", icon: BarChart3 },
    { label: "What you're trying to achieve", icon: Target },
  ];
  
  const agents = [
    {
      label: "Health Agent",
      icon: Heart,
      color: "text-pink-400",
      border: "border-pink-500/40",
      glow: "bg-pink-500/10",
    },
    {
      label: "Sleep Agent",
      icon: Moon,
      color: "text-indigo-300",
      border: "border-indigo-500/40",
      glow: "bg-indigo-500/10",
    },
    {
      label: "Nutrition Agent",
      icon: Apple,
      color: "text-emerald-400",
      border: "border-emerald-500/40",
      glow: "bg-emerald-500/10",
    },
    {
      label: "Fitness Agent",
      icon: Dumbbell,
      color: "text-orange-300",
      border: "border-orange-500/40",
      glow: "bg-orange-500/10",
    },
    {
      label: "Cognitive Agent",
      icon: Brain,
      color: "text-purple-400",
      border: "border-purple-500/40",
      glow: "bg-purple-500/10",
    },
    {
      label: "Lifestyle Agent",
      icon: Leaf,
      color: "text-emerald-300",
      border: "border-emerald-500/40",
      glow: "bg-emerald-500/10",
    },
    {
      label: "Longevity Agent",
      icon: Infinity,
      color: "text-cyan-300",
      border: "border-cyan-500/40",
      glow: "bg-cyan-500/10",
    },
  ];
  
  export default function DigitalTwinAgents() {
    return (
      <section className="relative overflow-hidden bg-[#050711] py-24 sm:py-28 lg:py-32">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[140px]" />
  
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
  
          {/* Section heading */}
          <div className="mx-auto mb-16 max-w-7xl text-center">
            <div className="mb-5 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-violet-500/70" />
  
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-violet-300">
                Digital Twin + AI Agents
              </span>
  
              <span className="h-px w-12 bg-violet-500/70" />
            </div>
  
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your Digital Twin Becomes the{" "}
              <span className="bg-gradient-to-r from-violet-300 to-purple-500 bg-clip-text text-transparent">
                Context.
              </span>
              <br />
  
              <span className="bg-gradient-to-r from-violet-300 to-purple-500 bg-clip-text text-transparent">
                AI Agents
              </span>{" "}
              Become the Intelligence.
            </h2>
          </div>
  
          {/* Main architecture */}
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
  
            {/* ================= DIGITAL TWIN ================= */}
            <div className="relative rounded-3xl border border-violet-500/30 bg-[#090c1a]/80 p-7 shadow-[0_0_50px_rgba(100,70,255,0.08)] backdrop-blur-xl sm:p-8">
  
              {/* Card heading */}
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-violet-500/40 bg-violet-500/10 text-violet-300 shadow-[0_0_25px_rgba(124,92,255,0.2)]">
                  <UserRound size={28} strokeWidth={1.6} />
                </div>
  
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Digital Twin
                  </h3>
  
                  <p className="mt-1 text-sm text-white/50">
                    A complete picture of you.
                  </p>
                </div>
              </div>
  
              {/* Twin attributes */}
              <div className="space-y-4">
                {twinItems.map((item) => {
                  const Icon = item.icon;
  
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 text-white/75"
                    >
                      <Icon
                        size={21}
                        strokeWidth={1.7}
                        className="shrink-0 text-violet-300"
                      />
  
                      <span className="text-sm sm:text-base">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
  
              {/* Connector */}
              <div className="absolute -right-10 top-1/2 hidden w-10 -translate-y-1/2 lg:block">
                <div className="h-px w-full bg-gradient-to-r from-violet-500/70 to-violet-300" />
  
                <ArrowRight
                  size={20}
                  className="absolute -right-1 -top-[10px] text-violet-300"
                />
              </div>
            </div>
  
            {/* ================= AGENTIC BRAIN ================= */}
            <div className="relative flex items-center justify-center py-4 lg:py-0">
  
              {/* Outer glow */}
              <div className="absolute h-56 w-56 rounded-full bg-violet-600/20 blur-[70px]" />
  
              {/* Outer rings */}
              <div className="absolute h-64 w-64 rounded-full border border-violet-500/10" />
              <div className="absolute h-52 w-52 rounded-full border border-violet-500/15" />
  
              {/* Brain */}
              <div className="relative flex h-48 w-48 flex-col items-center justify-center rounded-full border border-violet-300/80 bg-[#0a0b20] shadow-[0_0_50px_rgba(110,70,255,0.45),inset_0_0_50px_rgba(100,70,255,0.15)]">
  
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                  <Brain size={38} strokeWidth={1.4} />
                </div>
  
                <h3 className="text-xl font-semibold text-white">
                  Agentic Brain
                </h3>
  
                <p className="mt-1 max-w-[150px] text-center text-xs leading-5 text-white/50">
                  Coordinates specialized AI agents.
                </p>
              </div>
  
              {/* Mobile arrows */}
              <div className="absolute -bottom-7 flex lg:hidden">
                <ArrowRight
                  size={24}
                  className="rotate-90 text-violet-300"
                />
              </div>
            </div>
  
            {/* ================= SPECIALIZED AGENTS ================= */}
            <div className="relative rounded-3xl border border-violet-500/30 bg-[#090c1a]/80 p-7 shadow-[0_0_50px_rgba(100,70,255,0.08)] backdrop-blur-xl sm:p-8">
  
              {/* Connector */}
              <div className="absolute -left-10 top-1/2 hidden w-10 lg:block">
                <div className="h-px w-full bg-gradient-to-r from-violet-300 to-violet-500/70" />
              </div>
  
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white">
                  Specialized Agents
                </h3>
  
                <p className="mt-1 text-sm text-white/50">
                  Focused intelligence for every aspect of your life.
                </p>
              </div>
  
              {/* Agent grid */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {agents.map((agent) => {
                  const Icon = agent.icon;
  
                  return (
                    <div
                      key={agent.label}
                      className={`group flex items-center gap-3 rounded-full border ${agent.border} ${agent.glow} px-4 py-3 transition-all duration-300 hover:bg-white/[0.06]`}
                    >
                      <div className={`shrink-0 ${agent.color}`}>
                        <Icon size={21} strokeWidth={1.7} />
                      </div>
  
                      <span className="text-sm text-white/85">
                        {agent.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
  
        </div>
      </section>
    );
  }