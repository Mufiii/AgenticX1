export function GraphVisual({ compact = false }: { compact?: boolean }) {
  const nodes = [
    { x: 50, y: 15 },
    { x: 20, y: 30 },
    { x: 80, y: 35 },
    { x: 35, y: 62 },
    { x: 68, y: 70 },
    { x: 50, y: 90 },
  ]

  return (
    <div className={`graph-visual ${compact ? 'compact' : ''}`} aria-label="Abstract knowledge graph visualization" role="img">
      <div className="graph-glow" />
      <svg viewBox="0 0 100 100" aria-hidden="true">
        {[
          [50, 15, 20, 30],
          [50, 15, 80, 35],
          [20, 30, 35, 62],
          [80, 35, 68, 70],
          [35, 62, 50, 90],
          [68, 70, 50, 90],
          [35, 62, 68, 70],
        ].map((l, i) => (
          <line key={i} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} />
        ))}
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r={i === 0 ? 3 : 2} />
        ))}
      </svg>
      <span className="graph-label label-top">human direction</span>
      <span className="graph-label label-bottom">connected intelligence</span>
    </div>
  )
}
