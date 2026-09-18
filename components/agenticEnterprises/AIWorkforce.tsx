import {
    Target,
    Headphones,
    Settings2,
    Megaphone,
    Search,
    Wallet,
    ArrowRight,
  } from 'lucide-react'
  
  const agents = [
    {
      title: 'Sales Agent',
      description: 'Lead qualification · Outreach · Follow-up · CRM',
      icon: Target,
    },
    {
      title: 'Customer Agent',
      description: 'Support · Resolution · Escalation · Customer knowledge',
      icon: Headphones,
    },
    {
      title: 'Operations Agent',
      description: 'Workflows · Monitoring · Coordination · Reporting',
      icon: Settings2,
    },
    {
      title: 'Marketing Agent',
      description: 'Research · Content · Campaigns · Analytics',
      icon: Megaphone,
    },
    {
      title: 'Research Agent',
      description: 'Market intelligence · Competitor research · Analysis',
      icon: Search,
    },
    {
      title: 'Finance Agent',
      description: 'Reporting · Analysis · Financial workflows',
      icon: Wallet,
    },
  ]
  
  export function AIWorkforce() {
    return (
      <section className="relative overflow-hidden bg-[#08080d] text-white">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6D35F5]/10 blur-[140px]" />
        </div>
  
        <div className="relative mx-auto max-w-[1250px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
  
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#A99AFF]">
                AI Workforce
              </span>

            </div>
            <div className='mb-3 max-w-7xl mx-auto'>

            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[1] tracking-[-0.05em]">
              Specialized Agents.
              <br />
              <span className="bg-gradient-to-r from-[#8CCBFF] via-[#8B6CFF] to-[#D66BFF] bg-clip-text text-transparent">
                One Coordinated Workforce.
              </span>
            </h2>
            </div>
  
            <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-7 text-white/50">
              Businesses need specialized digital workers with defined
              responsibilities, tools and permissions.
            </p>
          </div>
  
          {/* Agent Cards */}
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => {
              const Icon = agent.icon
  
              return (
                <div
                  key={agent.title}
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:border-[#8B6CFF]/40 hover:bg-white/[0.045]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#8B6CFF]/25 bg-[#8B6CFF]/10">
                      <Icon className="h-5 w-5 text-[#A78BFA]" />
                    </div>
  
                  </div>
  
                  <h3 className="mt-6 text-lg font-medium">
                    {agent.title}
                  </h3>
  
                  <p className="mt-2 text-sm leading-6 text-white/45">
                    {agent.description}
                  </p>
                </div>
              )
            })}
          </div>
  
        </div>
      </section>
    )
  }