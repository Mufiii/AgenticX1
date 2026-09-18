import {
  Bot,
  Cpu,
  GraduationCap,
  HeartPulse,
  Lightbulb,
  Users,
  type LucideIcon,
} from 'lucide-react'

export type MarketplaceCategoryId =
  | 'ai-agents'
  | 'learning'
  | 'expert-services'
  | 'deeptech'
  | 'startup-solutions'
  | 'wellness'

export type MarketplaceIndustryId =
  | 'healthcare'
  | 'education'
  | 'real-estate'
  | 'finance'
  | 'manufacturing'
  | 'retail'
  | 'hospitality'
  | 'professional-services'
  | 'marketing-media'
  | 'construction'
  | 'automotive'
  | 'logistics'
  | 'technology'
  | 'b2b'

export type FilterCategoryId = 'all' | MarketplaceCategoryId
export type FilterIndustryId = 'all' | MarketplaceIndustryId

export type MarketplaceCategory = {
  id: MarketplaceCategoryId
  label: string
  description: string
  icon: LucideIcon
  featured?: boolean
}

export type MarketplaceIndustry = {
  id: MarketplaceIndustryId
  label: string
  description: string
  emphasis: 'featured' | 'standard'
}

export type MarketplaceItem = {
  id: string
  name: string
  category: MarketplaceCategoryId
  industry: MarketplaceIndustryId
  industryLabel: string
  tags: string[]
  description: string
  featured?: boolean
  metadata: {
    data: string
    integrations: string
    permissions: string
    evidence: string
  }
}

export const categories: MarketplaceCategory[] = [
  {
    id: 'ai-agents',
    label: 'AI Agents',
    description: 'Industry-specific and task-specific AI agents with clear capabilities and boundaries.',
    icon: Bot,
    featured: true,
  },
  {
    id: 'learning',
    label: 'Learning Programs',
    description: 'Courses, workshops and learning pathways linked to QaQ Passport credentials.',
    icon: GraduationCap,
  },
  {
    id: 'expert-services',
    label: 'Expert Services',
    description: 'Verified mentors, consultants, researchers and implementation partners.',
    icon: Users,
  },
  {
    id: 'deeptech',
    label: 'DeepTech Tools',
    description: 'Selected hardware, software and research resources for learning and innovation.',
    icon: Cpu,
  },
  {
    id: 'startup-solutions',
    label: 'Startup Solutions',
    description: 'Products and solutions from the PolymathGround venture ecosystem.',
    icon: Lightbulb,
  },
  {
    id: 'wellness',
    label: 'Wellness Services',
    description: 'Curated wellness offerings with appropriate credentials and evidence.',
    icon: HeartPulse,
  },
]

export const categoryFilters: { id: FilterCategoryId; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'ai-agents', label: 'AI Agents' },
  { id: 'learning', label: 'Learning' },
  { id: 'expert-services', label: 'Expert Services' },
  { id: 'deeptech', label: 'DeepTech' },
  { id: 'startup-solutions', label: 'Startup Solutions' },
  { id: 'wellness', label: 'Wellness' },
]

export const industries: MarketplaceIndustry[] = [
  {
    id: 'healthcare',
    label: 'Healthcare',
    description: 'AI for healthcare operations and patient experience.',
    emphasis: 'featured',
  },
  {
    id: 'education',
    label: 'Education',
    description: 'Intelligence for students, educators and institutions.',
    emphasis: 'standard',
  },
  {
    id: 'real-estate',
    label: 'Real Estate',
    description: 'AI for property, sales and operations.',
    emphasis: 'standard',
  },
  {
    id: 'finance',
    label: 'Financial Services',
    description: 'Intelligence for customer and operational workflows.',
    emphasis: 'featured',
  },
  {
    id: 'manufacturing',
    label: 'Manufacturing',
    description: 'AI for production, operations and supply chains.',
    emphasis: 'standard',
  },
  {
    id: 'retail',
    label: 'Retail & E-commerce',
    description: 'AI for customer experience, sales and commerce.',
    emphasis: 'standard',
  },
  {
    id: 'hospitality',
    label: 'Hospitality',
    description: 'AI for guest experience and hotel operations.',
    emphasis: 'standard',
  },
  {
    id: 'professional-services',
    label: 'Professional Services',
    description: 'AI for knowledge-intensive businesses.',
    emphasis: 'standard',
  },
  {
    id: 'marketing-media',
    label: 'Marketing & Media',
    description: 'AI for content, campaigns and audience workflows.',
    emphasis: 'standard',
  },
  {
    id: 'construction',
    label: 'Construction',
    description: 'AI for project coordination, safety and site operations.',
    emphasis: 'standard',
  },
  {
    id: 'automotive',
    label: 'Automotive',
    description: 'Intelligence for dealership, service and production workflows.',
    emphasis: 'standard',
  },
  {
    id: 'logistics',
    label: 'Logistics',
    description: 'AI for routing, coordination and supply movement.',
    emphasis: 'standard',
  },
  {
    id: 'technology',
    label: 'Technology',
    description: 'Intelligence for product, engineering and customer operations.',
    emphasis: 'featured',
  },
]

