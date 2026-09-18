import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { CTA } from '@/components/cta'
import { FinalCta } from '@/components/final-cta'
import { SectionLabel } from '@/components/section-label'

type ProductLandingProps = {
  eyebrow: string
  title: string
  accent?: string
  intro: string
  year?: string
  imageSrc: string
  imageAlt: string
  items: string[]
}

export function ProductLanding({
  eyebrow,
  title,
  accent,
  intro,
  year,
  imageSrc,
  imageAlt,
  items,
}: ProductLandingProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#050505] px-6 pb-20 pt-32 text-white sm:px-10 sm:pt-36 lg:px-16 lg:pb-28 lg:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-220px] h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,91,255,0.14)_0%,rgba(99,91,255,0.05)_35%,transparent_70%)]"
        />
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <SectionLabel>{eyebrow}</SectionLabel>
              {year ? (
                <span className="rounded-full border border-[#5f4b86] px-3 py-1.5 text-[10px] tracking-[0.12em] text-[#c4b5fd]">
                  {year}
                </span>
              ) : null}
            </div>
            <h1 className="mt-6 max-w-[760px] text-[clamp(2.75rem,6vw,5.25rem)] font-normal leading-[0.98] tracking-[-0.035em]">
              {title}
              {accent ? (
                <>
                  {' '}
                  <em className="not-italic text-[#c4b5fd]">{accent}</em>
                </>
              ) : null}
            </h1>
            <p className="mt-6 max-w-[560px] text-[17px] leading-7 text-white/70 sm:text-lg">{intro}</p>
            <div className="mt-8">
              <CTA />
            </div>
          </div>
          <div className="relative flex min-h-[280px] items-center justify-center sm:min-h-[360px]">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(109,53,245,0.22),transparent_70%)] blur-3xl"
            />
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={720}
              height={720}
              priority
              className="relative z-10 h-auto w-full max-w-[560px] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="content-grid">
        {items.map((item, i) => (
          <article className="content-card" key={item}>
            <span>0{i + 1}</span>
            <h3>{item}</h3>
            <p>
              Designing practical, responsible pathways that connect people, context and intelligence with
              clear human oversight.
            </p>
            <ArrowUpRight size={18} />
          </article>
        ))}
      </section>

      <FinalCta
        compact
        eyebrow="CONTINUE THE CONVERSATION"
        heading={
          <>
            Intelligence in service
            <br />
            <em>of human potential.</em>
          </>
        }
        ctaLabel="Talk to AgenticX"
      />
    </>
  )
}
