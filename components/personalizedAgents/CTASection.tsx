import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type CTASectionProps = {
  eyebrow?: string
  headline: ReactNode
  description?: ReactNode
  actionLabel: string
  actionHref: string
}

export function CTASection({
  eyebrow,
  headline,
  description,
  actionLabel,
  actionHref,
}: CTASectionProps) {
  return (
    <div className="relative mx-auto mt-16 max-w-3xl text-center lg:mt-20">
      {eyebrow ? (
        <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-[#a9a3ff]">{eyebrow}</p>
      ) : null}
      <h3 className="text-[clamp(2rem,4vw,3.4rem)] font-medium leading-[1.06] tracking-[-0.045em] text-white">
        {headline}
      </h3>
      {description ? (
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/50">{description}</p>
      ) : null}
      <Link
        href={actionHref}
        className="group mt-10 inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#6d4aff] to-[#4f7cff] px-8 text-sm font-medium text-white shadow-[0_0_35px_rgba(109,74,255,0.3)] transition hover:shadow-[0_0_45px_rgba(109,74,255,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6] motion-reduce:transition-none"
      >
        {actionLabel}
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none"
          aria-hidden="true"
        />
      </Link>
    </div>
  )
}
