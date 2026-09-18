import Link from 'next/link'
import { ecosystemStages } from '@/components/polymathground/data'

export function EcosystemFlow() {
  return (
    <div>
      <p className="mb-8 text-center text-[11px] font-medium uppercase tracking-[0.3em] text-[#6875a0]">
        AgenticX Ecosystem
      </p>

      <ol className="mx-auto flex max-w-3xl flex-col">
        {ecosystemStages.map((stage, index) => {
          const last = index === ecosystemStages.length - 1
          const inner = (
            <div
              className={`rounded-2xl border px-5 py-5 text-center transition sm:px-8 ${
                index === 0
                  ? 'border-[#dcd6ff] bg-[#f8f7ff] shadow-[0_12px_36px_rgba(99,91,255,0.08)]'
                  : 'border-[#e6eaf2] bg-white hover:border-[#dcd6ff]'
              }`}
            >
              <h3
                className={`text-[17px] font-semibold tracking-[-0.02em] sm:text-[20px] ${
                  index === 0 ? 'text-[#4338ca]' : 'text-[#101936]'
                }`}
              >
                {stage.title}
              </h3>
              <p className="mt-1.5 text-sm text-[#64708a]">{stage.description}</p>
            </div>
          )

          return (
            <li key={stage.title} className="flex flex-col items-stretch">
              {stage.href ? (
                <Link href={stage.href} className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#635BFF]">
                  {inner}
                </Link>
              ) : (
                inner
              )}
              {!last ? (
                <span className="my-3 text-center text-lg text-[#635BFF]" aria-hidden="true">
                  ↓
                </span>
              ) : null}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