export const industryFilters: { id: FilterIndustryId; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'education', label: 'Education' },
  { id: 'real-estate', label: 'Real Estate' },
  { id: 'finance', label: 'Finance' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'retail', label: 'Retail' },
  { id: 'hospitality', label: 'Hospitality' },
  { id: 'professional-services', label: 'Professional Services' },
  { id: 'technology', label: 'Technology' },
]

export const marketplaceItems: MarketplaceItem[] = [
  {
    id: 'patient-support-agent',
    name: 'Patient Support Agent',
    category: 'ai-agents',
    industry: 'healthcare',
    industryLabel: 'Healthcare',
    tags: ['Support', 'Healthcare'],
    description: 'Assists with patient enquiries and approved administrative workflows.',
    featured: true,
    metadata: {
      data: 'Approved business or customer information',
      integrations: 'CRM / Email / Calendar / API',
      permissions: 'Clearly defined access requirements',
      evidence: 'Verification / Case Study / Deployment history',
    },
  },
  {
    id: 'sales-qualification-agent',
    name: 'Sales Qualification Agent',
    category: 'ai-agents',
    industry: 'b2b',
    industryLabel: 'B2B',
    tags: ['Sales', 'Lead Qualification'],
    description: 'Qualifies inbound leads and routes opportunities to the appropriate team.',
    featured: true,
    metadata: {
      data: 'Approved business or customer information',
      integrations: 'CRM / Email / Calendar / API',
      permissions: 'Clearly defined access requirements',
      evidence: 'Verification / Case Study / Deployment history',
    },
  },
  {
    id: 'research-agent',
    name: 'Research Agent',
    category: 'ai-agents',
    industry: 'education',
    industryLabel: 'Education & Research',
    tags: ['Research', 'Knowledge'],
    description: 'Helps researchers discover, organize and synthesize information.',
    featured: true,
    metadata: {
      data: 'Approved business or customer information',
      integrations: 'CRM / Email / Calendar / API',
      permissions: 'Clearly defined access requirements',
      evidence: 'Verification / Case Study / Deployment history',
    },
  },
  {
    id: 'customer-support-agent',
    name: 'Customer Support Agent',
    category: 'ai-agents',
    industry: 'retail',
    industryLabel: 'Retail',
    tags: ['Support', 'Customer Experience'],
    description: 'Handles common customer questions and support workflows.',
    featured: true,
    metadata: {
      data: 'Approved business or customer information',
      integrations: 'CRM / Email / Calendar / API',
      permissions: 'Clearly defined access requirements',
      evidence: 'Verification / Case Study / Deployment history',
    },
  },
  {
    id: 'operations-agent',
    name: 'Operations Agent',
    category: 'ai-agents',
    industry: 'manufacturing',
    industryLabel: 'Manufacturing',
    tags: ['Operations', 'Workflow'],
    description: 'Supports operational workflows, coordination and information retrieval.',
    featured: true,
    metadata: {
      data: 'Approved business or customer information',
      integrations: 'CRM / Email / Calendar / API',
      permissions: 'Clearly defined access requirements',
      evidence: 'Verification / Case Study / Deployment history',
    },
  },
  {
    id: 'recruitment-agent',
    name: 'Recruitment Agent',
    category: 'ai-agents',
    industry: 'professional-services',
    industryLabel: 'Professional Services',
    tags: ['HR', 'Recruitment'],
    description: 'Supports candidate screening, communication and recruitment workflows.',
    featured: true,
    metadata: {
      data: 'Approved business or customer information',
      integrations: 'CRM / Email / Calendar / API',
      permissions: 'Clearly defined access requirements',
      evidence: 'Verification / Case Study / Deployment history',
    },
  },
  {
    id: 'client-onboarding-agent',
    name: 'Client Onboarding Agent',
    category: 'ai-agents',
    industry: 'finance',
    industryLabel: 'Financial Services',
    tags: ['Onboarding', 'Operations'],
    description: 'Supports approved client onboarding questions and information collection.',
    metadata: {
      data: 'Approved business or customer information',
      integrations: 'CRM / Email / Calendar / API',
      permissions: 'Clearly defined access requirements',
      evidence: 'Verification / Case Study / Deployment history',
    },
  },
  {
    id: 'property-enquiry-agent',
    name: 'Property Enquiry Agent',
    category: 'ai-agents',
    industry: 'real-estate',
    industryLabel: 'Real Estate',
    tags: ['Sales', 'Enquiries'],
    description: 'Assists with property enquiries and approved listing information.',
    metadata: {
      data: 'Approved business or customer information',
      integrations: 'CRM / Email / Calendar / API',
      permissions: 'Clearly defined access requirements',
      evidence: 'Verification / Case Study / Deployment history',
    },
  },
  {
    id: 'guest-experience-agent',
    name: 'Guest Experience Agent',
    category: 'ai-agents',
    industry: 'hospitality',
    industryLabel: 'Hospitality',
    tags: ['Support', 'Guest Experience'],
    description: 'Handles common guest questions and approved hospitality workflows.',
    metadata: {
      data: 'Approved business or customer information',
      integrations: 'CRM / Email / Calendar / API',
      permissions: 'Clearly defined access requirements',
      evidence: 'Verification / Case Study / Deployment history',
    },
  },
  {
    id: 'campaign-support-agent',
    name: 'Campaign Support Agent',
    category: 'ai-agents',
    industry: 'marketing-media',
    industryLabel: 'Marketing & Media',
    tags: ['Marketing', 'Content'],
    description: 'Supports campaign briefs, content organisation and approved publishing workflows.',
    metadata: {
      data: 'Approved business or customer information',
      integrations: 'CRM / Email / Calendar / API',
      permissions: 'Clearly defined access requirements',
      evidence: 'Verification / Case Study / Deployment history',
    },
  },
  {
    id: 'site-coordination-agent',
    name: 'Site Coordination Agent',
    category: 'ai-agents',
    industry: 'construction',
    industryLabel: 'Construction',
    tags: ['Operations', 'Coordination'],
    description: 'Supports project updates, information retrieval and approved site coordination tasks.',
    metadata: {
      data: 'Approved business or customer information',
      integrations: 'CRM / Email / Calendar / API',
      permissions: 'Clearly defined access requirements',
      evidence: 'Verification / Case Study / Deployment history',
    },
  },
  {
    id: 'service-desk-agent',
    name: 'Service Desk Agent',
    category: 'ai-agents',
    industry: 'automotive',
    industryLabel: 'Automotive',
    tags: ['Service', 'Support'],
    description: 'Assists with service enquiries and approved workshop scheduling workflows.',
    metadata: {
      data: 'Approved business or customer information',
      integrations: 'CRM / Email / Calendar / API',
      permissions: 'Clearly defined access requirements',
      evidence: 'Verification / Case Study / Deployment history',
    },
  },
  {
    id: 'shipment-status-agent',
    name: 'Shipment Status Agent',
    category: 'ai-agents',
    industry: 'logistics',
    industryLabel: 'Logistics',
    tags: ['Operations', 'Tracking'],
    description: 'Retrieves approved shipment status and supports routine coordination questions.',
    metadata: {
      data: 'Approved business or customer information',
      integrations: 'CRM / Email / Calendar / API',
      permissions: 'Clearly defined access requirements',
      evidence: 'Verification / Case Study / Deployment history',
    },
  },
  {
    id: 'product-support-agent',
    name: 'Product Support Agent',
    category: 'ai-agents',
    industry: 'technology',
    industryLabel: 'Technology',
    tags: ['Support', 'Product'],
    description: 'Handles common product questions and approved technical support workflows.',
    metadata: {
      data: 'Approved business or customer information',
      integrations: 'CRM / Email / Calendar / API',
      permissions: 'Clearly defined access requirements',
      evidence: 'Verification / Case Study / Deployment history',
    },
  },
  {
    id: 'healthcare-intelligence-pathway',
    name: 'Healthcare Intelligence Pathway',
    category: 'learning',
    industry: 'healthcare',
    industryLabel: 'Healthcare',
    tags: ['Learning', 'Credentials'],
    description: 'A structured learning pathway linked to QaQ Passport credentials for healthcare teams.',
    metadata: {
      data: 'Learner profile and approved progress records',
      integrations: 'Learning platform / QaQ Passport',
      permissions: 'Learner identity and credential access',
      evidence: 'Curriculum description / credential mapping',
    },
  },
  {
    id: 'education-workshop-series',
    name: 'Agentic Workflows Workshop',
    category: 'learning',
    industry: 'education',
    industryLabel: 'Education',
    tags: ['Workshop', 'Learning'],
    description: 'A workshop series for educators and institutions exploring practical AI workflows.',
    metadata: {
      data: 'Programme outline and participant context',
      integrations: 'Learning platform / Calendar',
      permissions: 'Institutional enrolment records',
      evidence: 'Curriculum description / facilitator credentials',
    },
  },
  {
    id: 'implementation-partner',
    name: 'Implementation Partner',
    category: 'expert-services',
    industry: 'technology',
    industryLabel: 'Technology',
    tags: ['Consulting', 'Implementation'],
    description: 'Hands-on support for scoping, integrating and governing marketplace solutions.',
    metadata: {
      data: 'Approved project and organisational context',
      integrations: 'Email / Calendar / Workspace',
      permissions: 'Defined engagement access',
      evidence: 'Partner credentials / engagement history',
    },
  },
  {
    id: 'research-mentor',
    name: 'Research Mentor',
    category: 'expert-services',
    industry: 'education',
    industryLabel: 'Education & Research',
    tags: ['Mentoring', 'Research'],
    description: 'Mentorship for research design, evidence review and knowledge synthesis.',
    metadata: {
      data: 'Approved research context and goals',
      integrations: 'Email / Calendar',
      permissions: 'Scoped advisory access',
      evidence: 'Mentor credentials / publication record',
    },
  },
  {
    id: 'research-toolkit',
    name: 'Research Toolkit',
    category: 'deeptech',
    industry: 'education',
    industryLabel: 'Education & Research',
    tags: ['Tools', 'Research'],
    description: 'Selected software and research resources for learning and experimentation.',
    metadata: {
      data: 'Approved research or learning datasets',
      integrations: 'API / Workspace',
      permissions: 'Licence and access requirements',
      evidence: 'Documentation / usage notes',
    },
  },
  {
    id: 'venture-operating-kit',
    name: 'Venture Operating Kit',
    category: 'startup-solutions',
    industry: 'technology',
    industryLabel: 'Technology',
    tags: ['Startups', 'Operations'],
    description: 'A starter set of tools and workflows from the PolymathGround venture ecosystem.',
    metadata: {
      data: 'Founder and venture operating information',
      integrations: 'CRM / Email / Workspace',
      permissions: 'Founder-approved access',
      evidence: 'Product description / deployment notes',
    },
  },
  {
    id: 'workplace-wellness-programme',
    name: 'Workplace Wellness Programme',
    category: 'wellness',
    industry: 'professional-services',
    industryLabel: 'Professional Services',
    tags: ['Wellness', 'Workplace'],
    description: 'A curated wellness offering with stated credentials and evidence requirements.',
    metadata: {
      data: 'Consent-based wellness and programme information',
      integrations: 'Email / Calendar',
      permissions: 'Explicit participant consent',
      evidence: 'Provider credentials / programme description',
    },
  },
]

