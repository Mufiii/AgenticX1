import { heroLinks, heroNodes } from '@/components/polymathground/data'

export function KnowledgeNetwork() {
  return (
    <div className="relative mx-auto w-full max-w-[480px] overflow-hidden px-2 sm:overflow-visible sm:px-4">
      <div
        className="pointer-events-none absolute left-1/2 top-[42%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#635BFF]/18 blur-[90px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto aspect-square w-full max-w-[340px] overflow-hidden sm:max-w-[420px] lg:max-w-none lg:overflow-visible">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full overflow-visible"
          role="img"
          aria-label="Connected knowledge map with Polymath at the centre of AI, science, business, psychology, design, DeepTech, society and ethics"
        >
          <circle cx="50" cy="48" r="16" fill="none" stroke="rgba(99,91,255,0.18)" strokeWidth="0.22" />
          <circle cx="50" cy="48" r="30" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.22" />
          <circle cx="50" cy="48" r="38" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.2" />

          {heroNodes.map((node) => (
            <line
              key={`spoke-${node.label}`}
              className="pg-network-spoke"
              x1="50"
              y1="48"
              x2={node.x}
              y2={node.y}
              stroke="rgba(99,91,255,0.42)"
              strokeWidth="0.26"
            />
          ))}

          {heroLinks.map(([from, to]) => {
            const a = heroNodes[from]
            const b = heroNodes[to]
            return (
              <line
                key={`link-${a.label}-${b.label}`}
                className="pg-network-link pg-network-flow"
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="rgba(196,181,253,0.2)"
                strokeWidth="0.18"
              />
            )
          })}

          <line
            className="pg-network-spoke"
            x1="50"
            y1="48"
            x2="50"
            y2="98"
            stroke="rgba(99,91,255,0.35)"
            strokeWidth="0.28"
          />

          {heroNodes.map((node, index) => (
            <circle
              key={`node-${node.label}`}
              className="pg-network-node"
              cx={node.x}
              cy={node.y}
              r={index % 3 === 0 ? 1.2 : 0.95}
              fill="#c4b5fd"
            />
          ))}

          <circle cx="50" cy="48" r="2.15" fill="#635BFF" />
        </svg>

        <div className="pg-core-pulse absolute left-1/2 top-[48%] z-10 flex h-[27%] w-[27%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#635BFF]/45 bg-[#050711]/85 text-center shadow-[0_0_40px_rgba(99,91,255,0.18)]">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white sm:text-[11px]">
            Polymath
          </p>
        </div>

        {heroNodes.map((node) => (
          <div
            key={node.label}
            className="absolute z-10 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#08080d]/90 px-2.5 py-1 text-[8px] uppercase tracking-[0.14em] text-white/80 sm:block sm:text-[10px]"
            aria-hidden="true"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            {node.label}
          </div>
        ))}
      </div>

      <ul className="mx-auto mt-5 grid max-w-sm grid-cols-2 gap-2 sm:hidden">
        {heroNodes.map((node) => (
          <li
            key={`legend-${node.label}`}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-[10px] uppercase tracking-[0.14em] text-white/70"
          >
            {node.label}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-center gap-3 sm:mt-8">
        <span className="rounded-full border border-[#635BFF]/35 bg-[#635BFF]/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#c4b5fd]">
          Projects
        </span>
        <span className="text-[#8B5CF6]" aria-hidden="true">
          →
        </span>
        <span className="rounded-full border border-[#635BFF]/50 bg-[#635BFF]/16 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white">
          Innovation
        </span>
      </div>
    </div>
  )
}
