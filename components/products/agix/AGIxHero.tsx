import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AGIxHero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-black text-white">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[25%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[140px]" />
        <div className="absolute right-[10%] top-[15%] h-[600px] w-[600px] rounded-full bg-violet-600/15 blur-[160px]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-[1400px] items-center px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">

          {/* LEFT — CONTENT */}
          <div className="relative z-10 max-w-[650px]">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-violet-400">
              AGIx
            </p>

            <h1 className="text-5xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[76px]">
              Your Gateway to a More{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Intelligent
              </span>{" "}
              Digital World.
            </h1>

            <p className="mt-7 max-w-[570px] text-lg leading-8 text-white/55 sm:text-xl">
              AGIx brings your knowledge, AI agents, connected systems and
              digital identity together in one intelligent interface.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/agix"
                className="group inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-500 hover:shadow-[0_0_35px_rgba(139,92,246,0.3)]"
              >
                Explore AGIx
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/waitlist"
                className="inline-flex items-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                Join the Waitlist
              </Link>
            </div>
          </div>

          {/* RIGHT — AGIx VISUAL */}
          <div className="relative flex min-h-[500px] items-center justify-center lg:min-h-[650px]">
            {/* Glow behind product */}
            <div className="pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[110px] sm:h-[520px] sm:w-[520px]" />

            {/* Decorative rings */}
            <div className="pointer-events-none absolute h-[400px] w-[400px] rounded-full border border-violet-400/10 sm:h-[520px] sm:w-[520px]" />
            <div className="pointer-events-none absolute h-[300px] w-[300px] rounded-full border border-violet-400/[0.07] sm:h-[410px] sm:w-[410px]" />

            {/* AGIx image */}
            <img
              src="/images/agix-mobile.png"
              alt="AGIx intelligent digital interface"
              className="relative z-10 h-auto w-full max-w-[620px] object-contain drop-shadow-[0_25px_80px_rgba(124,58,237,0.25)]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}