import {
    Eye,
    GitBranch,
    Brain,
    Sparkles,
    Zap,
    ArrowRight,
  } from 'lucide-react'
  
  const steps = [
    {
      number: '01',
      title: 'Observe',
      description: 'Gather authorized signals from your digital life.',
      icon: Eye,
    },
    {
      number: '02',
      title: 'Connect',
      description: 'Link information across different areas of life.',
      icon: GitBranch,
    },
    {
      number: '03',
      title: 'Understand',
      description: 'Discover patterns, relationships and changes over time.',
      icon: Brain,
    },
    {
      number: '04',
      title: 'Support',
      description: 'Turn context into personalized guidance and recommendations.',
      icon: Sparkles,
    },
    {
      number: '05',
      title: 'Act',
      description: 'Turn insights into workflows, reminders and approved actions.',
      icon: Zap,
    },
  ]
  
  export function PersonalIntelligenceFlow() {
    return (
      <section className="relative overflow-hidden bg-[#05060d] py-24 text-white sm:py-32">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#6D35F5]/10 blur-[140px]" />
          <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#8B5CF6]/[0.06] blur-[120px]" />
        </div>
  
        <div className="relative mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-10">
  
          {/* Header */}
          <div className="mx-auto max-w-[800px] text-center">
  
            <h2 className="text-[clamp(2.3rem,5vw,4.5rem)] font-normal leading-[1] tracking-[-0.055em] mb-3">
              Your Twin Doesn&apos;t Just Store Your Life.
              <br />
              <span className="bg-gradient-to-r from-[#8B6CFF] via-[#A855F7] to-[#C4B5FD] bg-clip-text text-transparent">
                It Helps You Understand It.
              </span>
            </h2>
  
            <p className="mx-auto mt-6 max-w-[650px] text-[15px] leading-[1.7] text-white/55 sm:text-[17px]">
              Information becomes connected context and context becomes
              personalized intelligence.
            </p>
          </div>
  
          {/* Flow */}
          <div className="relative mt-16 lg:mt-20">
  
            {/* Connecting line */}
            <div className="pointer-events-none absolute left-[10%] right-[10%] top-[68px] hidden h-px bg-gradient-to-r from-transparent via-[#7C5CFF]/50 to-transparent lg:block" />
  
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((step, index) => {
                const Icon = step.icon
  
                return (
                  <div
                    key={step.number}
                    className="group relative"
                  >
                    {/* Card */}
                    <div
                      className="
                        relative h-full overflow-hidden rounded-[24px]
                        border border-white/[0.10]
                        bg-white/[0.025]
                        p-6
                        backdrop-blur-xl
                        transition-all duration-500
                        hover:-translate-y-1
                        hover:border-[#8065FF]/50
                        hover:bg-white/[0.045]
                      "
                    >
                      {/* Glow */}
                      <div
                        className="
                          pointer-events-none absolute
                          -right-16 -top-16
                          h-36 w-36
                          rounded-full
                          bg-[#6D35F5]/10
                          blur-[60px]
                          transition-all duration-500
                          group-hover:bg-[#6D35F5]/20
                        "
                      />
  
                      {/* Number */}
                      <div className="relative flex items-center justify-between">
                        <span className="text-[10px] font-semibold tracking-[0.25em] text-[#9B86FF]">
                          {step.number}
                        </span>
  
                        <div
                          className="
                            flex size-11 items-center justify-center
                            rounded-xl
                            border border-[#8065FF]/30
                            bg-[#6D35F5]/10
                            text-[#A994FF]
                          "
                        >
                          <Icon size={21} strokeWidth={1.6} />
                        </div>
                      </div>
  
                      {/* Content */}
                      <div className="relative mt-8">
                        <h3 className="text-[24px] font-normal tracking-[-0.04em]">
                          {step.title}
                        </h3>
  
                        <p className="mt-3 text-[13px] leading-[1.65] text-white/50">
                          {step.description}
                        </p>
                      </div>
  
                      {/* Bottom line */}
                      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#7659E8]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
  
                    {/* Arrow */}
                    {index < steps.length - 1 && (
                      <div className="absolute -right-4 top-[68px] z-10 hidden lg:block">
                        <ArrowRight
                          size={16}
                          strokeWidth={1.5}
                          className="text-[#8B6CFF]"
                        />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

  
        </div>
      </section>
    )
  }