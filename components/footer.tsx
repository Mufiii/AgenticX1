'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Lock, Shield } from 'lucide-react'

type FooterLink = {
  label: string
  href: string
  badge?: string
  external?: boolean
}

type FooterColumn = {
  heading: string
  links: FooterLink[]
}

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', Icon: LinkedInLogo },
  { label: 'X', href: 'https://x.com', Icon: XLogo },
  { label: 'YouTube', href: 'https://www.youtube.com', Icon: YouTubeLogo },
]

const footerColumns: FooterColumn[] = [
  {
    heading: 'Solutions',
    links: [
      { label: 'Campus', href: '/solutions/campus' },
      { label: 'Corporate', href: '/solutions/corporate' },
      { label: 'Community', href: '/solutions/community' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Personalized Agents', href: '/services/personalized-agents' },
      { label: 'Agentic Enterprises', href: '/services/agentic-enterprises' },
      { label: 'PolymathGround', href: '/polymathground' },
      { label: 'PolymathGround Startups', href: '/services/polymathground-startups' },
      { label: 'QaQ Passport', href: '/services/qaq-passport' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/company' },
      { label: 'Careers', href: '/career' },
      { label: 'Contact', href: '/contact' },
      { label: 'Events', href: '/events' },
      { label: 'Marketplace', href: '/marketplace' },
      { label: 'Trust Center', href: '/company/trust-center', external: true },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Research', href: '/research' },
      { label: 'Use Cases', href: '/use-cases' },
      { label: 'The Book', href: '/pre-order', badge: 'NEW' },
      { label: 'PolymathGround', href: '/polymathground' },
    ],
  },
]

function LinkedInLogo({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.14V23h-4v-6.6c0-1.57-.03-3.59-2.19-3.59-2.19 0-2.53 1.71-2.53 3.47V23h-4V8.5z" />
    </svg>
  )
}

function XLogo({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.391 6.231H2.756l7.727-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function YouTubeLogo({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.2 3.5-6.2 3.5z" />
    </svg>
  )
}

export function Footer() {
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim() || !agreed) return
    setSubmitted(true)
    setEmail('')
    setAgreed(false)
  }

  return (
    <footer className="relative z-[1] w-full bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="inline-flex items-center" aria-label="AgenticX">
            <Image
              src="/agenticX.png"
              alt="AgenticX"
              width={1215}
              height={237}
              className="h-8 w-auto max-w-[180px] sm:h-9"
            />
          </Link>

          <nav className="flex items-center gap-5 text-white/70" aria-label="Social">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="transition-colors hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </nav>
        </div>
        <div className='mt-10'>
        <div className="h-px w-full bg-white/30" />
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:mt-24 lg:grid-cols-5">
          {footerColumns.map((column) => (
            <nav key={column.heading} aria-label={column.heading} className="flex flex-col items-start gap-3.5">
              <b className="mb-1.5 text-[15px] font-semibold text-white">{column.heading}</b>
              {column.links.map((link) => (
                <Link
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-[14px] leading-5 text-white/55 transition-colors hover:text-white"
                >
                  {link.label}
                  {link.badge ? (
                    <span className="rounded-[4px] bg-white px-1.5 py-[1px] text-[9px] font-bold uppercase tracking-[0.08em] text-black">
                      {link.badge}
                    </span>
                  ) : null}
                  {link.external ? (
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-white/10">
                      <ArrowUpRight size={10} />
                    </span>
                  ) : null}
                </Link>
              ))}
            </nav>
          ))}
        </div>
      </div>
    </footer>
  )
}
