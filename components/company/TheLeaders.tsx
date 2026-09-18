import Image from 'next/image'

const leaders = [
  {
    name: 'Mr. Saleeque MP',
    role: 'Founder · Deeptech AI Entrepreneur',
    image: '/founders/saleeque2.png',
  },
  {
    name: 'Mr. Aslam Siddique',
    role: 'Co-Founder · Behavioral Economics Expert',
    image: '/founders/aslam2.png',
  },
]

export function TheLeaders() {
  return (
    <section className="relative overflow-hidden bg-[#050711] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/8 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="max-w-[720px]" data-campus-reveal>
          <h2 className="text-[clamp(2.5rem,5vw,4.8rem)] font-normal leading-[0.98] tracking-[-0.055em]">
            The Leaders
          </h2>
          <p className="mt-5 max-w-[520px] text-[15px] leading-[1.7] text-white/50 sm:text-[16px]">
            Visionaries shaping intelligence, performance, and human potential.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:gap-10">
          {leaders.map((leader) => (
            <article key={leader.name} data-campus-reveal className="relative overflow-hidden">
              <Image
                src={leader.image}
                alt={leader.name}
                width={1000}
                height={1000}
                sizes="(max-width: 640px) 100vw, 50vw"
                className="h-auto w-full"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-black via-black/70 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 px-4 pb-6 sm:px-5 sm:pb-8 lg:px-6">
                <h3 className="text-[22px] font-medium tracking-[-0.03em] text-white sm:text-[26px] lg:text-[28px]">
                  {leader.name}
                </h3>
                <p className="mt-1.5 text-[13px] leading-[1.5] text-white/55 sm:text-[14px]">
                  {leader.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
