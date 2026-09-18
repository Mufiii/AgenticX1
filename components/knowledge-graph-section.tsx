import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'

export function KnowledgeGraphSection() {
  return (
    <section className="split-section">
      <div>
        <SectionLabel>KNOWLEDGE GRAPH</SectionLabel>
        <h2>
          Knowledge becomes <em>agency.</em>
        </h2>
      </div>
      <div>
        <p>
          Personal, academic, professional and organizational knowledge can be structured into a connected graph—so AI understands
          relationships, not simply documents.
        </p>
        <Link href="/products/agentic-brain" className="text-link">
          Explore the research <ArrowUpRight size={15} />
        </Link>
      </div>
    </section>
  )
}
