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
    <section className="relative isolate flex min-h-dvh w-full items-center overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-r from-[#020205] via-[#020208]/88 to-transparent" />
        <div className="absolute right-[-12%] top-[-18%] h-[78%] w-[70%] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18),rgba(37,99,235,0.06)_42%,transparent_70%)]" />
        <div className="absolute bottom-[-30%] left-[18%] h-[50%] w-[70%] rounded-full bg-[radial-gradient(ellipse_at_top,rgba(30,64,175,0.12),transparent_62%)]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full  max-w-[1440px] grid-cols-1 items-center gap-10 px-5 pb-12 pt-32 sm:px-6 sm:pb-14 sm:pt-36 md:gap-12 md:px-8 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:pb-20 lg:pt-36 xl:gap-16 xl:px-12">
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

        <div className="relative z-[1] flex min-w-0 items-center justify-center motion-safe:animate-[hero-fade-up_0.9s_0.08s_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none lg:justify-end lg:-mr-4 xl:-mr-8">
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

          <div className="relative h-[min(38vh,320px)] w-full max-w-[300px] motion-safe:animate-[hero-float_5s_ease-in-out_infinite] motion-reduce:animate-none sm:h-[min(42vh,420px)] sm:max-w-[380px] md:h-[min(68vh,640px)] md:max-w-[560px] lg:h-[min(78vh,780px)] lg:max-w-[720px] lg:translate-x-2 xl:translate-x-4">
            <Image
              src="/agix.png"
              alt="AGIX modular purple hardware with exploded chassis, AGIX processor, and compute board"
              width={1151}
              height={1367}
              priority
              sizes="(max-width: 639px) 78vw, (max-width: 1023px) 50vw, (max-width: 1440px) 46vw, 640px"
              className="relative z-10 h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
