import {
  UserRound,
  Monitor,
  Settings,
  Sparkles,
  Layers3,
  Database,
  Bot,
  FileText,
  Box,
  Network,
  type LucideIcon,
} from 'lucide-react'

const evolution: [string, string, LucideIcon][] = [
  ['Manual', 'People do the work', UserRound],
  ['Digital', 'Information goes online', Monitor],
  ['Automated', 'Tasks are automated', Settings],
  ['AI-Augmented', 'AI assists humans', Sparkles],
  ['Agentic Enterprise', 'Coordinated intelligence', Layers3],
]

const connected: [string, LucideIcon][] = [
  ['People', UserRound],
  ['Knowledge', Database],
  ['AI Agents', Bot],
  ['Data', FileText],
  ['Systems', Box],
  ['Workflows', Network],
]

export function TheShift() {
  return (
    <section className="bg-white text-[#101936]">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-16">
        <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">

          {/* Title — same row as Evolution on desktop */}
          <div className="order-1 min-w-0 lg:col-span-7">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#6875a0]">
              The Shift
            </p>

            <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              From Automation to{' '}
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Business Intelligence
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#64708a]">
              Most businesses are adding AI tools to individual tasks.
              <br />
              But isolated automation creates isolated intelligence.
            </p>
          </div>

          {/* Evolution — starts with the title, fills the full right square */}
          <div className="order-2 flex min-h-[560px] min-w-0 flex-col rounded-3xl border border-[#e6eaf2] bg-[#f8f7ff] p-5 sm:p-6 lg:col-span-5 lg:row-span-3">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#6875a0]">
              The Evolution
            </p>

            <div className="flex min-h-0 min-w-0 flex-1 flex-col">
              {evolution.map(([title, description, Icon], index) => {
                const first = index === 0
                const last = index === evolution.length - 1

                return (
                  <div
                    key={title}
                    className={`flex min-w-0 gap-3 ${last ? '' : 'min-h-0 flex-1'}`}
                  >
                    <div className="flex w-11 shrink-0 flex-col items-center">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                          first
                            ? 'bg-[#ece7ff] text-[#4035c6]'
                            : 'bg-white text-[#4d5b7c] shadow-sm'
                        }`}
                      >
                        <Icon size={20} />
                      </div>
                      {!last && (
                        <div className="my-1 w-px flex-1 bg-[#d4dbf5]" />
                      )}
                    </div>

                    <div
                      className={`mb-3 min-w-0 flex-1 rounded-2xl border px-4 py-3.5 ${
                        last ? 'mb-0' : ''
                      } ${
                        first
                          ? 'border-[#b8aaff] bg-white'
                          : 'border-[#e6eaf2] bg-white'
                      }`}
                    >
                      <h3
                        className={`font-semibold ${
                          first ? 'text-[#4035c6]' : ''
                        }`}
                      >
                        {title}
                      </h3>
                      <p className="mt-1 text-sm text-[#64708a]">
                        {description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Traditional / Agentic — equal square cards */}
          <div className="order-3 grid min-w-0 gap-5 sm:grid-cols-2 lg:col-span-7">
            <div className="flex h-full min-h-[240px] flex-col rounded-3xl border border-[#e5e9f2] p-6">
              <h3 className="text-xl font-semibold">Traditional</h3>

              <div className="mt-8 flex flex-1 flex-col justify-center gap-2">
                {['Task', 'Tool', 'Automation'].map((item, i) => (
                  <div key={item} className="flex flex-col items-center gap-2">
                    <span className="w-full rounded-full bg-[#f3f5f9] px-4 py-2.5 text-center text-sm">
                      {item}
                    </span>
                    {i < 2 && <span className="text-[#65708c]">↓</span>}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex h-full min-h-[240px] flex-col rounded-3xl border border-[#dcd6ff] bg-[#faf9ff] p-6">
              <h3 className="text-xl font-semibold text-[#4938c8]">
                Agentic Enterprise
              </h3>

              <div className="mt-8 flex flex-1 items-center">
                <div className="grid w-full grid-cols-2 gap-2">
                  {[
                    'Goal',
                    'Understand',
                    'Decide',
                    'Coordinate',
                    'Act',
                    'Learn',
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white px-3 py-2.5 text-center text-sm text-[#4338ca] shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Connected — full square icon grid */}
          <div className="order-4 min-w-0 rounded-3xl border border-[#e5e9f2] p-6 lg:col-span-7">
            <p className="mb-6 text-lg font-medium">
              An Agentic Enterprise connects:
            </p>

            <div className="grid grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-6">
              {connected.map(([name, Icon]) => (
                <div
                  key={name}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3f5ff] text-[#635BFF]">
                    <Icon size={22} />
                  </div>
                  <p className="mt-3 text-xs font-medium sm:text-sm">{name}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
