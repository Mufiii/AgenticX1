import Link from 'next/link'
import type { UseCase } from '@/components/use-cases/data'

const fields = [
  { key: 'humanRole', label: 'Human Role' },
  { key: 'agentWorkflow', label: 'Agent Workflow' },
  { key: 'data', label: 'Data' },
  { key: 'safeguards', label: 'Safeguards' },
  { key: 'outcome', label: 'Outcome' },
] as const

export function UseCaseCard({ useCase }: { useCase: UseCase }) {
  return (
    <article
      id={useCase.id}
      className="group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-[28px] border border-[#8b5cf6]/18 bg-[#08070c] p-6 text-left shadow-[0_18px_48px_rgba(0,0,0,0.28)] transition-[border-color,box-shadow,transform] duration-300 ease-out motion-reduce:transition-none motion-reduce:hover:translate-y-0 hover:-translate-y-1 hover:border-[#8b5cf6]/50 hover:shadow-[0_24px_56px_rgba(0,0,0,0.38),0_0_40px_rgba(124,58,237,0.16)] sm:p-8"
    >
      <div
        className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.16)_0%,transparent_70%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-8 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.08)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <header className="relative flex items-baseline justify-between gap-4">
        <span className="text-[13px] font-semibold tracking-[0.18em] text-[#c4b5fd]">{useCase.number}</span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
          {useCase.categoryLabel}
        </span>
      </header>

      <h3 className="relative mt-6 text-[26px] font-medium leading-[1.12] tracking-[-0.03em] text-white sm:text-[28px]">
        {useCase.title}
      </h3>
      <p className="relative mt-4 max-w-[44ch] text-[15px] leading-[1.7] text-white/55">{useCase.description}</p>

      <dl className="relative mt-8 flex flex-1 flex-col gap-5">
        {fields.map((field) => (
          <div key={field.key}>
            <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">{field.label}</dt>
            <dd className="mt-1.5 text-[14px] leading-[1.6] text-white/80 [overflow-wrap:anywhere]">{useCase[field.key]}</dd>
          </div>
        ))}
      </dl>

      <Link
        href={useCase.href}
        className="relative mt-8 inline-flex w-fit items-center gap-2 border-b border-white/20 pb-1 text-[13px] font-semibold text-white/70 transition-[color,border-color] duration-200 group-hover:border-[#c4b5fd] group-hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B5CF6] motion-reduce:transition-none"
      >
        Explore Use Case
        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
          →
        </span>
        <span className="sr-only">: {useCase.title}</span>
      </Link>
    </article>
  )
}
