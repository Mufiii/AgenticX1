'use client'

import {
  FileText,
  MessageSquare,
  Folder,
  StickyNote,
  Database,
  Users,
  Target,
  BarChart3,
  Network,
  BookOpen,
  Lightbulb,
  Brain,
  Link2,
  GitBranch,
  Zap,
  GraduationCap,
  BriefcaseBusiness,
  Rocket,
  ArrowDown,
} from 'lucide-react'

const knowledgeSources = [
  { label: 'Documents', icon: FileText },
  { label: 'Conversations', icon: MessageSquare },
  { label: 'Files', icon: Folder },
  { label: 'Notes', icon: StickyNote },
  { label: 'Data', icon: Database },
]

const knowledgeNodes = [
  { label: 'People', icon: Users },
  { label: 'Goals', icon: Target },
  { label: 'Skills', icon: BarChart3 },
  { label: 'Projects', icon: Network, active: true },
  { label: 'Knowledge', icon: BookOpen },
  { label: 'Opportunities', icon: Lightbulb },
]

const intelligenceSteps = [
  {
    label: 'Understand Context',
    icon: Brain,
  },
  {
    label: 'Connect Information',
    icon: Link2,
  },
  {
    label: 'Support Decisions',
    icon: GitBranch,
  },
  {
    label: 'Take Action',
    icon: Zap,
  },
]

const journeys = [
  {
    title: 'Students',
    icon: GraduationCap,
    description: 'From learning to future careers.',
    items: ['Subjects', 'Skills', 'Projects', 'Interests', 'Career'],
  },
  {
    title: 'Employees',
    icon: BriefcaseBusiness,
    description: 'From roles to meaningful growth.',
    items: [
      'Roles',
      'Responsibilities',
      'Competencies',
      'Goals',
      'Development',
    ],
  },
  {
    title: 'Entrepreneurs',
    icon: Rocket,
    description: 'From ideas to real-world impact.',
    items: [
      'Ideas',
      'Customers',
      'Opportunities',
      'Market',
      'Growth',
    ],
  },
]

