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
    <header className={`site-nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}${scrolled || open ? ' backdrop-blur-xl' : ''}`}>
      <div className="nav-inner">
        <div className="nav-left">
          <Link href="/" className="brand" aria-label="AgenticX" onClick={() => setOpen(false)}>
            <Image
              src="/agenticx-full-logo.png"
              alt="AgenticX"
              width={2006}
              height={341}
              priority
              style={{
                display: 'block',
                width: 'min(280px, max(220px, 36vw), calc(100vw - 96px))',
                height: 'auto',
                aspectRatio: '2006 / 341',
                objectFit: 'cover',
                objectPosition: '50% 46%',
              }}
            />
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
          <Link
              href="/contact"
              className="inline-flex h-8 items-center gap-2 whitespace-nowrap rounded-full bg-[linear-gradient(180deg,#A78BFA_0%,#7C3AED_48%,#6D28D9_100%)] py-1 pl-5 pr-1 text-[12px] font-semibold !text-white shadow-[0_10px_28px_rgba(124,58,237,0.42)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(139,92,246,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4B5FD] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:h-[54px] sm:gap-3 sm:pl-6 sm:pr-1.5 sm:text-[15px]"
            >
              Be a Member
              <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-[#6D28D9] sm:size-9">
                <ArrowUpRight size={14} aria-hidden="true" strokeWidth={2.25} />
              </span>
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
          <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-2.5 whitespace-nowrap rounded-full bg-[linear-gradient(180deg,#A78BFA_0%,#7C3AED_48%,#6D28D9_100%)] py-1 pl-5 pr-1 text-[14px] font-semibold !text-white shadow-[0_10px_28px_rgba(124,58,237,0.42)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(139,92,246,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4B5FD] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:h-[54px] sm:gap-3 sm:pl-6 sm:pr-1.5 sm:text-[15px]"
            >
              Be a Member
              <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-[#6D28D9] sm:size-9">
                <ArrowUpRight size={16} aria-hidden="true" strokeWidth={2.25} />
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
