'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { nav } from '@/components/nav/data'
import { Dropdown } from '@/components/nav/Dropdown'
import { isNavDropdown, type NavDropdown, type NavItem } from '@/components/nav/types'

export { nav }

function collectHrefs(item: NavDropdown) {
  const hrefs = [item.href, ...(item.aliases ?? [])]
  for (const column of item.columns) {
    for (const link of column.links) hrefs.push(link.href)
  }
  return hrefs
}

function pathMatches(href: string, pathname: string) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

function isCurrentNavItem(item: NavItem, pathname: string) {
  if (!isNavDropdown(item)) return pathname === item.href

  const hrefs = collectHrefs(item)
  if (hrefs.includes(pathname)) return true
  return hrefs.some((href) => pathMatches(href, pathname))
}

function mobileLinks(item: NavDropdown) {
  const seen = new Set<string>()
  const links: { label: string; href: string }[] = []

  const add = (label: string, href: string) => {
    const key = `${href}:${label}`
    if (seen.has(key)) return
    seen.add(key)
    links.push({ label, href })
  }

  for (const column of item.columns) {
    for (const link of column.links) add(link.label, link.href)
  }
  return links
}

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const closeTimer = useRef<number | null>(null)

  const openDropdown = (label: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    setOpenMenu(label)
  }

  const closeDropdown = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 120)
  }

  const closeDropdownNow = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    setOpenMenu(null)
  }

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 12)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    document.addEventListener('scroll', updateScrollState, { passive: true, capture: true })
    return () => {
      window.removeEventListener('scroll', updateScrollState)
      document.removeEventListener('scroll', updateScrollState, { capture: true })
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    closeDropdownNow()
    setOpen(false)
    setExpanded(null)
  }, [pathname])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeDropdownNow()
    }
    const onPointerDown = (event: PointerEvent) => {
      const header = document.querySelector('.site-nav')
      if (header && !header.contains(event.target as Node)) closeDropdownNow()
    }
    window.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
      if (closeTimer.current) window.clearTimeout(closeTimer.current)
    }
  }, [])

  return (
    <header className={`site-nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="nav-inner">
        <div className="nav-left">
          <Link href="/" className="brand" aria-label="AgenticX" onClick={() => setOpen(false)}>
            <Image src="/agenticX.png" alt="AgenticX" width={186} height={36} priority className="brand-logo" />
          </Link>
        </div>

        <nav className="desktop-nav" aria-label="Primary">
          {nav.map((item) =>
            isNavDropdown(item) ? (
              <div
                className={`nav-group${isCurrentNavItem(item, pathname) ? ' is-active' : ''}${openMenu === item.label ? ' is-open' : ''}`}
                key={item.label}
                onMouseEnter={() => openDropdown(item.label)}
                onMouseLeave={closeDropdown}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={openMenu === item.label}
                  onClick={() => openDropdown(item.label)}
                >
                  {item.label}
                </button>
                <Dropdown item={item} onNavigate={closeDropdownNow} />
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`nav-link${isCurrentNavItem(item, pathname) ? ' is-active' : ''}`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="nav-right">
          <div className="nav-actions">
            <Link href="/contact" className="nav-cta-primary">
              Be a Member
              <ArrowUpRight size={16} className="ml-2" aria-hidden="true" />
            </Link>
          </div>
          <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          {nav.map((item) =>
            isNavDropdown(item) ? (
              <div key={item.label} className="mobile-group">
                <button type="button" onClick={() => setExpanded(expanded === item.label ? null : item.label)}>
                  {item.label}
                </button>
                {expanded === item.label && (
                  <div>
                    {mobileLinks(item).map((entry) => (
                      <Link key={`${entry.href}-${entry.label}`} href={entry.href} onClick={() => setOpen(false)}>
                        {entry.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.label} href={item.href} className="mobile-link" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ),
          )}
          <div className="mobile-actions">
            <Link href="/contact" className="nav-cta-primary mobile-cta" onClick={() => setOpen(false)}>
              Build your Future
              <ArrowUpRight size={16} className="ml-2" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
