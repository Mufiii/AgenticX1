import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  headline: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  className?: string
}

export function SectionHeading({
  eyebrow,
  headline,
  description,
  align = 'left',
  tone = 'dark',
  className,
}: SectionHeadingProps) {
  const isLight = tone === 'light'

  return (
    <div
      className={cn(
        align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl',
        className,
      )}
    >
      <div
        className={cn(
          'mb-6 flex items-center gap-4',
          align === 'center' && 'justify-center',
        )}
      >
        {align === 'center' && (
          <span
            className={cn(
              'h-px w-10',
              isLight ? 'bg-[#8B5CF6]/50' : 'bg-[#8B5CF6]/70',
            )}
            aria-hidden="true"
          />
        )}
        {align === 'left' && (
          <span
            className={cn(
              'h-px w-10',
              isLight ? 'bg-[#8B5CF6]/50' : 'bg-[#8B5CF6]/70',
            )}
            aria-hidden="true"
          />
        )}
        <span
          className={cn(
            'text-[11px] font-medium uppercase tracking-[0.32em]',
            isLight ? 'text-[#6573A8]' : 'text-[#a9a3ff]',
          )}
        >
          {eyebrow}
        </span>
        {align === 'center' && (
          <span
            className={cn(
              'h-px w-10',
              isLight ? 'bg-[#8B5CF6]/50' : 'bg-[#8B5CF6]/70',
            )}
            aria-hidden="true"
          />
        )}
      </div>

      <h2
        className={cn(
          'text-[clamp(2.15rem,4.6vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.045em]',
          isLight ? 'text-[#101936]' : 'text-white',
        )}
      >
        {headline}
      </h2>

      {description ? (
        <p
          className={cn(
            'mt-6 max-w-2xl text-base leading-7 sm:text-[17px]',
            align === 'center' && 'mx-auto',
            isLight ? 'text-[#64708a]' : 'text-white/55',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
