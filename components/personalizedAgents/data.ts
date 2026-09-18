import {
  BookOpen,
  BriefcaseBusiness,
  Compass,
  GraduationCap,
  Layers,
  MessageSquare,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Target,
  Users,
  type LucideIcon,
} from 'lucide-react'

export type EvolutionLevel = {
  id: string
  number: string
  title: string
  shortTitle: string
  description: string
  model: string
  vision?: boolean
}

export type PersonalizationPillar = {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

export type JourneyColumn = {
  title: string
  href: string
  icon: LucideIcon
  agents: string[]
  path: string
}

export const heroSteps = [
  'ASSIST',
  'UNDERSTAND',
  'PERSONALIZE',
  'ACT',
  'ORCHESTRATE',
] as const

export const evolutionLevels: EvolutionLevel[] = [
  {
    id: 'personal-assistant',
    number: '01',
    title: 'Personal Assistant',
    shortTitle: 'Assistant',
    description: 'Answers questions and helps with everyday tasks.',
    model: 'Ask → AI responds.',
  },
  {
    id: 'context-aware',
    number: '02',
    title: 'Context-Aware Agent',
    shortTitle: 'Context',
    description: 'Uses selected context such as goals, profession, projects and knowledge.',
    model: 'AI knows my context.',
  },
  {
    id: 'personality-aware',
    number: '03',
    title: 'Personality-Aware Agent',
    shortTitle: 'Personality',
    description: 'Adapts communication and support to preferences, learning styles and mental models.',
    model: 'AI understands how I prefer to think, learn and work.',
  },
  {
    id: 'goal-oriented',
    number: '04',
    title: 'Goal-Oriented Agent',
    shortTitle: 'Goals',
    description: 'Works toward defined outcomes rather than simply responding to prompts.',
    model: 'Give AI a goal, not merely a prompt.',
  },
  {
    id: 'specialist-multi-agent',
    number: '05',
    title: 'Specialist Multi-Agent System',
    shortTitle: 'Specialists',
    description:
      'Coordinates specialized agents for learning, research, career, business, communication and productivity.',
    model: 'My personal AI team works together.',
  },
  {
    id: 'connected-ecosystem',
    number: '06',
    title: 'Connected Personal Agent Ecosystem',
    shortTitle: 'Ecosystem',
    description:
      'Works across approved applications, calendars, documents, platforms, knowledge graphs and connected systems.',
    model: 'My AI can act across my approved digital environment.',
  },
  {
    id: 'adaptive-brain',
    number: '07',
    title: 'Adaptive Agentic Brain',
    shortTitle: 'Brain',
    description: 'Maintains an evolving representation of goals, knowledge, projects and previous outcomes.',
    model: 'A personalized operating layer between me, AI and my digital systems.',
  },
  {
    id: 'digital-twin',
    number: '08',
    title: 'Personal AI Digital Twin',
    shortTitle: 'Twin',
    description:
      'Long-term vision for a permission-controlled digital representation of selected aspects of the individual.',
    model: 'A digital representation working on my behalf.',
    vision: true,
  },
]

export const shiftStages = [
  {
    title: 'ASSISTANT',
    description: 'Responds to prompts.',
  },
  {
    title: 'PERSONALIZED AGENT',
    description: 'Understands context and works toward goals.',
  },
  {
    title: 'AGENTIC BRAIN',
    description: 'Coordinates multiple agents, knowledge and approved systems.',
  },
] as const

export const shiftAgents = [
  'Learning Agent',
  'Research Agent',
  'Career Agent',
  'Business Agent',
  'Wellness Agent',
] as const

export const personalizationPillars: PersonalizationPillar[] = [
  {
    number: '01',
    title: 'GOALS',
    description: "What you're trying to achieve.",
    icon: Target,
  },
  {
    number: '02',
    title: 'KNOWLEDGE',
    description: 'What you know and have learned.',
    icon: BookOpen,
  },
  {
    number: '03',
    title: 'CONTEXT',
    description: 'Your projects, work and environment.',
    icon: Layers,
  },
  {
    number: '04',
    title: 'PREFERENCES',
    description: 'How you communicate and interact.',
    icon: SlidersHorizontal,
  },
  {
    number: '05',
    title: 'WORKING STYLE',
    description: 'How you prefer to learn, work and organize.',
    icon: Compass,
  },
  {
    number: '06',
    title: 'PERMISSIONS',
    description: 'What the agent can access and do.',
    icon: ShieldCheck,
  },
]

export const networkAgents = [
  { label: 'Learning', x: 400, y: 72 },
  { label: 'Research', x: 628, y: 148 },
  { label: 'Career', x: 690, y: 310 },
  { label: 'Business', x: 560, y: 468 },
  { label: 'Wellness', x: 240, y: 468 },
  { label: 'Productivity', x: 110, y: 310 },
  { label: 'Communication', x: 172, y: 148 },
] as const

export const networkCenter = { x: 400, y: 300 }

export const humanJourneys: JourneyColumn[] = [
  {
    title: 'CAMPUS',
    href: '/solutions/campus',
    icon: GraduationCap,
    agents: ['AI Tutor', 'Learning Agent', 'Research Agent', 'Career Agent', 'Innovation Agent'],
    path: 'Learn → Build → Innovate',
  },
  {
    title: 'CORPORATE',
    href: '/solutions/corporate',
    icon: BriefcaseBusiness,
    agents: ['Work Assistant', 'Productivity Agent', 'Knowledge Agent', 'Performance Agent'],
    path: 'Perform → Adapt → Grow',
  },
  {
    title: 'COMMUNITY',
    href: '/solutions/community',
    icon: Users,
    agents: [
      'Business Assistant',
      'Intelligence Agent',
      'Sales & Marketing Agent',
      'Operations Agent',
      'ROI Agent',
    ],
    path: 'Create → Automate → Scale',
  },
]

export const twinEvolution = [
  'Personal Assistant',
  'Context-Aware',
  'Personalized',
  'Goal-Oriented',
  'Multi-Agent',
  'Connected Ecosystem',
  'Agentic Brain',
  'AI Digital Twin',
] as const

export const networkIcons: Record<string, LucideIcon> = {
  Learning: BookOpen,
  Research: Search,
  Career: BriefcaseBusiness,
  Business: Sparkles,
  Communication: MessageSquare,
  Productivity: Target,
  Wellness: Compass,
}
