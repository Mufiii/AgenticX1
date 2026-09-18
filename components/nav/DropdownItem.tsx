'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { DropdownLinkItem } from '@/components/nav/types'

type DropdownItemProps = DropdownLinkItem & {
  appearance?: 'icon' | 'plain'
  onClick?: () => void
}

export function DropdownItem({
  href,
  label,
  description,
  icon: Icon,
  trailingArrow,
  appearance = 'icon',
  onClick,
}: DropdownItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`nav-dropdown-link is-${appearance}${description ? ' has-description' : ''}${trailingArrow ? ' has-arrow' : ''}`}
    >
      {appearance === 'icon' && Icon ? (
        <span className="nav-dropdown-icon" aria-hidden="true">
          <Icon size={16} strokeWidth={1.75} />
        </span>
      ) : null}
      <span className="nav-dropdown-copy">
        <span className="nav-dropdown-label">{label}</span>
        {description ? <span className="nav-dropdown-description">{description}</span> : null}
      </span>
      {trailingArrow ? (
        <span className="nav-dropdown-mini-arrow" aria-hidden="true">
          <ArrowUpRight size={13} />
        </span>
      ) : null}
    </Link>
  )
}