export default function TheCore() {
  return (
    <section className="relative overflow-hidden bg-[#05050c] text-white">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-250px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#7047ff]/10 blur-[150px]" />

        <div className="absolute -left-[300px] top-[35%] h-[500px] w-[500px] rounded-full bg-[#7047ff]/[0.06] blur-[140px]" />

        <div className="absolute -right-[300px] bottom-[10%] h-[500px] w-[500px] rounded-full bg-[#8b5cf6]/[0.06] blur-[140px]" />

        <div className="absolute left-1/2 top-[20%] h-[900px] w-[900px] -translate-x-1/2 rounded-full border border-white/[0.025]" />

        <div className="absolute left-1/2 top-[25%] h-[700px] w-[700px] -translate-x-1/2 rounded-full border border-[#7047ff]/[0.06]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto max-w-[1000px] text-center">
          <div className="mb-7 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#9275ff]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#a997ff] sm:text-[11px]">
              The Core
            </span>

            <span className="h-px w-12 bg-[#9275ff]" />
          </div>

          <h2 className="text-[clamp(2.4rem,5.5vw,5rem)] font-normal leading-[0.98] tracking-[-0.055em]">
            Your Knowledge Is More Than
            <br />

            <span className="bg-gradient-to-r from-white via-[#c7b8ff] to-[#8b5cf6] bg-clip-text text-transparent">
              Information.
            </span>{' '}

            <span className="bg-gradient-to-r from-[#9b7cff] to-[#c084fc] bg-clip-text text-transparent">
              It&apos;s a Network of Relationships.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[780px] text-[16px] leading-[1.7] text-white/55 sm:text-[18px]">
            Most AI systems can retrieve your documents, conversations and
            data.{' '}
            <strong className="font-medium text-white">
              Agentic Brain goes further by connecting them.
            </strong>
          </p>

          <p className="mx-auto mt-4 max-w-[850px] text-[15px] leading-[1.7] text-white/40 sm:text-[17px]">
            It transforms personal, academic, professional and organizational
            knowledge into a living map of relationships between people,
            goals, skills, projects, decisions, activities and information.
          </p>
        </div>

        {/* =====================================================
            KNOWLEDGE BASE
        ===================================================== */}

        <div className="mx-auto mt-16 max-w-[1100px]">
          <div className="relative overflow-hidden rounded-[28px] border border-white/[0.12] bg-white/[0.025] px-6 py-8 backdrop-blur-xl sm:px-10">

            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#805cff]/60 to-transparent" />

            <div className="mb-8 text-center">
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#a997ff]">
                Knowledge Base
              </p>

              <h3 className="mt-2 text-xl font-medium sm:text-2xl">
                Everything You Know
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
              {knowledgeSources.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.label}
                    className="group flex flex-col items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-6 transition-all duration-300 hover:border-[#805cff]/40 hover:bg-[#805cff]/[0.05]"
                  >
                    <div className="flex size-12 items-center justify-center rounded-xl border border-[#805cff]/20 bg-[#805cff]/10 text-[#a996ff]">
                      <Icon size={21} strokeWidth={1.6} />
                    </div>

                    <span className="mt-3 text-sm text-white/65">
                      {item.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center py-5">
          <div className="flex flex-col items-center">
            <div className="h-10 w-px bg-gradient-to-b from-[#805cff]/60 to-[#805cff]" />
            <ArrowDown size={18} className="text-[#9c83ff]" />
          </div>
        </div>

        {/* =====================================================
            KNOWLEDGE GRAPH
        ===================================================== */}

        <div className="relative mx-auto max-w-[1200px]">
          <div className="relative overflow-hidden rounded-[32px] border border-[#805cff]/25 bg-[#080811]/80 px-5 py-10 sm:px-10 sm:py-12">

            {/* Graph atmosphere */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7047ff]/[0.08] blur-[100px]" />

            <div className="relative text-center">
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#a997ff]">
                Knowledge Graph
              </p>

              <h3 className="mt-2 text-2xl font-medium sm:text-3xl">
                A Living Map of Your Knowledge
              </h3>

              <p className="mx-auto mt-3 max-w-[620px] text-sm text-white/45">
                People, goals, skills, projects and information become
                connected context.
              </p>
            </div>

            {/* Graph */}
            <div className="relative mx-auto mt-12 max-w-[1050px]">

              {/* Desktop connector line */}
              <div className="pointer-events-none absolute left-[8%] right-[8%] top-1/2 hidden h-px bg-gradient-to-r from-transparent via-[#8b6cff]/50 to-transparent lg:block" />

              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">

                {knowledgeNodes.map((node) => {
                  const Icon = node.icon

                  return (
                    <div
                      key={node.label}
                      className={`relative flex flex-col items-center ${
                        node.active ? 'z-10' : ''
                      }`}
                    >
                      {/* Node */}
                      <div
                        className={`
                          relative flex size-[76px] items-center justify-center
                          rounded-full border
                          transition-all duration-500
                          sm:size-[86px]
                          ${
                            node.active
                              ? 'border-[#a78bfa] bg-[#7047ff]/20 shadow-[0_0_50px_rgba(112,71,255,0.35)]'
                              : 'border-[#7659e8]/40 bg-[#7047ff]/10'
                          }
                        `}
                      >
                        {node.active && (
                          <div className="absolute inset-[-10px] rounded-full border border-[#805cff]/20" />
                        )}

                        <Icon
                          size={28}
                          strokeWidth={1.5}
                          className={
                            node.active
                              ? 'text-[#d2c6ff]'
                              : 'text-[#a996ff]'
                          }
                        />
                      </div>

                      <span className="mt-4 text-sm font-medium text-white/80">
                        {node.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center py-5">
          <div className="flex flex-col items-center">
            <div className="h-10 w-px bg-gradient-to-b from-[#805cff]/60 to-[#805cff]" />
            <ArrowDown size={18} className="text-[#9c83ff]" />
          </div>
        </div>

        {/* =====================================================
            AGENTIC INTELLIGENCE
        ===================================================== */}

        <div className="mx-auto max-w-[1150px]">
          <div className="relative overflow-hidden rounded-[28px] border border-white/[0.10] bg-white/[0.025] px-5 py-10 sm:px-10">

            <div className="text-center">
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#a997ff]">
                Agentic Intelligence
              </p>

              <h3 className="mt-2 text-2xl font-medium sm:text-3xl">
                From Connected Knowledge to Real-World Outcomes
              </h3>
            </div>

            <div className="mt-10 grid gap-3 md:grid-cols-4">
              {intelligenceSteps.map((step, index) => {
                const Icon = step.icon

                return (
                  <div
                    key={step.label}
                    className="relative"
                  >
                    <div className="flex h-full items-center gap-4 rounded-2xl border border-[#805cff]/25 bg-[#7047ff]/[0.05] p-5">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#805cff]/25 bg-[#7047ff]/10 text-[#ad99ff]">
                        <Icon size={20} strokeWidth={1.6} />
                      </div>

                      <div>
                        <span className="text-[10px] text-[#9b84ff]">
                          0{index + 1}
                        </span>

                        <p className="mt-1 text-sm font-medium text-white/85">
                          {step.label}
                        </p>
                      </div>
                    </div>

                    {index < intelligenceSteps.length - 1 && (
                      <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-[#8d72ff] md:block">
                        →
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* =====================================================
            CONTEXT
        ===================================================== */}

        <div className="mx-auto mt-24 max-w-[1200px]">
          <div className="text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#a997ff]">
              Context, Not Just Content
            </p>

            <h3 className="mt-3 text-3xl font-normal tracking-tight sm:text-4xl">
              The Same Knowledge.
              <br />
              <span className="text-white/45">
                Different Journeys.
              </span>
            </h3>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {journeys.map((journey) => {
              const Icon = journey.icon

              return (
                <article
                  key={journey.title}
                  className="group rounded-[26px] border border-white/[0.10] bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#805cff]/35 hover:bg-white/[0.04] sm:p-7"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-[#805cff]/25 bg-[#7047ff]/10 text-[#a996ff]">
                      <Icon size={22} strokeWidth={1.6} />
                    </div>

                    <div>
                      <h4 className="text-lg font-medium">
                        {journey.title}
                      </h4>

                      <p className="mt-1 text-xs text-white/40">
                        {journey.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 flex items-center gap-1">
                    {journey.items.map((item, index) => (
                      <div
                        key={item}
                        className="flex min-w-0 flex-1 flex-col items-center"
                      >
                        <div className="relative flex w-full items-center">
                          {index > 0 && (
                            <div className="h-px flex-1 bg-[#805cff]/25" />
                          )}

                          <div className="size-2 shrink-0 rounded-full bg-[#9a80ff] shadow-[0_0_12px_rgba(154,128,255,0.5)]" />

                          {index < journey.items.length - 1 && (
                            <div className="h-px flex-1 bg-[#805cff]/25" />
                          )}
                        </div>

                        <span className="mt-3 text-center text-[9px] leading-tight text-white/45 sm:text-[10px]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        {/* =====================================================
            RESULT
        ===================================================== */}

        <div className="mx-auto mt-20 max-w-[1000px]">
          <div className="relative overflow-hidden rounded-[30px] border border-[#805cff]/40 bg-[#7047ff]/[0.06] px-6 py-12 text-center shadow-[0_0_80px_rgba(112,71,255,0.08)] sm:px-10">

            <div className="absolute inset-x-[20%] top-0 h-px bg-gradient-to-r from-transparent via-[#a78bfa] to-transparent" />

            <p className="text-sm font-medium text-[#a997ff]">
              The Result
            </p>

            <blockquote className="mx-auto mt-5 max-w-[800px] text-[clamp(1.8rem,4vw,3.4rem)] font-normal leading-[1.08] tracking-[-0.04em]">
              AI doesn&apos;t just know what you know.
              <br />

              <span className="bg-gradient-to-r from-[#a78bfa] to-[#c084fc] bg-clip-text text-transparent">
                It understands how your knowledge connects.
              </span>
            </blockquote>
          </div>
        </div>

        {/* Footer accent */}
        <div className="mt-16 flex items-center justify-center gap-5">
          <span className="h-px w-16 bg-[#8065ff]/50" />

          <span className="text-[9px] uppercase tracking-[0.35em] text-white/30">
            Your Knowledge · A More Intelligent You
          </span>

          <span className="h-px w-16 bg-[#8065ff]/50" />
        </div>
      </div>
    </section>
  )
}