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
}

export const products: Product[] = [
  {
    id: 'polymathground',
    index: '01',
    nameLead: 'Polymath',
    nameAccent: 'Ground',
    eyebrow: 'LEARN × CONNECT × INNOVATE',
    tagline: 'BUILD MULTIDISCIPLINARY MINDS\nFOR THE AI & DEEPTECH ERA.',
    description: 'Learn across disciplines, connect ideas and\nturn knowledge into innovation.',
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
    tagline: 'YOUR SKILLS. YOUR PROOF.\nYOUR NEXT OPPORTUNITY.',
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
    tagline: 'A PERSONAL AI COMPANION\nFOR A BETTER YOU.',
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
    nameLead: 'Agi',
    nameAccent: 'x',
    eyebrow: 'ORCHESTRATE × EXECUTE × SCALE × IMPACT',
    tagline: 'THE AGENTIC OPERATING SYSTEM\nFOR INTELLIGENT WORK.',
    description:
      'One intelligent layer connecting your agents, knowledge, tools and workflows —\nbuilt to reason, execute and scale.',
    href: '/products/agix',
    ctaLabel: 'Explore Agix',
    imageSrc: '/agix.png',
    imageAlt: 'Agix agentic operating system',
  },
]
