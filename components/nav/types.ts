import type { LucideIcon } from 'lucide-react'

export type DropdownLinkItem = {
  label: string
  href: string
  description?: string
  icon?: LucideIcon
  trailingArrow?: boolean
}

export type DropdownColumn = {
  heading?: string
  links: DropdownLinkItem[]
  appearance?: 'icon' | 'plain'
}

export type NavLink = {
  label: string
  href: string
}

export type NavDropdown = {
  label: string
  href: string
  aliases?: string[]
  columns: DropdownColumn[]
  layout: 'solutions' | 'services' | 'company'
  media?: {
    src: string
    alt: string
  }
}

export type NavItem = NavLink | NavDropdown

export function isNavDropdown(item: NavItem): item is NavDropdown {
  return 'columns' in item
}
