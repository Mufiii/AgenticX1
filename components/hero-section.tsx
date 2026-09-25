import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const audiences = [
  { title: 'Campus', subtitle: 'Students', href: '/solutions/campus' },
  { title: 'Corporate', subtitle: 'Employees', href: '/solutions/corporate' },
  { title: 'Community', subtitle: 'Entrepreneurs', href: '/solutions/community' },
] as const

export function HeroSection() {
  return (
    <section className="relative isolate flex h-dvh max-h-dvh w-full items-center overflow-hidden bg-[#020205] text-white">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[#020205]" />
        <div className="absolute right-[-8%] top-[-12%] h-[62%] w-[58%] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.16),transparent_68%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[22%] bg-gradient-to-b from-transparent to-[#020205]" />
      </div>

      <div className="relative z-10 mx-auto grid h-full min-h-0 w-full max-w-[1440px] grid-cols-1 items-center gap-6 px-5 pb-6 pt-24 sm:px-6 sm:pt-28 md:px-8 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:pb-8 lg:pt-[104px] xl:gap-12 xl:px-12">
        <div className="relative z-10 max-w-[34rem] space-y-2 motion-safe:animate-[hero-fade-up_0.8s_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none lg:max-w-none">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-[#8B5CF6] sm:text-[11px]">
            AI • WELLNESS • DEEPTECH
          </span>

          <p className="mt-5 max-w-[500px] text-base leading-relaxed text-[#A1A1AA] sm:text-lg">
            Human-centred transformation for the Agentic AI and AGI era
          </p>

          <h1 className="mt-6 flex flex-col font-medium leading-[0.98] tracking-[-0.035em] text-white text-[clamp(2.75rem,6vw,5.5rem)] sm:mt-7">
            <span className="block">Personalized</span>
            <em className="block italic font-medium text-[#8B5CF6]">Agentic AI Brain</em>
          </h1>

          <div className="mt-8 flex max-w-4xl flex-wrap items-start gap-y-4 sm:mt-10">
            {audiences.map((item, index) => (
              <div
                key={item.title}
                className={`flex flex-col gap-1 ${index > 0 ? 'ml-5 border-l border-white/10 pl-5 sm:ml-8 sm:pl-8' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <Link
                    href={item.href}
                    className="text-[24px] font-medium leading-tight text-white !underline decoration-white/600 underline-offset-[4px] transition-colors duration-200 hover:text-[#8B5CF6] hover:decoration-[#8B5CF6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6]"
                    >
                    {item.title}
                  </Link>
                </div>
                <span className="text-[18px] font-normal leading-tight text-[#71717A]">
                  {item.subtitle}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10">
            <Link
              href="/company/contact"
              className="inline-flex h-[54px] items-center justify-center gap-2 rounded-full bg-[#7C3AED] px-8 text-[16px] font-semibold !text-white shadow-[0_10px_28px_rgba(124,58,237,0.28)] transition-[transform,background-color,box-shadow] duration-300 ease-out hover:-translate-y-px hover:bg-[#8B5CF6] hover:shadow-[0_14px_34px_rgba(139,92,246,0.36)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              Be a Member
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="relative z-[1] flex h-full min-h-0 min-w-0 items-center justify-center motion-safe:animate-[hero-fade-up_0.9s_0.08s_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none lg:justify-end lg:-mr-4 xl:-mr-8">
          <div className="hero-orbit-field hidden md:block" aria-hidden="true">
            <div className="hero-orbit-field__radial" />
            <div className="hero-orbit-field__product-glow" />
            <div className="hero-orbit-field__ring hero-orbit-field__ring--core">
              <span className="hero-orbit-field__spark" />
            </div>
            <div className="hero-orbit-field__ring hero-orbit-field__ring--a">
              <span className="hero-orbit-field__spark" />
            </div>
            <div className="hero-orbit-field__ring hero-orbit-field__ring--b" />
            <div className="hero-orbit-field__ring hero-orbit-field__ring--c" />
            <span className="hero-orbit-field__star left-[18%] top-[22%] h-1.5 w-1.5" />
            <span className="hero-orbit-field__star right-[16%] top-[30%] h-1 w-1" style={{ animationDelay: '6s' }} />
            <span className="hero-orbit-field__star bottom-[28%] left-[24%] h-1 w-1" style={{ animationDelay: '12s' }} />
            <span className="hero-orbit-field__star right-[28%] bottom-[22%] h-[3px] w-[3px]" style={{ animationDelay: '18s' }} />
          </div>

          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18),transparent_70%)] blur-3xl md:hidden"
            aria-hidden="true"
          />

          <div className="relative h-[min(30dvh,240px)] w-full max-w-[260px] motion-safe:animate-[hero-float_5s_ease-in-out_infinite] motion-reduce:animate-none sm:h-[min(32dvh,280px)] sm:max-w-[320px] md:h-[min(58dvh,520px)] md:max-w-[500px] lg:h-[min(64dvh,calc(100dvh-10.5rem))] lg:max-w-[640px] lg:translate-x-2 xl:translate-x-4">
            <Image
              src="/agix.png"
              alt="AGIX modular purple hardware with exploded chassis, AGIX processor, and compute board"
              width={1151}
              height={1267}
              priority
              sizes="(max-width: 639px) 78vw, (max-width: 1023px) 50vw, (max-width: 1440px) 46vw, 540px"
              className="relative z-10 h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
