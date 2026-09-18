import { GraphVisual } from '@/components/graph-visual'
import { SectionLabel } from '@/components/section-label'

export function AgenticBrainSection() {
  return (
    <section id="agentic-brain" className="dark-panel">
      <div>
        <SectionLabel>2026 · TECHNOLOGY ROADMAP</SectionLabel>
        <h2>
          Agentic <em>Brain</em>
        </h2>
        <p>
          Your personalized intelligence orchestration layer. Connect goals, knowledge, personality, mental models, AI
          agents and approved tools into one human-directed system.
        </p>
        <div className="principles">
          <span>
            <b>01</b> Human directed
          </span>
          <span>
            <b>02</b> Context aware
          </span>
          <span>
            <b>03</b> Agent powered
          </span>
        </div>
      </div>
      <GraphVisual compact />
    </section>
  )
}
