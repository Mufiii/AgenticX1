import { Globe2, Layers, MapPin, Users, Workflow } from 'lucide-react'
import { CampusMotion } from '@/components/campus/campus-motion'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactEyebrow, ContactGlow } from '@/components/contact/contact-ui'

const points = [
  {
    number: '01',
    title: 'Human-Centred Transformation',
    copy: 'Design AI and DeepTech around people, organizations and real-world outcomes.',
    icon: Users,
  },
  {
    number: '02',
    title: 'From Ideas to Execution',
    copy: 'Turn transformation goals into practical systems, workflows and intelligent capabilities.',
    icon: Workflow,
  },
  {
    number: '03',
    title: 'Built for Multiple Ecosystems',
    copy: 'Explore opportunities across campuses, corporations, communities, startups and research.',
    icon: Layers,
  },
  {
    number: '04',
    title: 'Global Collaboration',
    copy: 'Connect with AgenticX for partnerships, research and emerging technology initiatives.',
    icon: Globe2,
  },
]

export function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-[#050711] text-white">
      <ContactGlow />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:80px_80px]"
        aria-hidden="true"
      />

      <CampusMotion>
        <div className="relative mx-auto max-w-[1320px] px-6 pb-24 pt-32 sm:px-10 sm:pb-28 lg:px-16 lg:pb-32 lg:pt-40">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16 xl:gap-20">
            <div data-campus-reveal>
              <ContactEyebrow align="left">Contact</ContactEyebrow>

              <h1 className="text-[clamp(2.35rem,4.6vw,4.2rem)] font-medium leading-[0.96] tracking-[-0.05em]">
                Let&apos;s Design Your
                <br />
                <span className="bg-gradient-to-r from-[#B8A8FF] via-[#8B7CFF] to-[#C05CFF] bg-clip-text text-transparent">
                  Transformation.
                </span>
              </h1>

              <p className="mt-6 max-w-[520px] text-[17px] leading-[1.75] text-[#A1A1AA] sm:text-[18px]">
                Tell us what you&apos;re building, changing or exploring. We&apos;ll connect you
                with the right people across AgenticX.
              </p>

              <ul className="mt-10">
                {points.map((point) => {
                  const Icon = point.icon
                  return (
                    <li
                      key={point.number}
                      className="flex gap-3.5 border-t border-white/[0.08] py-5 first:border-t-0 first:pt-0 last:pb-0"
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.6}
                        className="mt-1 shrink-0 text-[#C4B5FD]"
                        aria-hidden="true"
                      />
                      <div className="min-w-0">
                        <p className="text-[11px] font-medium tracking-[0.18em] text-[#9B86FF]/70">
                          {point.number}
                        </p>
                        <h2 className="mt-1.5 text-[16px] font-medium tracking-[-0.02em] text-white">
                          {point.title}
                        </h2>
                        <p className="mt-1.5 text-[14px] leading-[1.65] text-[#A1A1AA]">
                          {point.copy}
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-10 flex items-start gap-3 border-t border-white/[0.08] pt-6">
                <MapPin
                  size={14}
                  strokeWidth={1.7}
                  className="mt-0.5 shrink-0 text-[#8B5CF6]"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[13px] leading-5 text-white/80">
                    AgenticX Global Business Transformation
                  </p>
                  <p className="mt-1 text-[12px] leading-5 text-white/40">
                    Kerala, India • Global Collaboration
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:self-start" data-campus-reveal>
              <ContactForm />
            </div>
          </div>
        </div>
      </CampusMotion>
    </section>
  )
}
