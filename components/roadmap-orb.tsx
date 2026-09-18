import Image from 'next/image'

export type RoadmapVariant = 'agentic' | 'digital-twin' | 'photonic'

const variantImages: Record<RoadmapVariant, { src: string; alt: string }> = {
  agentic: {
    src: '/agentic-brain.png',
    alt: 'Agentic Brain — neural network visualization',
  },
  'digital-twin': {
    src: '/ai-twin.png',
    alt: 'AI Digital Twin — human and digital counterpart',
  },
  photonic: {
    src: '/photonic-brain.png',
    alt: 'Photonic Brain — photonic compute visualization',
  },
}

export function RoadmapOrb({
  color,
  variant,
}: {
  year?: string
  color: string
  variant: RoadmapVariant
}) {
  const image = variantImages[variant]

  return (
    <div
      className={`roadmap-orb roadmap-orb-${variant}`}
      style={{ '--orb-color': color } as React.CSSProperties}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={640}
        height={640}
        sizes="(max-width: 800px) 220px, 260px"
        className="roadmap-orb-image"
      />
    </div>
  )
}
