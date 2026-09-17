'use client'

import { useEffect, useRef } from 'react'

export function CampusMotion({ children }: { children: React.ReactNode }) {
  const scope = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = scope.current
    if (!root) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const blocks = Array.from(root.querySelectorAll<HTMLElement>('[data-campus-reveal]'))
    const reveal = (el: HTMLElement) => {
      el.classList.add('translate-y-0', 'opacity-100')
      el.classList.remove('translate-y-6', 'opacity-0')
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          reveal(entry.target as HTMLElement)
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
    )

    blocks.forEach((el) => {
      el.classList.add('transform', 'transition-[opacity,transform]', 'duration-700', 'ease-out')
      const inView = el.getBoundingClientRect().top < window.innerHeight * 0.92
      if (inView) {
        reveal(el)
      } else {
        el.classList.add('translate-y-6', 'opacity-0')
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  return <div ref={scope}>{children}</div>
}
