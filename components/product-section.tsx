'use client'

import { useRef } from 'react'
import { ProductCard } from '@/components/product-card'
import { SectionLabel } from '@/components/section-label'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'
import { pageContent } from '@/lib/page-content'
import { products } from '@/lib/products'

const CARD_STEPS = 4
const VH_PER_STEP = 1
const STEP = 1

export function ProductSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const productCopy = pageContent.products

  useGSAP(
    () => {
      const pin = pinRef.current
      const layers = cardRefs.current.filter((el): el is HTMLDivElement => el !== null)
      if (!pin || layers.length !== products.length) return

      ScrollTrigger.config({ ignoreMobileResize: true })

      const mm = gsap.matchMedia()

      const buildPinnedTimeline = (overlap: number) => {
        gsap.set(layers, {
          y: (index) => index * overlap,
          force3D: true,
        })

        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: pin,
            start: 'top top',
            end: () => `+=${Math.round(window.innerHeight * CARD_STEPS * VH_PER_STEP)}`,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            scrub: 1,
            invalidateOnRefresh: true,
            onToggle: (self) => {
              layers.forEach((el) => {
                el.style.willChange = self.isActive ? 'transform' : ''
              })
            },
          },
        })

        tl.to(layers[0], { y: '-120%', duration: STEP })

        for (let i = 1; i < layers.length - 1; i++) {
          tl.to(layers[i], { y: 0, duration: STEP * 0.35 }, '-=0.2')
          tl.to(layers[i], { y: '-120%', duration: STEP * 0.65 })
        }

        tl.to(layers[layers.length - 1], { y: 0, duration: STEP * 0.8 }, '-=0.2')
        tl.to({}, { duration: STEP * 0.2 })

        return () => {
          layers.forEach((el) => {
            el.style.willChange = ''
          })
        }
      }

      mm.add('(min-width: 1181px) and (prefers-reduced-motion: no-preference)', () =>
        buildPinnedTimeline(40),
      )
      mm.add(
        '(min-width: 801px) and (max-width: 1180px) and (prefers-reduced-motion: no-preference)',
        () => buildPinnedTimeline(28),
      )

      return () => mm.revert()
    },
    { scope: sectionRef, dependencies: [] },
  )

  return (
    <section ref={sectionRef} className="product-section" id="products">
      <div ref={pinRef} className="product-pin">
        <header className="product-heading">
          <SectionLabel>PRODUCTS</SectionLabel>
          <h2>{productCopy.title}</h2>
          <p>{productCopy.intro}</p>
        </header>
        <div className="product-stage">
          {products.map((product, i) => (
            <div
              key={product.id}
              ref={(el) => {
                cardRefs.current[i] = el
              }}
              className="product-card-layer"
              style={{ zIndex: products.length - i, '--stack-index': i } as React.CSSProperties}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
