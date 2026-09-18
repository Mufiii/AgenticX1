import {
    UserRound,
    BookOpen,
    BarChart3,
    Brain,
    Target,
    Watch,
  } from 'lucide-react'
  
  const dimensions = [
    {
      title: 'IDENTITY',
      description: 'Who you are.',
      icon: UserRound,
      color: 'purple',
    },
    {
      title: 'KNOWLEDGE',
      description: 'What you know.',
      icon: BookOpen,
      color: 'blue',
    },
    {
      title: 'EXPERIENCE',
      description: 'What you have learned and built.',
      icon: BarChart3,
      color: 'green',
    },
    {
      title: 'BEHAVIOUR',
      description: 'How you work, learn and interact.',
      icon: Brain,
      color: 'orange',
    },
    {
      title: 'GOALS',
      description: 'What you want to achieve.',
      icon: Target,
      color: 'pink',
    },
    {
      title: 'SIGNALS',
      description: 'What your approved devices and systems can tell you.',
      icon: Watch,
      color: 'cyan',
    },
  ]
  
  const colorStyles = {
    purple: {
      border: 'hover:border-[#8B5CF6]/60',
      icon: 'text-[#A78BFA]',
      glow: 'bg-[#8B5CF6]/10',
    },
    blue: {
      border: 'hover:border-[#3B82F6]/60',
      icon: 'text-[#60A5FA]',
      glow: 'bg-[#3B82F6]/10',
    },
    green: {
      border: 'hover:border-[#10B981]/60',
      icon: 'text-[#34D399]',
      glow: 'bg-[#10B981]/10',
    },
    orange: {
      border: 'hover:border-[#F97316]/60',
      icon: 'text-[#FB923C]',
      glow: 'bg-[#F97316]/10',
    },
    pink: {
      border: 'hover:border-[#EC4899]/60',
      icon: 'text-[#F472B6]',
      glow: 'bg-[#EC4899]/10',
    },
    cyan: {
      border: 'hover:border-[#06B6D4]/60',
      icon: 'text-[#22D3EE]',
      glow: 'bg-[#06B6D4]/10',
    },
  }
  
  export function CoreTechnology() {
    return (
      <section className="relative overflow-hidden bg-[#050711] py-24 text-white sm:py-28 lg:py-32">
        
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-300px] h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-[#6D35F5]/10 blur-[150px]" />
  
          <div className="absolute -left-[300px] bottom-[-200px] h-[500px] w-[500px] rounded-full bg-[#4F46E5]/10 blur-[140px]" />
  
          <div className="absolute -right-[300px] top-[30%] h-[500px] w-[500px] rounded-full bg-[#7C3AED]/10 blur-[140px]" />
  
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050711_75%)]" />
        </div>
  
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
  
          {/* Section Header */}
          <div className="mx-auto max-w-[900px] text-center">
  
            {/* Label */}
            <div className="mb-6 flex items-center justify-center gap-4">
  
              <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#A99AFF] sm:text-[11px]">
                The Core Technology
              </span>
  
            </div>
  
            {/* Heading */}
            <h2 className="text-[clamp(2.5rem,5vw,4.8rem)] font-normal leading-[0.98] tracking-[-0.055em] mb-3">
              Build a Living{' '}
              <span className="bg-gradient-to-r from-[#9B7CFF] via-[#A855F7] to-[#C084FC] bg-clip-text text-transparent">
                Model of You.
              </span>
            </h2>
  
            {/* Description */}
            <p className="mx-auto mt-6 max-w-[720px] text-[15px] leading-[1.7] text-white/55 sm:text-[17px]">
              An AI Digital Twin is a continuously developing intelligence
              layer built from authorized information about the individual.
            </p>
          </div>
  
          {/* Cards */}
          <div className="mx-auto mt-6 grid max-w-[1200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5">
  
            {dimensions.map((item) => {
              const Icon = item.icon
              const styles =
                colorStyles[item.color as keyof typeof colorStyles]
  
              return (
                <article
                  key={item.title}
                  className={`group relative min-h-150px] overflow-hidden rounded-[22px] border border-white/[0.10] bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.045] ${styles.border}`}
                >
  
                  {/* Card glow */}
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-[65px] opacity-40 transition-all duration-500 group-hover:opacity-80 ${styles.glow}`}
                  />
  
                  {/* Icon */}
                  <div
                    className={`relative flex size-14 items-center justify-center rounded-2xl bg-white/[0.035] ring-1 ring-white/[0.06] ${styles.icon}`}
                  >
                    <Icon
                      size={29}
                      strokeWidth={1.6}
                    />
                  </div>
  
                  {/* Content */}
                  <div className="relative mt-7">
                    <h3 className="text-[15px] font-semibold tracking-[0.08em] text-white">
                      {item.title}
                    </h3>
  
                    <p className="mt-3 max-w-[280px] text-[15px] leading-[1.6] text-white/55">
                      {item.description}
                    </p>
                  </div>
  
                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-[#8B6CFF]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </article>
              )
            })}
  
          </div>
  
        </div>
      </section>
    )
  }