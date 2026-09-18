import {
  BadgeCheck,
  BookOpen,
  Box,
  Briefcase,
  Code2,
  FlaskConical,
  Rocket,
  Users,
  type LucideIcon,
} from 'lucide-react'

export type PassportStat = {
  label: string
  value: string
  detail: string
}

export type CapabilityItem = {
  title: string
  description: string
  icon: LucideIcon
}

export type AudienceItem = {
  title: string
  description: string
}

export type JourneyStage = {
  number: string
  label: string
}

export type PolymathNode = {
  label: string
  x: number
  y: number
}

export const passportSkills = ['AI', 'Python', 'Robotics', 'Business'] as const

export const passportStats: PassportStat[] = [
  { label: 'Projects', value: '3', detail: 'Verified' },
  { label: 'Credentials', value: '8', detail: 'Verified' },
  { label: 'Capabilities', value: '12', detail: 'Demonstrated' },
]

export const traditionalItems = ['Degree', 'Course', 'Exam', 'Certificate'] as const

export const qaqItems = [
  'Knowledge',
  'Skills',
  'Projects',
  'Evidence',
  'Competencies',
  'Achievements',
] as const

export const quanta = [
  'Knowledge',
  'Skill',
  'Project',
  'Challenge',
  'Research',
  'Experience',
  'Achievement',
] as const

export const modelPipeline = ['Learn', 'Demonstrate', 'Verify', 'Accumulate'] as const

export const capabilities: CapabilityItem[] = [
  {
    title: 'Certified Knowledge',
    description: 'Technical and academic learning.',
    icon: BookOpen,
  },
  {
    title: 'Technical Skills',
    description: 'AI, software, robotics, DeepTech etc.',
    icon: Code2,
  },
  {
    title: 'Projects',
    description: 'Projects, prototypes and portfolio evidence.',
    icon: Box,
  },
  {
    title: 'Research',
    description: 'Research participation and innovation work.',
    icon: FlaskConical,
  },
  {
    title: 'Experience',
    description: 'Internships and industry exposure.',
    icon: Briefcase,
  },
  {
    title: 'Entrepreneurship',
    description: 'Startup and business activities.',
    icon: Rocket,
  },
  {
    title: 'Leadership',
    description: 'Leadership and collaboration achievements.',
    icon: Users,
  },
  {
    title: 'Certifications',
    description: 'Verified external credentials.',
    icon: BadgeCheck,
  },
]

export const verificationSteps = [
  'Learning Experience',
  'Evidence',
  'Verification',
  'Digital Credential',
  'QaQ Passport',
] as const

export const verificationDestinations = [
  'Institutions',
  'Employers',
  'Collaborators',
] as const

export const polymathNodes: PolymathNode[] = [
  { label: 'AI', x: 50, y: 12 },
  { label: 'DeepTech', x: 78, y: 24 },
  { label: 'Software', x: 86, y: 50 },
  { label: 'Robotics', x: 78, y: 76 },
  { label: 'Business', x: 50, y: 88 },
  { label: 'Research', x: 22, y: 76 },
  { label: 'Entrepreneurship', x: 14, y: 50 },
  { label: 'Leadership', x: 22, y: 24 },
]

export const polymathLinks: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 0],
  [0, 2],
  [4, 6],
]

export const audiences: AudienceItem[] = [
  {
    title: 'For Learners',
    description: 'Own and showcase your evolving capability.',
  },
  {
    title: 'For Employers',
    description: 'See evidence beyond a resume.',
  },
  {
    title: 'For Institutions',
    description: 'Recognize and verify learning outcomes.',
  },
]

export const journeyStages: JourneyStage[] = [
  { number: '01', label: 'Learn' },
  { number: '02', label: 'Demonstrate' },
  { number: '03', label: 'Verify' },
  { number: '04', label: 'Accumulate' },
  { number: '05', label: 'Showcase' },
  { number: '06', label: 'Progress' },
]

export const identityFormula = [
  'What you know',
  'What you can do',
  'What you have built',
  'What you have proven',
] as const
