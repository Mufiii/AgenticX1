export type Product = {
  id: string
  index: '01' | '02' | '03' | '04'
  nameLead: string
  nameAccent: string
  nameJoin?: 'space' | 'break'
  eyebrow: string
  tagline: string
  description: string
  href: string
  ctaLabel: string
  imageSrc: string | null
  imageAlt: string
  logoSrc?: string
}

export const products: Product[] = [
  {
    id: 'polymathground',
    index: '01',
    nameLead: 'Polymath',
    nameAccent: 'Ground',
    eyebrow: 'LEARN × CONNECT × INNOVATE',
    tagline: 'POLYMATHGROUND expans how you think',
    description: 'A short knowladge and startup ecosystem connecting technolgy, psychology, business, science, design, economics and ethics',
    href: '/polymathground',
    ctaLabel: 'Explore PolymathGround',
    imageSrc: '/images/polymath.png',
    imageAlt: 'PolymathGround multidisciplinary network',
  },
  {
    id: 'qaq-passport',
    index: '02',
    nameLead: 'QaQ',
    nameAccent: 'Passport',
    nameJoin: 'space',
    eyebrow: 'LEARN × VERIFY × SHOWCASE × PROGRESS',
    tagline: 'QaQ passport proves you what you can do',
    description:
      'A learner-controlled digital record of certified skills,\nprojects and achievements for the AI & DeepTech era.',
    href: '/services/qaq-passport',
    ctaLabel: 'Explore QaQ Passport',
    imageSrc: '/images/qaq.png',
    imageAlt: 'QaQ Passport digital credentials',
  },
  {
    id: 'human-transformation-agent',
    index: '03',
    nameLead: 'Human',
    nameAccent: 'Transformation Agent',
    nameJoin: 'break',
    eyebrow: 'COACH × REFLECT × ADAPT × TRANSFORM',
    tagline: 'A personal AI companion for a better you.',
    description:
      'Gain clarity, build better habits, and unlock your\nfull potential with personalized AI guidance.',
    href: '/services/personalized-agents',
    ctaLabel: 'Explore Human Transformation',
    imageSrc: '/images/hta.png',
    imageAlt: 'Human Transformation Agent companion',
  },
  {
    id: 'agix',
    index: '04',
    nameLead: 'AGI',
    nameAccent: 'x',
    logoSrc: '/images/agix-logo.png',
    eyebrow: 'ORCHESTRATE × EXECUTE × SCALE × IMPACT',
    tagline: 'AGIx give you the gateway',
    description:
      'The gateway to knowladge, specialist agents, connected systems, verified identity and future digital twin capabilities.',
    href: '/products/agix-mobile',
    ctaLabel: 'Explore AGIx',
    imageSrc: '/images/agix-mobile.png',
    imageAlt: 'AGIx agentic operating system',
  },
]
