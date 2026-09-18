import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { contactPrimaryClass } from '@/components/contact/contact-styles'

export function ContactPrimaryLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  const classes = cn(contactPrimaryClass, className)
  const content = (
    <>
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </>
  )

  if (href.startsWith('mailto:') || href.startsWith('http')) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  )
}

export function ContactEyebrow({
  children,
  align = 'center',
}: {
  children: React.ReactNode
  align?: 'center' | 'left'
}) {
  return (
    <div className={cn('mb-7 flex items-center gap-4', align === 'center' && 'justify-center')}>
      <span className="h-px w-10 bg-[#7c5cff]/70" aria-hidden="true" />
      <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#a9a3ff]">
        {children}
      </span>
      {align === 'center' ? <span className="h-px w-10 bg-[#7c5cff]/70" aria-hidden="true" /> : null}
    </div>
  )
}

export function ContactGlow() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute left-1/2 top-[-180px] h-[560px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.16)_0%,rgba(59,130,246,0.06)_42%,transparent_70%)] blur-2xl" />
      <div className="absolute left-[-8%] top-[48%] h-[480px] w-[480px] rounded-full bg-[#7C3AED]/12 blur-[160px]" />
      <div className="absolute right-[-10%] top-[42%] h-[440px] w-[440px] rounded-full bg-[#3B82F6]/10 blur-[150px]" />
    </div>
  )
}
