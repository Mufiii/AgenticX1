export type NetworkNode = {
  label: string
  x: number
  y: number
}

export type Discipline = {
  title: string
  topics: string[]
  x: number
  y: number
}

export type ConnectionExample = {
  disciplines: [string, string, string]
  outcome: string
}

export type CreationStage = {
  title: string
  description: string
}

export type EcosystemStage = {
  title: string
  description: string
  href?: string
}

export const heroNodes: NetworkNode[] = [
  { label: 'AI', x: 50, y: 14 },
  { label: 'SCIENCE', x: 76, y: 24 },
  { label: 'BUSINESS', x: 86, y: 48 },
  { label: 'PSYCHOLOGY', x: 76, y: 72 },
  { label: 'DESIGN', x: 50, y: 82 },
  { label: 'DEEPTECH', x: 24, y: 72 },
  { label: 'SOCIETY', x: 14, y: 48 },
  { label: 'ETHICS', x: 24, y: 24 },
]

export const heroLinks: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 0],
  [0, 2],
  [2, 4],
  [4, 6],
  [6, 0],
]

export const traditionalFlow = ['Learn', 'Memorize', 'Certify'] as const

export const polymathFlow = ['Learn', 'Connect', 'Apply', 'Create'] as const

export const disciplines: Discipline[] = [
  {
    title: 'AI & Computing',
    topics: ['AI', 'ML', 'Agents', 'Robotics', 'Data'],
    x: 50,
    y: 11,
  },
  {
    title: 'DeepTech',
    topics: ['Semiconductors', 'Photonics', 'Biotechnology', 'IoT', 'XR'],
    x: 82,
    y: 24,
  },
  {
    title: 'Business',
    topics: ['Strategy', 'Finance', 'Marketing', 'Entrepreneurship'],
    x: 89,
    y: 50,
  },
  {
    title: 'Human',
    topics: ['Psychology', 'Cognition', 'Behaviour', 'Leadership'],
    x: 82,
    y: 76,
  },
  {
    title: 'Science',
    topics: ['Physics', 'Mathematics', 'Systems Thinking'],
    x: 50,
    y: 89,
  },
  {
    title: 'Design',
    topics: ['Design Thinking', 'Product', 'Creativity', 'Storytelling'],
    x: 18,
    y: 76,
  },
  {
    title: 'Society',
    topics: ['Economics', 'Future of Work', 'Digital Economy'],
    x: 11,
    y: 50,
  },
  {
    title: 'Ethics',
    topics: ['Responsible AI', 'Privacy', 'Governance'],
    x: 18,
    y: 24,
  },
]

export const universeLinks: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 0],
  [0, 3],
  [1, 4],
  [2, 5],
  [3, 6],
  [4, 7],
  [5, 0],
]

export const connectionExamples: ConnectionExample[] = [
  {
    disciplines: ['AI', 'Psychology', 'Design'],
    outcome: 'Human-Centred AI',
  },
  {
    disciplines: ['Robotics', 'Biology', 'AI'],
    outcome: 'Bio-Inspired Robotics',
  },
  {
    disciplines: ['AI', 'Business', 'Economics'],
    outcome: 'AI-Native Enterprise',
  },
]

export const creationStages: CreationStage[] = [
  { title: 'Knowledge', description: 'Explore domains.' },
  { title: 'Connections', description: 'Combine ideas.' },
  { title: 'Projects', description: 'Apply knowledge.' },
  { title: 'Prototypes', description: 'Build and test.' },
  { title: 'Innovation', description: 'Solve problems.' },
  { title: 'Startup', description: 'Create value.' },
]

export const journeySteps = [
  'Explore',
  'Connect',
  'Build',
  'Collaborate',
  'Innovate',
  'Launch',
] as const

export const ecosystemStages: EcosystemStage[] = [
  {
    title: 'PolymathGround',
    description: 'Knowledge + Connections',
  },
  {
    title: 'QaQ Passport',
    description: 'Skills + Evidence',
    href: '/services/qaq-passport',
  },
  {
    title: 'Agentic Brain',
    description: 'Personalized Intelligence',
    href: '/products/agentic-brain',
  },
  {
    title: 'Projects / Research / Startups',
    description: 'Real-world creation',
    href: '/services/polymathground-startups',
  },
]

export const ctaWords = ['Learn.', 'Connect.', 'Build.', 'Innovate.'] as const
