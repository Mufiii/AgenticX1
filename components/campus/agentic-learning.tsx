import { CampusEyebrow, CampusSection } from '@/components/campus/campus-ui'

const agents = [
  'Learning',
  'Research',
  'Projects',
  'Career Development',
  'Innovation',
  'Entrepreneurship',
] as const

export function AgenticLearning() {
  return (
    <CampusSection className="border-y border-[#2c2932] bg-[#100e16]">
      <div className="mx-auto max-w-[760px] text-center" data-campus-reveal>
        <CampusEyebrow>Agentic Learning</CampusEyebrow>
        <h2 className="mt-6 text-[clamp(2.25rem,5vw,4.5rem)] font-normal leading-[1.05] tracking-[-0.06em]">
          A Personal AI Brain for <em className="not-italic text-[#c4b5fd]">Every Student</em>
        </h2>
        <p className="mx-auto mt-6 max-w-[560px] text-[16px] leading-[1.7] text-[#9b979e]">
          Students can build a personalized Agentic AI Brain that connects their learning goals,
          knowledge, skills, projects and career interests.
        </p>
        <p className="mx-auto mt-4 max-w-[480px] text-[15px] leading-[1.7] text-[#8f8a94]">
          Specialized AI agents can support:
        </p>
      </div>

      <div
        className="relative mx-auto mt-14 max-w-[820px] lg:mt-16"
        data-campus-reveal
        role="img"
        aria-label="Student at the centre, connected to an Agentic AI Brain, which supports learning, research, projects, career, innovation and entrepreneurship"
      >
        <div className="flex flex-col items-center">
          <div className="border border-white/14 px-6 py-3 text-[13px] font-semibold tracking-[0.14em] uppercase text-[#f7f6f3]">
            Student
          </div>
          <span className="h-10 w-px bg-[#6D35F5]/50" aria-hidden="true" />
          <div className="relative grid place-items-center px-10 py-12">
            <span
              className="pointer-events-none absolute inset-0 rounded-full border border-[#6D35F5]/25"
              aria-hidden="true"
            />
            <span
              className="pointer-events-none absolute inset-4 rounded-full border border-white/10 sm:inset-6"
              aria-hidden="true"
            />
            <div className="relative z-[1] min-w-[180px] border border-[#6D35F5]/40 bg-[#0b0a0f] px-6 py-5 text-center sm:min-w-[220px]">
              <strong className="block text-[18px] font-normal tracking-[-0.03em] text-white sm:text-[20px]">
                Agentic AI Brain
              </strong>
              <span className="mt-2 block text-[10px] tracking-[0.16em] text-[#c4b5fd]">
                HUMAN DIRECTED
              </span>
            </div>
          </div>
          <span className="h-10 w-px bg-[#6D35F5]/50" aria-hidden="true" />
        </div>

        <ul className="grid grid-cols-2 gap-px border border-[#2c2932] bg-[#2c2932] sm:grid-cols-3 lg:grid-cols-6">
          {agents.map((agent) => (
            <li
              key={agent}
              className="bg-[#100e16] px-3 py-4 text-center text-[13px] tracking-[-0.01em] text-[#d6d2db]"
            >
              {agent}
            </li>
          ))}
        </ul>
      </div>

      <p className="mx-auto mt-10 max-w-[420px] text-center text-[15px] leading-[1.7] text-[#8f8a94]" data-campus-reveal>
        The student remains at the centre of every decision.
      </p>
    </CampusSection>
  )
}
