const PARTICLES = [
  { x: '8%', y: '18%', size: 1.5, delay: '0s', duration: '48s' },
  { x: '22%', y: '72%', size: 1, delay: '4s', duration: '56s' },
  { x: '36%', y: '28%', size: 1.2, delay: '8s', duration: '42s' },
  { x: '48%', y: '84%', size: 1, delay: '2s', duration: '62s' },
  { x: '61%', y: '14%', size: 1.4, delay: '11s', duration: '50s' },
  { x: '74%', y: '46%', size: 1, delay: '6s', duration: '54s' },
  { x: '86%', y: '22%', size: 1.6, delay: '13s', duration: '46s' },
  { x: '91%', y: '68%', size: 1, delay: '9s', duration: '58s' },
  { x: '14%', y: '52%', size: 1.1, delay: '15s', duration: '44s' },
  { x: '68%', y: '78%', size: 1.3, delay: '7s', duration: '52s' },
  { x: '42%', y: '8%', size: 1, delay: '18s', duration: '60s' },
  { x: '55%', y: '38%', size: 1.2, delay: '3s', duration: '47s' },
] as const

export function AtmosphericBackground() {
  return (
    <div className="site-atmosphere" aria-hidden="true">
      <div className="site-atmosphere__base" />
      <div className="site-atmosphere__grid" />
      <div className="site-atmosphere__noise" />
      <div className="site-atmosphere__glow site-atmosphere__glow--a" />
      <div className="site-atmosphere__glow site-atmosphere__glow--b" />
      <div className="site-atmosphere__glow site-atmosphere__glow--c" />

      <div className="site-atmosphere__orbits">
        <div className="site-atmosphere__orbit site-atmosphere__orbit--1">
          <span className="site-atmosphere__spark" />
        </div>
        <div className="site-atmosphere__orbit site-atmosphere__orbit--2">
          <span className="site-atmosphere__spark" />
        </div>
        <div className="site-atmosphere__orbit site-atmosphere__orbit--3">
          <span className="site-atmosphere__spark" />
        </div>
      </div>

      <div className="site-atmosphere__particles">
        {PARTICLES.map((particle, index) => (
          <span
            key={index}
            className={`site-atmosphere__particle site-atmosphere__particle--${index + 1}`}
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
    </div>
  )
}
