import {
    Clock3,
    Globe2,
    TrendingUp,
    FileText,
    Users,
    Sparkles,
    Crown,
    Database,
    Settings2,
    ShieldCheck,
  } from 'lucide-react'
  
  const freedoms = [
    {
      number: '01',
      title: 'Freedom of',
      highlight: 'Time',
      icon: Clock3,
      description:
        'Automate repetitive work and give founders more time to focus on decisions, growth and what truly matters.',
      steps: [
        { icon: FileText, label: 'Doing Everything' },
        { icon: Users, label: 'Managing Everything' },
        { icon: Sparkles, label: 'Orchestrating Intelligence' },
        { icon: Crown, label: 'Leading' },
      ],
    },
    {
      number: '02',
      title: 'Freedom of',
      highlight: 'Space',
      icon: Globe2,
      description:
        'Connected digital systems let you operate, manage and grow your business from anywhere.',
      statement: 'Build anywhere. Operate intelligently.',
    },
    {
      number: '03',
      title: 'Freedom of',
      highlight: 'Money',
      icon: TrendingUp,
      description:
        'Build a more efficient business by improving profitability while reducing unnecessary time, effort and operational costs.',
      metrics: [
        { icon: TrendingUp, label: 'Revenue' },
        { icon: Database, label: 'Profitability' },
        { icon: Clock3, label: 'Time' },
        { icon: Settings2, label: 'Effort' },
        { icon: ShieldCheck, label: 'Risk' },
      ],
    },
  ]
  
  export function ThreeFreedoms() {
    return (
      <section className="relative overflow-hidden bg-[#0b0a0f] text-white">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-[-250px] h-[600px] w-[700px] rounded-full bg-[#6D35F5]/10 blur-[150px]" />
  
          <div className="absolute -right-[250px] top-[35%] h-[600px] w-[600px] rounded-full bg-[#A855F7]/[0.07] blur-[140px]" />
  
          <div className="absolute left-1/2 top-0 h-[900px] w-[1200px] -translate-x-1/2 rounded-full border border-[#6D35F5]/[0.05]" />
        </div>
  
        <div className="relative mx-auto w-full max-w-[1400px] px-5 py-24 sm:px-8 md:py-32 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-24">
            
            {/* LEFT — CONTENT */}
            <div
              className="lg:sticky lg:top-28"
              data-campus-reveal
            >
              {/* Eyebrow */}
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-[#8B6CFF]" />
  
                <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#A99AFF]">
                  The Three Freedoms + Life ROI
                </span>
              </div>
  
              {/* Heading */}
              <h2 className="max-w-[620px] text-[clamp(2.8rem,5.5vw,5.4rem)] font-normal leading-[0.98] tracking-[-0.065em]">
                Build a Business
                <br />
                That Gives You Back{' '}
                <span className="bg-gradient-to-r from-[#8B6CFF] via-[#A855F7] to-[#C4B5FD] bg-clip-text text-transparent">
                  Your Life
                </span>
              </h2>
  
              {/* Description */}
              <p className="mt-8 max-w-[500px] text-[16px] leading-[1.75] text-white/55 sm:text-[18px]">
                Entrepreneurship should create freedom not permanent
                operational dependence.
              </p>
  
              {/* Small supporting statement */}
              <div className="mt-12 max-w-[420px] border-l border-[#8065FF]/40 pl-6">
                <p className="text-[14px] leading-[1.7] text-white/40">
                  Intelligent systems should give founders back the
                  resources that matter most time, freedom and control.
                </p>
              </div>
            </div>
  
            {/* RIGHT — CARDS */}
            <div
              className="space-y-5"
              data-campus-reveal
            >
              {freedoms.map((freedom) => {
                const Icon = freedom.icon
  
                return (
                  <article
                    key={freedom.number}
                    className="group relative overflow-hidden rounded-[28px] border border-white/[0.10] bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#7C5CFF]/50 hover:bg-white/[0.04] sm:p-8"
                  >
                    {/* Card glow */}
                    <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#6D35F5]/10 blur-[80px] transition-all duration-500 group-hover:bg-[#6D35F5]/20" />
  
                    {/* Top row */}
                    <div className="relative flex items-center justify-between">
                      <span className="text-[20px] font-semibold opacity-50 tracking-[0.22em] text-[#9B86FF]">
                        {freedom.number}
                      </span>
  
                      <div className="flex size-12 items-center justify-center rounded-2xl border border-[#8065FF]/30 bg-[#6D35F5]/10 text-[#A994FF] transition-all duration-300 group-hover:border-[#8065FF]/50 group-hover:bg-[#6D35F5]/20">
                        <Icon size={23} strokeWidth={1.6} />
                      </div>
                    </div>
  
                    {/* Main card content */}
                    <div className="relative mt-3 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                      
                      {/* Title + description */}
                      <div>
                        <h3 className="text-[30px] mb-2 font-normal leading-[1.05] tracking-[-0.045em] sm:text-[34px] space-y-2">
                          {freedom.title}{' '}
                          <span className="bg-gradient-to-r from-[#8B6CFF] to-[#B48CFF] bg-clip-text text-transparent">
                            {freedom.highlight}
                          </span>
                        </h3>
  
                        <p className="mt-4 max-w-[520px] text-[15px] leading-[1.7] text-white/50">
                          {freedom.description}
                        </p>
                      </div>
  
                    </div>
  
                    
  
                  
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    )
  }