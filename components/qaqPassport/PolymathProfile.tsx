import { SectionHeading } from '@/components/personalizedAgents/SectionHeading'
import { audiences, polymathLinks, polymathNodes } from '@/components/qaqPassport/data'

export function PolymathProfile() {
  return (
    <section id="polymath" className="relative scroll-mt-28 overflow-hidden bg-[#08080d] text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-[38%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#6D35F5]/12 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div data-campus-reveal>
          <SectionHeading
            align="center"
            eyebrow="Your Polymath Profile"
            headline={
              <>
                See the Combination That{' '}
                <span className="bg-gradient-to-r from-[#8CCBFF] via-[#8B6CFF] to-[#D66BFF] bg-clip-text text-transparent">
                  Makes You Unique.
                </span>
              </>
            }
            description="Instead of defining talent through a single degree or examination, QaQ can represent the combination of disciplines, practical capabilities and demonstrated achievements that make each learner unique."
          />
        </div>

        <div className="mt-16 lg:mt-20" data-campus-reveal>
          <NetworkVisual />
        </div>

        <ul className="mx-auto mt-16 grid max-w-5xl gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3" data-campus-reveal>
          {audiences.map((audience) => (
            <li key={audience.title} className="bg-[#08080d] px-6 py-8 sm:px-8">
              <h3 className="text-[13px] font-medium uppercase tracking-[0.18em] text-[#c4b5fd]">
                {audience.title}
              </h3>
              <p className="mt-3 text-[15px] leading-6 text-white/55">
                {audience.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function NetworkVisual() {
  return (
    <div className="mx-auto w-full max-w-[760px]">
      <div className="relative mx-auto aspect-square w-full max-w-[340px] overflow-hidden sm:max-w-[520px] md:max-w-[640px] md:overflow-visible">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full overflow-visible"
          role="img"
          aria-label="Polymath profile connecting AI, DeepTech, Software, Robotics, Business, Research, Entrepreneurship and Leadership"
        >
          <circle cx="50" cy="50" r="18" fill="none" stroke="rgba(139,92,246,0.18)" strokeWidth="0.25" />
          <circle cx="50" cy="50" r="32" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.25" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.25" />

          {polymathNodes.map((node) => (
            <line
              key={`spoke-${node.label}`}
              className="qaq-network-spoke"
              x1="50"
              y1="50"
              x2={node.x}
              y2={node.y}
              stroke="rgba(139,92,246,0.45)"
              strokeWidth="0.28"
            />
          ))}

          {polymathLinks.map(([from, to]) => {
            const a = polymathNodes[from]
            const b = polymathNodes[to]
            return (
              <line
                key={`link-${a.label}-${b.label}`}
                className="qaq-network-link qaq-network-flow"
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="rgba(196,181,253,0.22)"
                strokeWidth="0.2"
              />
            )
          })}

          {polymathNodes.map((node, index) => (
            <circle
              key={`node-${node.label}`}
              className="qaq-network-node"
              cx={node.x}
              cy={node.y}
              r={index % 3 === 0 ? 1.15 : 0.9}
              fill="#c4b5fd"
            />
          ))}

          <circle cx="50" cy="50" r="2.1" fill="#8B5CF6" />
        </svg>

        <div className="qaq-core-pulse absolute left-1/2 top-1/2 z-10 flex h-[28%] w-[28%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#8B5CF6]/40 bg-[#050711]/80 text-center">
          <p className="max-w-[8rem] text-[10px] font-medium uppercase leading-4 tracking-[0.18em] text-white sm:text-[11px]">
            Polymath Profile
          </p>
        </div>

        {polymathNodes.map((node) => (
          <div
            key={node.label}
            className="absolute z-10 hidden max-w-[7.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#08080d]/90 px-2 py-1 text-center text-[8px] uppercase leading-tight tracking-[0.12em] text-white/80 md:block sm:max-w-none sm:whitespace-nowrap sm:px-3 sm:text-[10px]"
            aria-hidden="true"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            {node.label}
          </div>
        ))}
      </div>

      <ul className="mx-auto mt-6 grid max-w-md grid-cols-2 gap-2 md:hidden" aria-hidden="true">
        {polymathNodes.map((node) => (
          <li
            key={`legend-${node.label}`}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-[10px] uppercase tracking-[0.14em] text-white/70"
          >
            {node.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
