import {
  BriefcaseBusiness,
  Cpu,
  Fingerprint,
  GraduationCap,
  Lightbulb,
  Sparkles,
  UserRound,
  Users,
  Workflow,
  Zap,
} from 'lucide-react'
import type { NavItem } from '@/components/nav/types'

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Solutions',
    href: '/solutions',
    layout: 'solutions',
    columns: [
      {
        heading: 'Solutions',
        appearance: 'icon',
        links: [
          {
            label: 'Campus',
            href: '/solutions/campus',
            icon: GraduationCap,
            description: 'Personalized intelligence for students and educators.',
          },
          {
            label: 'Corporate',
            href: '/solutions/corporate',
            icon: BriefcaseBusiness,
            description: 'AI systems that augment employees and teams.',
          },
          {
            label: 'Community',
            href: '/solutions/community',
            icon: Users,
            description: 'Intelligence connecting people, knowledge and opportunity.',
          },
        ],
      },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    layout: 'services',
    columns: [
      {
        heading: 'Services',
        appearance: 'icon',
        links: [
          {
            label: 'Personalized Agents',
            href: '/services/personalized-agents',
            icon: Sparkles,
            description: 'Agents that learn a person\'s goals, context and working style.',
          },
          {
            label: 'Agentic Enterprises',
            href: '/services/agentic-enterprises',
            icon: Workflow,
            description: 'Redesign work for coordinated human–AI execution.',
          },
          {
            label: 'PolymathGround Startups',
            href: '/services/polymathground-startups',
            icon: Lightbulb,
            description: 'Infrastructure for founders building in the agentic era.',
          },
          {
            label: 'QaQ Passport',
            href: '/services/qaq-passport',
            icon: Fingerprint,
            description: 'A portable record of skills, projects and proven capability.',
          },
        ],
      },
    ],
  },
  {
    label: 'Product',
    href: '/product',
    aliases: ['/products'],
    layout: 'product',
    columns: [
      {
        heading: 'Product',
        appearance: 'icon',
        links: [
          {
            label: 'Agentic Brain',
            href: '/product/agentic-brain',
            icon: Cpu,
            description: 'The intelligence layer for autonomous business execution.',
          },
          {
            label: 'AI Digital Twin',
            href: '/product/ai-digital-twin',
            icon: UserRound,
            description: 'A continuously developing intelligence layer built around the individual.',
          },
          {
            label: 'Photonic Brain',
            href: '/product/photonic-brain',
            icon: Zap,
            description: 'A second brain for human longevity.',
          },
          {
            label: 'AGIx',
            href: '/product/agix',
            icon: Sparkles,
            description: 'The broader intelligence ecosystem connecting humans, agents and systems.',
          },
        ],
      },
    ],
  },
  {
    label: 'Company',
    href: '/company',
    aliases: ['/about'],
    layout: 'company',
    media: {
      src: '/images/corp-cta.png',
      alt: 'AgenticX leadership',
    },
    columns: [
      {
        heading: 'Company',
        appearance: 'plain',
        links: [
          { label: 'About Us', href: '/about' },
          { label: 'Contact', href: '/contact' },
          { label: 'Events', href: '/events' },
          { label: 'Career', href: '/career' },
          { label: 'Marketplace', href: '/marketplace' },
          { label: 'Use Cases', href: '/use-cases' },
        ],
      },
    ],
  },
]
