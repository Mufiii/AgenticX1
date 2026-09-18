import { SectionHeading } from '@/components/personalizedAgents/SectionHeading'
import { disciplines, universeLinks } from '@/components/polymathground/data'

export function KnowledgeUniverse() {
  return (
    <section id="knowledge-universe" className="relative scroll-mt-28 overflow-hidden bg-[#08080d] text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-[42%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#635BFF]/12 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div data-campus-reveal>
          <SectionHeading
            align="center"
            eyebrow="The Knowledge Universe"
            headline={
              <>
                One Ground.{' '}
                <span className="bg-gradient-to-r from-[#8CCBFF] via-[#8B6CFF] to-[#D66BFF] bg-clip-text text-transparent">
                  Multiple Disciplines.
                </span>
              </>
            }
          />
        </div>

        <div className="mt-16 lg:mt-20" data-campus-reveal>
          <UniverseMap />
        </div>
      </div>
    </section>
  )
}

function UniverseMap() {
  return (
    <div className="mx-auto w-full max-w-[920px]">
      <div className="relative mx-auto aspect-square w-full max-w-[360px] overflow-hidden sm:max-w-[560px] lg:max-w-[840px] lg:overflow-visible">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full overflow-visible"
          role="img"
          aria-label="PolymathGround knowledge map connecting eight disciplines around a shared centre"
        >
          <circle cx="50" cy="50" r="18" fill="none" stroke="rgba(99,91,255,0.16)" strokeWidth="0.22" />
          <circle cx="50" cy="50" r="32" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.2" />
          <circle cx="50" cy="50" r="41" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.18" />

          {disciplines.map((node) => (
            <line
              key={`spoke-${node.title}`}
              className="pg-network-spoke"
              x1="50"
              y1="50"
              x2={node.x}
              y2={node.y}
              stroke="rgba(99,91,255,0.4)"
              strokeWidth="0.24"
            />
          ))}

          {universeLinks.map(([from, to]) => {
            const a = disciplines[from]
            const b = disciplines[to]
            return (
              <line
                key={`link-${a.title}-${b.title}`}
                className="pg-network-link pg-network-flow"
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="rgba(196,181,253,0.16)"
                strokeWidth="0.16"
              />
            )
          })}

          {disciplines.map((node, index) => (
            <circle
              key={`node-${node.title}`}
              className="pg-network-node"
              cx={node.x}
              cy={node.y}
              r={index % 2 === 0 ? 1.15 : 0.95}
              fill="#c4b5fd"
            />
          ))}

          <circle cx="50" cy="50" r="2.2" fill="#635BFF" />
        </svg>

        <div className="pg-core-pulse absolute left-1/2 top-1/2 z-10 flex h-[22%] w-[22%] min-h-[5.5rem] min-w-[5.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#635BFF]/40 bg-[#050711]/85 px-3 text-center sm:h-[24%] sm:w-[24%]">
          <p className="max-w-[8.5rem] text-[9px] font-medium uppercase leading-4 tracking-[0.16em] text-white sm:text-[11px] sm:leading-5">
            PolymathGround
          </p>
        </div>

        {disciplines.map((node) => (
          <div
            key={node.title}
            className="absolute z-10 hidden w-[9.5rem] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-[#08080d]/92 px-3 py-2.5 text-center backdrop-blur-sm lg:block"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-white">
              {node.title}
            </p>
            <p className="mt-1 text-[9px] leading-4 text-white/45">
              {node.topics.join(' · ')}
            </p>
          </div>
        ))}
      </div>

      <ul className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-2 sm:grid-cols-4 lg:hidden">
        {disciplines.map((node) => (
          <li
            key={`legend-${node.title}`}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-3 text-center"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/85">
              {node.title}
            </p>
            <p className="mt-1.5 text-[10px] leading-4 text-white/40">
              {node.topics.join(' · ')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
