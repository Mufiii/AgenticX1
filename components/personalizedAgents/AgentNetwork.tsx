import { SectionHeading } from '@/components/personalizedAgents/SectionHeading'
import { networkAgents, networkCenter, networkIcons } from '@/components/personalizedAgents/data'

export function AgentNetwork() {
  return (
    <section className="relative overflow-hidden bg-[#050711] text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <SectionHeading
          align="center"
          eyebrow="Your Personal AI Team"
          headline={
            <>
              One Brain.{' '}
              <span className="bg-gradient-to-r from-[#8CCBFF] via-[#8B6CFF] to-[#D66BFF] bg-clip-text text-transparent">
                Multiple Specialized Agents.
              </span>
            </>
          }
        />

        <div className="relative mx-auto mt-16 hidden max-w-[820px] lg:block">
          <svg
            viewBox="0 0 800 560"
            className="h-auto w-full"
            role="img"
            aria-labelledby="agent-network-title"
          >
            <title id="agent-network-title">
              Your Agentic Brain connected to Learning, Research, Career, Business, Communication,
              Productivity and Wellness agents
            </title>
            <circle
              cx={networkCenter.x}
              cy={networkCenter.y}
              r="168"
              fill="none"
              stroke="rgba(139,92,246,0.12)"
              className="pa-orbit-ring"
            />
            <circle
              cx={networkCenter.x}
              cy={networkCenter.y}
              r="118"
              fill="none"
              stroke="rgba(139,92,246,0.18)"
              className="pa-orbit-ring"
            />
            {networkAgents.map((agent) => (
              <line
                key={agent.label}
                x1={networkCenter.x}
                y1={networkCenter.y}
                x2={agent.x}
                y2={agent.y}
                stroke="#8B5CF6"
                strokeWidth="1"
                className="pa-flow-line"
              />
            ))}
            <circle
              cx={networkCenter.x}
              cy={networkCenter.y}
              r="78"
              fill="#0a0b16"
              stroke="rgba(196,181,253,0.55)"
              strokeWidth="1"
            />
            <text
              x={networkCenter.x}
              y={networkCenter.y - 14}
              textAnchor="middle"
              fill="rgba(255,255,255,0.55)"
              fontSize="9"
              letterSpacing="0.28em"
            >
              YOUR
            </text>
            <text
              x={networkCenter.x}
              y={networkCenter.y + 4}
              textAnchor="middle"
              fill="#ffffff"
              fontSize="11"
              letterSpacing="0.18em"
            >
              AGENTIC
            </text>
            <text
              x={networkCenter.x}
              y={networkCenter.y + 20}
              textAnchor="middle"
              fill="#ffffff"
              fontSize="11"
              letterSpacing="0.18em"
            >
              BRAIN
            </text>
            {networkAgents.map((agent) => {
              const above = agent.y < networkCenter.y - 40
              const below = agent.y > networkCenter.y + 40
              const labelY = above ? agent.y - 18 : below ? agent.y + 28 : agent.y + 5
              const labelX = agent.x < 200 ? agent.x - 8 : agent.x > 600 ? agent.x + 8 : agent.x
              const anchor = agent.x < 200 ? 'end' : agent.x > 600 ? 'start' : 'middle'
              return (
                <g key={`${agent.label}-node`}>
                  <circle cx={agent.x} cy={agent.y} r="5" fill="#050711" stroke="#c4b5fd" strokeWidth="1.2" />
                  <text
                    x={labelX}
                    y={labelY}
                    textAnchor={anchor}
                    fill="rgba(255,255,255,0.78)"
                    fontSize="13"
                    letterSpacing="0.04em"
                  >
                    {agent.label}
                  </text>
                </g>
              )
            })}
          </svg>
        </div>

        <div className="mx-auto mt-12 max-w-xl lg:hidden">
          <div className="pa-core-pulse mx-auto flex h-36 w-36 flex-col items-center justify-center rounded-full border border-[#c4b5fd]/50 bg-[#0a0b16] text-center">
            <span className="text-[10px] tracking-[0.28em] text-white/50">YOUR</span>
            <span className="mt-1 max-w-[7rem] text-[12px] font-medium tracking-[0.16em]">AGENTIC BRAIN</span>
          </div>
          <div className="mx-auto h-8 w-px bg-[#8B5CF6]/40" aria-hidden="true" />
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {networkAgents.map((agent) => {
              const Icon = networkIcons[agent.label]
              return (
                <li
                  key={agent.label}
                  className="flex items-center gap-3 border border-white/[0.08] px-4 py-3 text-sm text-white/75"
                >
                  {Icon ? <Icon className="size-4 text-[#c4b5fd]" strokeWidth={1.6} aria-hidden="true" /> : null}
                  {agent.label}
                </li>
              )
            })}
          </ul>
        </div>

        <p className="mx-auto mt-16 max-w-2xl text-center text-[16px] leading-8 text-white/50">
          Specialized agents work independently. The Agentic Brain coordinates them around your goals.
        </p>
      </div>
    </section>
  )
}
