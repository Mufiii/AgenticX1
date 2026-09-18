export const useCaseCategories = [
  { id: 'all', label: 'All' },
  { id: 'education', label: 'Education' },
  { id: 'work', label: 'Work' },
  { id: 'business', label: 'Business' },
  { id: 'research', label: 'Research' },
  { id: 'wellness', label: 'Wellness' },
] as const

export type UseCaseCategoryId = (typeof useCaseCategories)[number]['id']
export type UseCaseCategory = Exclude<UseCaseCategoryId, 'all'>

export type UseCase = {
  id: string
  number: string
  category: UseCaseCategory
  categoryLabel: string
  title: string
  description: string
  humanRole: string
  agentWorkflow: string
  data: string
  safeguards: string
  outcome: string
  href: string
}

export const useCases: UseCase[] = [
  {
    id: 'student-learning-agent',
    number: '01',
    category: 'education',
    categoryLabel: 'Education',
    title: 'Student Learning Agent',
    description:
      'Plans study, retrieves approved content, generates practice and helps the student reflect on progress.',
    humanRole: 'Student',
    agentWorkflow: 'Plan → Retrieve → Practice → Reflect',
    data: 'Learning goals · Approved content · Progress',
    safeguards: 'Source restrictions · Student control',
    outcome: 'Structured and measurable learning',
    href: '/solutions/campus',
  },
  {
    id: 'teacher-co-pilot',
    number: '02',
    category: 'education',
    categoryLabel: 'Education',
    title: 'Teacher Co-Pilot',
    description:
      'Supports lesson design, differentiation and feedback while the educator controls pedagogy and assessment.',
    humanRole: 'Teacher',
    agentWorkflow: 'Plan → Adapt → Draft → Review',
    data: 'Curriculum · Student context · Learning materials',
    safeguards: 'Teacher approval · Assessment remains human-controlled',
    outcome: 'More personalized teaching support',
    href: '/solutions/campus',
  },
  {
    id: 'employee-knowledge-agent',
    number: '03',
    category: 'work',
    categoryLabel: 'Work',
    title: 'Employee Knowledge Agent',
    description:
      'Finds trusted internal information, drafts work and routes exceptions to accountable people.',
    humanRole: 'Employee',
    agentWorkflow: 'Retrieve → Reason → Draft → Escalate',
    data: 'Internal knowledge · Policies · Work context',
    safeguards: 'Permission controls · Source grounding · Human escalation',
    outcome: 'Faster access to organizational knowledge',
    href: '/solutions/corporate',
  },
  {
    id: 'business-diagnoser',
    number: '04',
    category: 'business',
    categoryLabel: 'Business',
    title: 'Business Diagnoser',
    description:
      'Structures discovery across customers, operations, finance and growth before recommending interventions.',
    humanRole: 'Business Leader',
    agentWorkflow: 'Discover → Analyze → Connect → Recommend',
    data: 'Customer · Operations · Finance · Growth',
    safeguards: 'Evidence tracking · Human review',
    outcome: 'More structured decision-making',
    href: '/services/agentic-enterprises',
  },
  {
    id: 'founder-research-team',
    number: '05',
    category: 'research',
    categoryLabel: 'Research',
    title: 'Founder Research Team',
    description: 'Coordinates market, customer, technology and regulatory research with source tracking.',
    humanRole: 'Founder / Researcher',
    agentWorkflow: 'Search → Compare → Synthesize → Track Sources',
    data: 'Market · Customer · Technology · Regulatory Sources',
    safeguards: 'Source citations · Evidence verification · Human judgment',
    outcome: 'Faster, traceable research',
    href: '/polymathground',
  },
  {
    id: 'wellness-navigator',
    number: '06',
    category: 'wellness',
    categoryLabel: 'Wellness',
    title: 'Wellness Navigator',
    description:
      'Connects self-reported goals and consented data to general guidance and qualified professionals.',
    humanRole: 'Individual',
    agentWorkflow: 'Understand → Guide → Track → Escalate',
    data: 'Goals · Preferences · Consented Data',
    safeguards: 'Consent · Privacy · Professional escalation',
    outcome: 'More coordinated personal guidance',
    href: '/solutions/corporate',
  },
]

export const systemStatement = [
  'Problem',
  'Human Role',
  'Agent Workflow',
  'Data',
  'Safeguards',
  'Outcomes',
] as const

export const processSteps = [
  {
    number: '01',
    title: 'Human Need',
    description: 'A person brings a goal, constraint or decision that needs support.',
  },
  {
    number: '02',
    title: 'Context & Data',
    description: 'Approved information, permissions and situation are assembled around that need.',
  },
  {
    number: '03',
    title: 'Agent Reasoning',
    description: 'The agent plans, compares options and structures a response from that context.',
  },
  {
    number: '04',
    title: 'Tools & Actions',
    description: 'Defined tools retrieve, draft, coordinate or execute the next step.',
  },
  {
    number: '05',
    title: 'Human Oversight',
    description: 'People review, approve or escalate before anything consequential happens.',
  },
  {
    number: '06',
    title: 'Measured Outcome',
    description: 'Progress is tracked against the original need, not just activity.',
  },
] as const

export const oversightPrinciples = [
  {
    number: '01',
    title: 'Human Approval',
    description: 'People approve consequential actions.',
  },
  {
    number: '02',
    title: 'Traceable Context',
    description: 'Agents operate from defined and inspectable information.',
  },
  {
    number: '03',
    title: 'Escalation',
    description: 'Exceptions move to accountable people instead of being silently handled.',
  },
] as const

export function filterUseCases(category: UseCaseCategoryId): UseCase[] {
  if (category === 'all') return useCases
  return useCases.filter((useCase) => useCase.category === category)
}
