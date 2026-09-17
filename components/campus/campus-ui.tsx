import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function CampusSection({
  id,
  tone = 'dark',
  children,
  className,
}: {
  id?: string
  tone?: 'dark' | 'light'
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={cn(
        'relative overflow-x-clip',
        tone === 'dark' ? 'bg-[#0b0a0f] text-[#f7f6f3]' : 'bg-[#fafaf9] text-[#17151c]',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 md:py-[110px] lg:px-8 lg:py-[130px]">
        {children}
      </div>
    </section>
  )
}

export function CampusEyebrow({
  children,
  tone = 'dark',
}: {
  children: React.ReactNode
  tone?: 'dark' | 'light'
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.18em]',
        tone === 'light' ? 'text-[#65527e]' : 'text-[#aaa6af]',
      )}
    >
      <i className="block size-1.5 rounded-full bg-[#6D35F5] shadow-[0_0_14px_#6D35F5]" aria-hidden="true" />
      {children}
    </span>
  )
}

export function CampusPrimaryLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[#6D35F5] px-7 text-[13px] font-semibold !text-white shadow-[0_10px_28px_rgba(109,53,245,0.28)] transition-[transform,background-color,box-shadow] duration-300 ease-out hover:-translate-y-px hover:bg-[#7B4AFF] hover:shadow-[0_14px_34px_rgba(109,53,245,0.36)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6D35F5] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:px-8"
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </Link>
  )
}

export function CampusSecondaryLink({
  href,
  children,
  tone = 'dark',
}: {
  href: string
  children: React.ReactNode
  tone?: 'dark' | 'light'
}) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full border px-7 text-[13px] font-semibold transition-[transform,background-color,border-color] duration-300 ease-out hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6D35F5] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:px-8',
        tone === 'light'
          ? 'border-[rgba(109,53,245,0.28)] text-[#6D35F5] hover:border-[#6D35F5] hover:bg-[rgba(109,53,245,0.08)]'
          : 'border-white/20 text-[#f7f6f3] hover:border-white/45 hover:bg-white/5',
      )}
    >
      {children}
    </Link>
  )
}

export function CampusTextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 border-b border-[#55515b] pb-1 text-[13px] text-[#d6d2db] transition-colors duration-200 hover:border-[#c4b5fd] hover:text-white"
    >
      {children}
      <ArrowUpRight size={14} aria-hidden="true" />
    </Link>
  )
}
