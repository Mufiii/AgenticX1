import type { LucideIcon } from 'lucide-react'
import { Fingerprint, Lightbulb, Sparkles, Workflow } from 'lucide-react'

export type Service = {
  id: string
  name: string
  description: string
  href: string
  icon: LucideIcon
}

export const servicesCopy = {
  eyebrow: 'SERVICES',
  titleLead: 'Intelligence Built for the',
  titleAccent: 'Real World.',
  intro:
    'From specialized AI agents to complete enterprise systems, we design and deploy intelligent solutions that work alongside people and existing technology.',
} as const

export const services: Service[] = [
  {
    id: 'personalized-agents',
    name: 'Personalized Agents',
    description: 'Specialized AI agents designed around your workflows, goals and business needs.',
    href: '/services/personalized-agents',
    icon: Sparkles,
  },
  {
    id: 'agentic-enterprises',
    name: 'Agentic Enterprises',
    description: 'AI-powered operating systems that connect people, knowledge, agents and business systems.',
    href: '/services/agentic-enterprises',
    icon: Workflow,
  },
  {
    id: 'polymathground',
    name: 'PolymathGround',
    description: 'An ecosystem for founders, builders and innovators creating the next generation of intelligent products.',
    href: '/services/polymathground-startups',
    icon: Lightbulb,
  },
  {
    id: 'qaq-passport',
    name: 'QaQ Passport',
    description: 'A portable record of skills, projects and verified capabilities.',
    href: '/services/qaq-passport',
    icon: Fingerprint,
  },
]
