import { cn } from '@/lib/utils'

export function MarketplaceEyebrow({
  children,
  align = 'left',
}: {
  children: React.ReactNode
  align?: 'left' | 'center'
}) {
  return (
    <div className={cn('mb-6 flex items-center gap-4', align === 'center' && 'justify-center')}>
      <span className="h-px w-10 bg-[#7c5cff]/70" aria-hidden="true" />
      <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#a9a3ff]">
        {children}
      </span>
      {align === 'center' ? <span className="h-px w-10 bg-[#7c5cff]/70" aria-hidden="true" /> : null}
    </div>
  )
}
