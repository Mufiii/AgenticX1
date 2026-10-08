export type PageContent = {
  title: string
  intro: string
  items: string[]
  year?: string
}

export const pageContent: Record<string, PageContent> = {
  solutions: {
    title: 'Transformation for every context.',
    intro: 'Human-centred systems for the people, organizations and communities navigating the next era of work.',
    items: ['Campus', 'Corporate', 'Community'],
  },
  'solutions/campus': {
    title: 'From AI learner to DeepTech innovator.',
    intro:
      'Transform students through AI and DeepTech leadership, multidisciplinary learning, innovation studios and real-world projects.',
    items: [
      'AI & DeepTech Leadership',
      'Innovation Studios',
      'AI-powered learning',
      'Industry bridge',
      'Educator enablement',
      'Innovation readiness',
    ],
  },
  'solutions/corporate': {
    title: 'Build a healthier, AI-powered workforce.',
    intro:
      'Prepare people and processes for agentic work through workforce enablement, voluntary wellness insights and ethical governance.',
    items: [
      'AI-powered employee',
      'Wellness intelligence',
      'Performance enablement',
      'Responsible AI governance',
      'Inclusive value models',
    ],
  },
  'solutions/community': {
    title: 'Turn local enterprise into an agentic ecosystem.',
    intro:
      'Move from isolated digital tools to connected agentic enterprises where people orchestrate specialized AI systems around measurable goals.',
    items: ['Entrepreneur AI literacy', 'Agentic enterprise design', 'MSME transformation', 'Founder studios', 'Shared ecosystem'],
  },
  services: {
    title: 'Transformation from readiness to execution.',
    intro:
      'Every engagement begins with context. We assess objectives, people, processes, knowledge, data and risk; then design, pilot and scale.',
    items: ['Personalized agents', 'Agentic Brain', 'Agentic enterprises', 'PolymathGround startups', 'QaQ Passport', 'Agentic ARMY'],
  },
  'services/personalized-agents': {
    title: 'From AI That Responds to AI That Understands You.',
    intro:
      'Personalized Agents progressively learn a person’s goals, context, preferences, working style, permissions and approved data so they can move from answering questions to helping achieve meaningful outcomes.',
    items: [
      'Personal Assistant',
      'Context-Aware Agent',
      'Personality-Aware Agent',
      'Goal-Oriented Agent',
      'Specialist Multi-Agent System',
      'Connected Personal Agent Ecosystem',
      'Adaptive Agentic Brain',
      'Personal AI Digital Twin',
    ],
  },
  'services/agentic-brain': {
    title: 'Your human-directed AI operating layer.',
    intro: 'A secure orchestration layer for memory, goals, agents, tools and human decisions.',
    items: ['Identity & permissions', 'Context & memory', 'Agent orchestration', 'Decision workspace', 'Wellness connections'],
  },
  'services/agentic-enterprises': {
    title: 'Redesign work for coordinated intelligence.',
    intro: 'Business redesign for coordinated human–AI workflows, governance and new value creation.',
    items: ['Map workflows', 'Design governance', 'Pilot responsibly', 'Scale evidence-backed value'],
  },
  polymathground: {
    title: 'Learn Across Disciplines. Connect the Patterns. Build the Future.',
    intro:
      'A short-knowledge and innovation ecosystem developing multidisciplinary minds for the AI & DeepTech era.',
    items: ['Knowledge', 'Connections', 'Projects', 'Innovation', 'Startups'],
  },
  'services/polymathground-startups': {
    title: 'Startup infrastructure for the agentic era.',
    intro: 'PolymathGround helps founders build, test and scale ventures with shared intelligence, talent and opportunity.',
    items: ['Founder studios', 'Shared infrastructure', 'Talent and mentors', 'Go-to-market support'],
  },
  'services/qaq-passport': {
    title: "Don't just show what you studied. Show what you can do.",
    intro: 'A learner-controlled digital record of certified skills, competencies, projects and demonstrated capabilities — built to evolve with you.',
    items: ['Certified knowledge', 'Technical skills', 'Verified projects', 'Portable credentials'],
  },
  research: {
    title: 'Researching the shape of intelligence.',
    intro: 'Explorations and roadmaps for a more capable, secure and human-centred intelligence infrastructure.',
    items: ['Agentic Brain', 'AI Digital Twin', 'Photonic Brain', 'Human transformation'],
  },
  'research/agentic-brain': {
    title: 'From knowledge base to knowledge graph.',
    intro: 'Organize goals, knowledge, preferences and agents in a connected architecture that supports better decisions.',
    items: ['Contextual memory', 'Personality-aware intelligence', 'Specialized agents', 'Decision support'],
  },
  'research/ai-digital-twin': {
    title: 'A trusted model of context—not a copy of a person.',
    intro: 'A 2030 roadmap for identity-preserving, consent-based digital twins. Not a currently available product.',
    items: ['Identity vault', 'Context model', 'Voice & likeness controls', 'Specialist twins', 'Economic agency'],
    year: '2030 · ROADMAP',
  },
  'research/photonic-brain': {
    title: 'Exploring light-speed intelligence infrastructure.',
    intro:
      'A 2033 research direction exploring photonic acceleration for efficient AI inference and secure personal intelligence services.',
    items: ['Photonic acceleration', 'Hybrid architecture', 'Secure intelligence infrastructure', 'Wellness research', 'Energy and scale'],
    year: '2033 · RESEARCH DIRECTION',
  },
  ecosystem: {
    title: 'An ecosystem for the agentic era.',
    intro: 'Connect learners, founders, institutions, solution providers and opportunities through shared infrastructure.',
    items: ['AGIx', 'PolymathGround', 'QaQ Passport', 'Agentic ARMY', 'Marketplace'],
  },
  company: {
    title: 'Building responsibly, in public.',
    intro: 'AgenticX Global Business Transformation is shaping a human-centred approach to the agentic and AGI era.',
    items: ['About us', 'Careers', 'Trust center', 'Partnerships', 'Workshops', 'Contact'],
  },
}
