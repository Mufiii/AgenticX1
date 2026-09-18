import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BookPreorderSection() {
  return (
    <section className="w-full bg-[#050711] py-16 text-white border-2 border-white/10">
      <div className="mx-auto flex max-w-7xl items-center gap-16 px-6 lg:px-10">

        {/* BOOK IMAGE AREA */}
        <div className="flex w-full justify-center lg:w-[38%]">
          {/* Add book image here */}

          <img
            src="/images/particle.png"
            alt="Particles & Patterns"
            className="w-[300px] object-contain"
          />

          {/* Empty placeholder — keep this area blank */}
          <div className="h-[420px] w-[300px]" />
        </div>

        {/* CONTENT */}
        <div className="w-full lg:w-[62%]">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-12 bg-[#d9b45b]" />

            <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#d9b45b]">
              The Book
            </span>
          </div>

          <h2 className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Particles{" "}
            <span className="text-white/75">& Patterns</span>
          </h2>

          <p className="mt-5 px-2 text-sm uppercase tracking-[0.3em] text-white/60 sm:text-base mb-3">
            Light Intelligence, Photonics & AI
          </p>

          <p className="mt-8 max-w-xl text-lg  text-white/55">
            A deeper look at the ideas shaping the intersection of
            intelligence, light and the future.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/pre-order"
              className="group inline-flex items-center gap-5 rounded-full border border-[#d9b45b] px-7 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-[#d9b45b] hover:text-black"
            >
              Pre-order Now

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              Early Edition · Limited Availability
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}