import {
    UserRound,
    Sparkles,
    Bot,
    Network,
    BarChart3,
    Users,
    Database,
    Settings,
    MessageSquare,
  } from 'lucide-react'
  
  const stages = [
    {
      number: '01',
      title: 'Manual',
      description: 'People perform most processes and decisions.',
      label: 'PEOPLE DO THE WORK',
      icon: UserRound,
    },
    {
      number: '02',
      title: 'AI-Assisted',
      description: 'AI helps employees research, create and decide.',
      label: 'PEOPLE + AI WORK TOGETHER',
      icon: Sparkles,
    },
    {
      number: '03',
      title: 'AI-Automated',
      description: 'Repetitive workflows begin operating automatically.',
      label: 'PROCESSES RUN AUTOMATICALLY',
      icon: Bot,
    },
    {
      number: '04',
      title: 'Multi-Agent',
      description: 'Specialized AI agents collaborate across functions.',
      label: 'AI AGENTS WORK AS A TEAM',
      icon: Network,
    },
    {
      number: '05',
      title: 'Agentic Enterprise',
      description:
        'AI systems continuously coordinate intelligence and execution around business goals.',
      label: 'GOAL-DRIVEN AUTONOMY',
      icon: Sparkles,
      final: true,
    },
  ]
  
  const agentFunctions = [
    { label: 'Sales', icon: BarChart3 },
    { label: 'Marketing', icon: Sparkles },
    { label: 'Support', icon: MessageSquare },
    { label: 'Operations', icon: Settings },
    { label: 'Finance', icon: Database },
    { label: 'R&D', icon: Users },
  ]
  
  export function EnterpriseEvolution() {
    return (
      <section className="relative overflow-hidden bg-[#0b0a0f] text-white">
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-[300px] -top-[300px] h-[650px] w-[650px] rounded-full bg-[#6335ff]/10 blur-[140px]" />
  
          <div className="absolute right-[-250px] top-[-250px] h-[600px] w-[600px] rounded-full bg-[#4c2cff]/10 blur-[140px]" />
  
          <div className="absolute bottom-[-300px] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#6d35f5]/10 blur-[150px]" />
        </div>
  
        <div className="relative mx-auto max-w-[1500px] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          {/* Header */}
          <div className="max-w-[720px]">
            <div className="mb-6 flex items-center gap-4">
  
              <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#a999ff]">
                From Business to Agentic Enterprise
              </span>
            </div>
  
            <h2 className="text-[clamp(3rem,6vw,5.8rem)] font-normal leading-[0.95] tracking-[-0.065em]">
              The Evolution of
              <br />
              the{' '}
              <span className="bg-gradient-to-r from-[#ffffff] via-[#a887ff] to-[#6d35f5] bg-clip-text text-transparent">
                Enterprise
              </span>
            </h2>
  
            <p className="mt-7 max-w-[620px] text-[16px] leading-[1.7] text-white/55 sm:text-[18px]">
              From people doing the work to AI systems that think, collaborate
              and execute. A new operating model for a higher-performing
              future.
            </p>
          </div>
  
          {/* Evolution */}
          <div className="relative mt-20 lg:mt-28">
            {/* Desktop progression line */}
  
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:items-end lg:gap-5">
              {stages.map((stage, index) => {
                const Icon = stage.icon
  
                return (
                  <div
                    key={stage.number}
                    className={`relative ${
                      stage.final ? 'lg:-mt-20' : ''
                    }`}
                  >
                    {/* Card */}
                    <article
                      className={`group relative overflow-hidden rounded-[22px] border p-6 transition-all duration-500 ${
                        stage.final
                          ? 'min-h-[470px] border-[#7655ff]/50 bg-gradient-to-b from-[#17132d] to-[#0d0b15] shadow-[0_0_70px_rgba(104,63,255,0.18)]'
                          : 'min-h-[390px] border-white/[0.10] bg-white/[0.025] hover:-translate-y-2 hover:border-[#7655ff]/40 hover:bg-white/[0.045]'
                      }`}
                    >
                      {/* Glow */}
                      <div
                        className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                          stage.final ? 'opacity-100' : ''
                        }`}
                      >
                        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#6d35f5]/20 blur-3xl" />
                      </div>
  
                      <div className="relative z-10">
                        {/* Number */}
                        <div className="flex items-center justify-between">
                          <span className="text-[13px] font-medium tracking-[0.12em] text-[#9b83ff]">
                            {stage.number}
                          </span>
  
                          {stage.final && (
                            <span className="rounded-full border border-[#8b6cff]/30 bg-[#6d35f5]/10 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-[#b8a8ff]">
                              Future
                            </span>
                          )}
                        </div>
  
                        {/* Title */}
                        <h3 className="mt-5 text-[25px] font-medium tracking-[-0.035em] text-white">
                          {stage.title}
                        </h3>
  
                        {/* Description */}
                        <p className="mt-4 max-w-[240px] text-[14px] leading-[1.7] text-white/55">
                          {stage.description}
                        </p>
  
                        {/* Visual */}
                        <div className="mt-auto flex min-h-[165px] items-end justify-center pt-8">
                          {stage.number === '01' && (
                            <div className="relative flex items-center gap-4">
                              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[#785cff]/30 bg-[#16112b] shadow-[0_0_30px_rgba(109,53,245,0.2)]">
                                <UserRound
                                  size={38}
                                  strokeWidth={1.4}
                                  className="text-[#a88fff]"
                                />
                              </div>
  
                              <div className="flex flex-col gap-1">
                                {[1, 2, 3, 4].map((item) => (
                                  <div
                                    key={item}
                                    className="h-2 w-12 rounded-full bg-gradient-to-r from-[#5f42d9] to-[#30245c]"
                                  />
                                ))}
                              </div>
                            </div>
                          )}
  
                          {stage.number === '02' && (
                            <div className="relative flex items-center gap-3">
                              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#17122c]">
                                <UserRound
                                  size={34}
                                  strokeWidth={1.4}
                                  className="text-[#a88fff]"
                                />
                              </div>
  
                              <div className="text-3xl text-[#8060ff]">+</div>
  
                              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[#7555ff]/40 bg-[#211647] shadow-[0_0_30px_rgba(109,53,245,0.2)]">
                                <Sparkles
                                  size={36}
                                  strokeWidth={1.5}
                                  className="text-[#a98cff]"
                                />
                              </div>
                            </div>
                          )}
  
                          {stage.number === '03' && (
                            <div className="relative">
                              <div className="absolute inset-0 rounded-full bg-[#7045ff]/20 blur-2xl" />
  
                              <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl border border-[#7655ff]/40 bg-gradient-to-br from-[#21184a] to-[#100d1b]">
                                <Bot
                                  size={58}
                                  strokeWidth={1.25}
                                  className="text-[#ad9aff]"
                                />
                              </div>
  
                              <div className="absolute -right-5 -top-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#7655ff]/30 bg-[#18122e]">
                                <Settings
                                  size={22}
                                  className="text-[#947cff]"
                                />
                              </div>
                            </div>
                          )}
  
                          {stage.number === '04' && (
                            <div className="relative h-[150px] w-full">
                              {/* connections */}
                              <div className="absolute left-1/2 top-1/2 h-px w-[130px] -translate-x-1/2 rotate-90 bg-[#6f4aff]/60" />
                              <div className="absolute left-1/2 top-1/2 h-px w-[150px] -translate-x-1/2 bg-[#6f4aff]/60" />
  
                              {[
                                'left-[8%] top-[38%]',
                                'right-[8%] top-[38%]',
                                'left-1/2 bottom-0 -translate-x-1/2',
                              ].map((position, i) => (
                                <div
                                  key={i}
                                  className={`absolute ${position} flex h-12 w-12 items-center justify-center rounded-full border border-[#7655ff]/50 bg-[#18122f] shadow-[0_0_25px_rgba(109,53,245,0.25)]`}
                                >
                                  <Bot
                                    size={23}
                                    strokeWidth={1.3}
                                    className="text-[#a38cff]"
                                  />
                                </div>
                              ))}
  
                              <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#9a7cff]/60 bg-[#241653] shadow-[0_0_35px_rgba(109,53,245,0.35)]">
                                <Network
                                  size={27}
                                  className="text-[#b8a7ff]"
                                />
                              </div>
                            </div>
                          )}
  
                          {stage.final && (
                            <div className="relative flex h-[175px] w-full items-center justify-center">
                              {/* orbit rings */}
                              <div className="absolute h-40 w-40 rounded-full border border-[#7655ff]/30" />
                              <div className="absolute h-32 w-32 rounded-full border border-[#7655ff]/20" />
  
                              <div className="absolute h-24 w-24 rounded-full bg-[#6038ff]/30 blur-xl" />
  
                              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[#a18aff]/70 bg-gradient-to-br from-[#6340ff] to-[#24134d] shadow-[0_0_55px_rgba(108,62,255,0.65)]">
                                <span className="text-5xl font-semibold text-white">
                                  A
                                </span>
                              </div>
  
                              {agentFunctions.map((agent, i) => {
                                const AgentIcon = agent.icon
  
                                const positions = [
                                  'left-[2%] top-[5%]',
                                  'right-[2%] top-[5%]',
                                  'left-[-2%] bottom-[5%]',
                                  'right-[-2%] bottom-[5%]',
                                  'left-1/2 top-[-5%] -translate-x-1/2',
                                  'left-1/2 bottom-[-5%] -translate-x-1/2',
                                ]
  
                                return (
                                  <div
                                    key={agent.label}
                                    className={`absolute ${positions[i]} flex h-9 items-center gap-2 rounded-full border border-[#7555ff]/30 bg-[#151127]/90 px-3 shadow-[0_0_20px_rgba(109,53,245,0.15)]`}
                                  >
                                    <AgentIcon
                                      size={13}
                                      className="text-[#a88fff]"
                                    />
                                    <span className="text-[9px] text-white/75">
                                      {agent.label}
                                    </span>
                                  </div>
                                )
                              })}
                            </div>
                          )}
                        </div>
                      </div>
                    </article>
  
                    {/* Stage label */}
                    <div className="relative z-10 mt-5 text-center">
                      <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#9a87e8]">
                        {stage.label}
                      </span>
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