import {
    Search,
    FileText,
    PenLine,
    Rocket,
    RefreshCw,
    ArrowRight,
    Sparkles,
  } from 'lucide-react'
  
  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      description: 'Map your business, workflows, knowledge and systems.',
      icon: Search,
    },
    {
      number: '02',
      title: 'DIAGNOSE',
      description: 'Identify where AI can create measurable value.',
      icon: FileText,
    },
    {
      number: '03',
      title: 'DESIGN',
      description: 'Build the agentic architecture, workflows and governance.',
      icon: PenLine,
    },
    {
      number: '04',
      title: 'DEPLOY',
      description: 'Introduce AI agents progressively with human oversight.',
      icon: Rocket,
    },
    {
      number: '05',
      title: 'EVOLVE',
      description: 'Continuously improve your agents, knowledge and processes.',
      icon: RefreshCw,
    },
  ]
  
  export function TransformationCTA() {
    return (
      <section className="relative overflow-hidden bg-white text-[#10152f]">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] bottom-[-20%] h-[400px] w-[500px] rounded-full bg-[#6D35F5]/10 blur-[120px]" />
          <div className="absolute right-[-10%] bottom-[-20%] h-[400px] w-[500px] rounded-full bg-[#4D9FFF]/10 blur-[120px]" />
        </div>
  
        <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
  
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#6D5DF5]" />
  
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#6573A8]">
                Transformation
              </span>
  
              <span className="h-px w-10 bg-[#A855F7]" />
            </div>
  
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1] tracking-[-0.05em]">
              Start Your Journey to an
              <br />
              <span className="bg-gradient-to-r from-[#248BFF] via-[#6557F5] to-[#B545E8] bg-clip-text text-transparent">
                Agentic Enterprise.
              </span>
            </h2>
  
            <p className="mt-6 text-[17px] text-[#53628b]">
              A clear path from opportunity to real business impact.
            </p>
          </div>
  
          {/* Timeline */}
          <div className="relative mt-20">
            {/* Connecting line */}
            <div className="absolute left-[10%] right-[10%] top-12 hidden h-px bg-gradient-to-r from-[#4D9FFF]/30 via-[#8B5CF6]/40 to-[#A855F7]/30 lg:block" />
  
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((step) => {
                const Icon = step.icon
  
                return (
                  <div key={step.number} className="relative">
                    {/* Icon */}
                    <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-[#D9E2FF] bg-white shadow-[0_8px_30px_rgba(80,90,180,0.08)]">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#EEF5FF] to-[#F4ECFF]">
                        <Icon className="h-6 w-6 text-[#635BFF]" />
                      </div>
                    </div>
  
                    {/* Content */}
                    <div className="mt-6">
                      <span className="text-xs font-medium tracking-[0.2em] text-[#8190B5]">
                        {step.number}
                      </span>
  
                      <h3 className="mt-2 text-lg font-semibold tracking-tight">
                        {step.title}
                      </h3>
  
                      <p className="mt-2 max-w-[210px] text-sm leading-6 text-[#65708f]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
  
  
        </div>
      </section>
    )
  }