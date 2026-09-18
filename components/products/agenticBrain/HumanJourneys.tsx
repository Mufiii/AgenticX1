import {
    ArrowUpRight,
    BriefcaseBusiness,
    GraduationCap,
    Users,
    BookOpen,
    BarChart3,
    Box,
    UserRound,
    Zap,
    Sparkles,
    Target,
    Settings2,
  } from 'lucide-react'
  
  const journeys = [
    {
      title: 'CAMPUS',
      audience: 'For Students',
      icon: GraduationCap,
      accent: 'purple',
      journey: 'Learn → Build → Innovate',
      description:
        'Turn your curiosity into real-world impact with personalized learning, skills and opportunities.',
      image: '/images/campus.jpg',
      features: [
        { label: 'Learning', icon: BookOpen },
        { label: 'Skills', icon: BarChart3 },
        { label: 'Projects', icon: Box },
        { label: 'Career', icon: UserRound },
      ],
      cta: 'Explore Campus',
    },
    {
      title: 'CORPORATE',
      audience: 'For Employees',
      icon: BriefcaseBusiness,
      accent: 'blue',
      journey: 'Perform → Adapt → Grow',
      description:
        'Work smarter with workplace intelligence, knowledge management and continuous growth.',
      image: '/images/corporate.jpg',
      features: [
        { label: 'Productivity', icon: Zap },
        { label: 'Reskilling', icon: GraduationCap },
        { label: 'Decisions', icon: BarChart3 },
        { label: 'AI', icon: Sparkles },
      ],
      cta: 'Explore Corporate',
    },
    {
      title: 'COMMUNITY',
      audience: 'For Entrepreneurs',
      icon: Users,
      accent: 'pink',
      journey: 'Create → Automate → Scale',
      description:
        'Bring ideas to life with business intelligence, customer insights and agentic automation.',
      image: '/images/community.jpg',
      features: [
        { label: 'Strategy', icon: Target },
        { label: 'Customers', icon: Users },
        { label: 'Operations', icon: Settings2 },
        { label: 'Growth', icon: BarChart3 },
      ],
      cta: 'Explore Community',
    },
  ]
  
  const accentStyles = {
    purple: {
      border: 'hover:border-violet-500/70',
      glow: 'group-hover:shadow-[0_0_50px_rgba(124,58,237,0.18)]',
      icon: 'text-violet-300',
      iconBg: 'bg-violet-500/10 border-violet-400/30',
      journey: 'text-violet-300',
      button: 'group-hover:text-violet-300',
      arrow:
        'border-violet-400/50 bg-violet-500/10 group-hover:bg-violet-500/20',
    },
    blue: {
      border: 'hover:border-blue-400/70',
      glow: 'group-hover:shadow-[0_0_50px_rgba(59,130,246,0.18)]',
      icon: 'text-blue-300',
      iconBg: 'bg-blue-500/10 border-blue-400/30',
      journey: 'text-blue-300',
      button: 'group-hover:text-blue-300',
      arrow: 'border-blue-400/50 bg-blue-500/10 group-hover:bg-blue-500/20',
    },
    pink: {
      border: 'hover:border-fuchsia-400/70',
      glow: 'group-hover:shadow-[0_0_50px_rgba(217,70,239,0.18)]',
      icon: 'text-fuchsia-300',
      iconBg: 'bg-fuchsia-500/10 border-fuchsia-400/30',
      journey: 'text-fuchsia-300',
      button: 'group-hover:text-fuchsia-300',
      arrow:
        'border-fuchsia-400/50 bg-fuchsia-500/10 group-hover:bg-fuchsia-500/20',
    },
  }
  
  export function HumanJourneys() {
    return (
      <section className="relative overflow-hidden bg-[#050610] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/[0.07] blur-[140px]" />
          <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-indigo-600/[0.06] blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-fuchsia-600/[0.05] blur-[120px]" />
        </div>
  
        <div className="relative mx-auto max-w-[1400px]">
          {/* Header */}
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-7 flex items-center justify-center gap-5">
              <span className="h-px w-16 bg-violet-400/60" />
  
              <span className="text-[10px] font-medium uppercase tracking-[0.38em] text-violet-300 sm:text-[11px]">
                Three Human Journeys
              </span>
  
              <span className="h-px w-16 bg-violet-400/60" />
            </div>
  
            <h2 className="text-[clamp(2.5rem,5vw,4.75rem)] font-normal leading-[0.98] tracking-[-0.055em]">
              One Brain.{' '}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Different Human Journeys.
              </span>
            </h2>
  
            <p className="mx-auto mt-7 max-w-3xl text-[15px] leading-7 text-[#a9abc3] sm:text-[17px]">
              Agentic Brain adapts to the environment, goals and challenges of
              the individual.
              <span className="block text-[#d0d1e3]">
                One intelligence layer. Infinite possibilities.
              </span>
            </p>
          </div>
  
          {/* Cards */}
          <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-7">
            {journeys.map((journey) => {
              const Icon = journey.icon
              const styles = accentStyles[journey.accent as keyof typeof accentStyles]
  
              return (
                <article
                  key={journey.title}
                  className={`group relative overflow-hidden rounded-[22px] border border-white/[0.12] bg-[#0a0c18]/90 transition-all duration-500 ${styles.border} ${styles.glow}`}
                >
                  {/* Image */}
                  <div className="relative h-[120px] overflow-hidden">
                    
  
                    {/* Icon */}
                    <div
                      className={`absolute left-7 top-7 flex h-14 w-14 items-center justify-center rounded-full border backdrop-blur-md ${styles.iconBg}`}
                    >
                      <Icon
                        className={`h-7 w-7 ${styles.icon}`}
                        strokeWidth={1.5}
                      />
                    </div>
  
                    {/* Audience badge */}
                    <div className="absolute right-6 top-7 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[10px] text-[#d7d8e8] backdrop-blur-md">
                      {journey.audience}
                    </div>
                  </div>
  
                  {/* Content */}
                  <div className="px-7 pb-7 pt-1 sm:px-8 sm:pb-8 space-y-2">
                    <h3 className="text-[32px] font-medium tracking-[-0.035em] text-white">
                      {journey.title}
                    </h3>
  
                    <p
                      className={`mt-2 text-[16px] font-medium tracking-[-0.02em] ${styles.journey}`}
                    >
                      {journey.journey}
                    </p>
  
                    <p className="mt-5 min-h-[76px] max-w-[390px] text-[14px] leading-6 text-[#9b9db4]">
                      {journey.description}
                    </p>
  
                    {/* Features */}
                    <div className="mt-7 grid grid-cols-2 gap-2.5">
                      {journey.features.map((feature) => {
                        const FeatureIcon = feature.icon
  
                        return (
                          <div
                            key={feature.label}
                            className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3.5 py-3 transition-colors duration-300 group-hover:border-white/[0.13]"
                          >
                            <FeatureIcon
                              className={`h-4 w-4 shrink-0 ${styles.icon}`}
                              strokeWidth={1.6}
                            />
  
                            <span className="text-[12px] text-[#c2c3d2]">
                              {feature.label}
                            </span>
                          </div>
                        )
                      })}
                    </div>
  
                    {/* CTA */}
                    <div className="mt-8 flex items-center">
                      <button
                        className={`flex items-center gap-3 text-[14px] font-medium text-[#d4d5e3] transition-colors duration-300 ${styles.button}`}
                      >
                        {journey.cta}
  
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 group-hover:translate-x-1 ${styles.arrow}`}
                        >
                          <ArrowUpRight
                            className="h-4 w-4"
                            strokeWidth={1.7}
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    )
  }