export const trustColumns = [
  {
    id: '01',
    title: 'What it does',
    description: 'Clear capabilities, boundaries and intended use.',
  },
  {
    id: '02',
    title: 'What it needs',
    description: 'Data, integrations and permissions required.',
  },
  {
    id: '03',
    title: 'What supports it',
    description: 'Verification, evidence, credentials, deployments or case studies.',
  },
] as const

export const processSteps = [
  {
    id: '01',
    title: 'Discover',
    description: 'Find solutions by industry, function or category.',
  },
  {
    id: '02',
    title: 'Evaluate',
    description: 'Review capabilities, data requirements, permissions and evidence.',
  },
  {
    id: '03',
    title: 'Connect',
    description: 'Choose the appropriate provider or integration.',
  },
  {
    id: '04',
    title: 'Deploy',
    description: 'Move the solution into your workflow.',
  },
] as const

export function itemMatchesFilters(
  item: MarketplaceItem,
  category: FilterCategoryId,
  industry: FilterIndustryId,
  query: string,
) {
  if (category !== 'all' && item.category !== category) return false
  if (industry !== 'all' && item.industry !== industry) return false

  const term = query.trim().toLowerCase()
  if (!term) return true

  const haystack = [
    item.name,
    item.description,
    item.industryLabel,
    item.category,
    ...item.tags,
  ]
    .join(' ')
    .toLowerCase()

  return haystack.includes(term)
}
