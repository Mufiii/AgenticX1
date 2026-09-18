import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function AboutCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-[#070812] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6D35F5]/10 blur-[150px]" />
        <div className="absolute -left-[180px] top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full border border-[#7659E8]/20" />
        <div className="absolute -right-[180px] top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full border border-[#7659E8]/20" />
        <div className="absolute -left-[260px] top-1/2 h-[850px] w-[850px] -translate-y-1/2 rounded-full border border-[#7659E8]/10" />
        <div className="absolute -right-[260px] top-1/2 h-[850px] w-[850px] -translate-y-1/2 rounded-full border border-[#7659E8]/10" />
        <div className="absolute bottom-[-200px] left-1/2 h-[400px] w-[1000px] -translate-x-1/2 rounded-full bg-[#4F2AE8]/10 blur-[120px]" />
      </div>

      <div className="relative w-full px-5 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="relative mx-auto w-full overflow-hidden rounded-[28px] border border-[#8065FF]/50 bg-[#0b0b18]/80 px-6 py-16 shadow-[0_0_80px_rgba(99,91,255,0.12)] backdrop-blur-xl sm:px-10 md:py-20 lg:px-16">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[250px] w-[700px] -translate-x-1/2 rounded-full bg-[#6D35F5]/10 blur-[100px]" />

          <div className="relative mx-auto max-w-[1050px] text-center" data-campus-reveal>
            <h2 className="mb-3 text-[clamp(2.4rem,6vw,5.2rem)] font-normal leading-[0.98] tracking-[-0.055em]">
              Intelligence in service
              <br />
              of human potential.
            </h2>

            <p className="mx-auto mt-7 max-w-[700px] text-[15px] leading-[1.7] text-white/60 sm:text-[18px]">
              Join campuses, companies and communities building a wiser,
              healthier and more capable future.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group flex h-14 items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#7547FF] to-[#6335F5] px-8 text-[15px] font-medium shadow-[0_0_35px_rgba(108,63,255,0.4)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(108,63,255,0.55)]"
              >
                Talk to AgenticX
                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/solutions/campus"
                className="group flex h-14 items-center justify-center gap-4 rounded-full border border-[#8065FF]/60 bg-white/[0.02] px-8 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white/[0.05]"
              >
                Explore solutions
                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
