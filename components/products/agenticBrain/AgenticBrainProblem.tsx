import { ArrowRight, Sparkles, X, Check } from 'lucide-react'
import { CampusSection } from '@/components/campus/campus-ui'

export function AgenticBrainProblem() {
  return (
    <CampusSection>
      <section
        className="relative overflow-hidden py-24 sm:py-28 lg:py-16"
        data-campus-reveal
      >
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/[0.06] blur-[140px]" />
          <div className="absolute bottom-0 left-0 h-[300px] w-[400px] rounded-full bg-indigo-600/[0.04] blur-[120px]" />
        </div>

        {/* ─────────────────────────────────────────
            HEADER
        ───────────────────────────────────────── */}

        <div className="mx-auto max-w-7xl text-center">
          {/* Eyebrow */}
          <div className="mb-7 flex items-center justify-center gap-4">

            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-violet-400">
              THE PROBLEM
            </span>

          </div>
            <div className="flex items-center justify-center gap-4 max-w-7xl">

          {/* Heading */}
          <h2 className="text-[clamp(2.7rem,6vw,5.5rem)] font-normal leading-[1.02] tracking-[-0.065em] text-white">
            AI Is Everywhere.
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Intelligence Is Still Fragmented.
            </span>
          </h2>
            </div>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-3xl text-[16px] leading-[1.7] text-white/55 sm:text-[18px]">
            Today, people work across disconnected AI tools, applications,
            documents and data sources.
          </p>

          <p className="mx-auto mt-2 max-w-3xl text-[16px] leading-[1.7] text-white/55 sm:text-[18px]">
            Each tool knows a piece of the context.
            <span className="font-medium text-white">
              {' '}
              Nothing understands the whole picture.
            </span>
          </p>
        </div>

        {/* ─────────────────────────────────────────
            VISUAL COMPARISON
        ───────────────────────────────────────── */}

        <div className="mx-auto mt-16 max-w-[1450px]">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">

            {/* LEFT — IMAGE */}
            <div className="group relative overflow-hidden rounded-[28px] border border-white/[0.10] bg-white/[0.025] p-2 transition-all duration-500 hover:border-white/[0.18]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent" />

              <div className="relative aspect-[16/10] overflow-hidden rounded-[22px]">
                
                  <img
                    src="/images/from-this.png"
                    alt="Disconnected AI tools"
                    className="h-[70%] w-full object-cover mt-16 mx-auto"
                  />
               

                <div className="flex h-full w-full items-center justify-center border border-dashed border-white/10 bg-black/20">
                  <div className="text-center">
                    <p className="text-sm text-white/40">
                      Add Left Image
                    </p>
                    <p className="mt-1 text-xs text-white/20">
                      Disconnected tools
                    </p>
                  </div>
                </div>
              </div>

              {/* Label */}
              <div className="absolute left-7 top-7 z-10">
                <span className="rounded-full border border-red-400/20 bg-black/50 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-red-300 backdrop-blur-md">
                  From This
                </span>
              </div>

              {/* Bottom status */}
              <div className="relative flex items-center gap-3 px-5 py-5 sm:px-7">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/10">
                  <X className="h-4 w-4 text-red-400" />
                </div>

                <div>
                  <p className="text-sm font-medium text-white/80">
                    Fragmented intelligence
                  </p>
                  <p className="mt-1 text-xs text-white/35">
                    Multiple tools. Multiple contexts. Manual effort.
                  </p>
                </div>
              </div>
            </div>

            {/* CENTER TRANSITION */}
            <div className="relative flex flex-col items-center justify-center py-3 lg:flex-row lg:py-0">
              <div className="h-10 w-px bg-gradient-to-b from-transparent via-violet-500/60 to-violet-400 lg:hidden" />
              <div className="hidden h-px w-16 bg-gradient-to-r from-transparent via-violet-500/60 to-violet-400 lg:block" />

              <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/[0.08] shadow-[0_0_40px_rgba(139,92,246,0.18)]">
                <ArrowRight className="h-5 w-5 rotate-90 text-violet-300 transition-transform duration-300 lg:rotate-0" />
              </div>

              <div className="h-10 w-px bg-gradient-to-b from-violet-400 via-violet-500/60 to-transparent lg:hidden" />
              <div className="hidden h-px w-16 bg-gradient-to-r from-violet-400 via-violet-500/60 to-transparent lg:block" />
            </div>

            {/* RIGHT — IMAGE */}
            <div className="group relative overflow-hidden rounded-[28px] border border-violet-400/30 bg-violet-500/[0.025] p-2 shadow-[0_0_80px_rgba(124,58,237,0.10)] transition-all duration-500 hover:border-violet-400/50">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.08] via-transparent to-transparent" />

              <div className="relative aspect-[16/10] overflow-hidden rounded-[22px]">
                
                  <img
                    src="/images/to-this.png"
                    alt="Connected Agentic Brain"
                    className="h-full w-full object-cover"
                  />
               

                <div className="flex h-full w-full items-center justify-center border border-dashed border-violet-400/20 bg-violet-500/[0.03]">
                  <div className="text-center">
                    <p className="text-sm text-violet-300/70">
                      Add Right Image
                    </p>
                    <p className="mt-1 text-xs text-white/25">
                      Connected intelligence
                    </p>
                  </div>
                </div>
              </div>

              {/* Label */}
              <div className="absolute left-7 top-7 z-10">
                <span className="rounded-full border border-violet-400/30 bg-black/50 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-violet-300 backdrop-blur-md">
                  To This
                </span>
              </div>

              {/* Bottom status */}
              <div className="relative flex items-center gap-3 px-5 py-5 sm:px-7">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-400/10">
                  <Check className="h-4 w-4 text-emerald-400" />
                </div>

                <div>
                  <p className="text-sm font-medium text-white/90">
                    Connected intelligence
                  </p>
                  <p className="mt-1 text-xs text-white/40">
                    One context. Connected agents. Real outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </CampusSection>
  )
}