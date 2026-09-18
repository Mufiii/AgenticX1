import { cn } from '@/lib/utils'
import type { EvolutionLevel } from '@/components/personalizedAgents/data'

type EvolutionStageProps = {
  stage: EvolutionLevel
  index: number
  active: boolean
  onSelect: (index: number) => void
  buttonRef?: (element: HTMLButtonElement | null) => void
}

export function EvolutionStage({
  stage,
  index,
  active,
  onSelect,
  buttonRef,
}: EvolutionStageProps) {
  return (
    <button
      ref={buttonRef}
      type="button"
      role="tab"
      id={`evolution-tab-${stage.id}`}
      aria-selected={active}
      aria-controls="evolution-panel"
      tabIndex={active ? 0 : -1}
      onClick={() => onSelect(index)}
      className={cn(
        'group relative flex w-full items-start gap-4 border-b border-white/[0.06] py-3.5 text-left transition last:border-b-0',
        'lg:flex-col lg:items-center lg:gap-0 lg:border-0 lg:px-1 lg:pt-7 lg:pb-0 lg:text-center',
        'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B5CF6]',
      )}
    >
      <span
        className={cn(
          'absolute left-0 right-0 top-0 hidden text-[10px] tracking-[0.2em] transition lg:block',
          active ? 'text-[#c4b5fd]' : 'text-white/30 group-hover:text-white/50',
        )}
        aria-hidden="true"
      >
        {stage.number}
      </span>

      <span className="relative z-10 flex w-5 shrink-0 justify-center pt-1.5 lg:w-auto lg:pt-0" aria-hidden="true">
        <span
          className={cn(
            'size-2.5 rounded-full border transition lg:size-3',
            active
              ? 'border-[#8B5CF6] bg-[#8B5CF6] shadow-[0_0_16px_rgba(139,92,246,0.85)]'
              : 'border-white/35 bg-[#070812] group-hover:border-[#c4b5fd]/70',
          )}
        />
      </span>

      <span className="min-w-0 lg:mt-3">
        <span className="block text-[10px] tracking-[0.22em] text-white/35 lg:hidden">{stage.number}</span>
        <span
          className={cn(
            'mt-1 block text-[15px] leading-snug lg:hidden',
            active ? 'text-white' : 'text-white/70',
          )}
        >
          {stage.title}
        </span>
        <span
          className={cn(
            'hidden max-w-[6.5rem] text-[11px] leading-4 tracking-[0.04em] transition sm:text-xs lg:block',
            active ? 'text-white' : 'text-white/45 group-hover:text-white/70',
          )}
        >
          {stage.shortTitle}
        </span>
        {stage.vision ? (
          <span className="mt-2 inline-block text-[10px] uppercase tracking-[0.18em] text-[#c4b5fd]/80 lg:sr-only">
            Long-term vision
          </span>
        ) : null}
      </span>
    </button>
  )
}
