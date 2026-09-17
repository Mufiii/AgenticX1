import { CampusSection } from '@/components/campus/campus-ui'

const technologies = [
  'AI',
  'Agentic Systems',
  'Robotics',
  'Digital Twins',
  'IoT',
  'Blockchain',
  'AR / VR / MR',
  'Semiconductors',
  'Photonics',
] as const

export function DeepTechLeadership() {
  return (
    <CampusSection>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16" data-campus-reveal>
        <div>
          <h2 className="max-w-[640px] text-[clamp(2.25rem,4.6vw,4.375rem)] font-normal leading-[1.05] tracking-[-0.06em]">
            Lead in the Technologies <em className="not-italic text-[#c4b5fd]">Shaping Tomorrow</em>
          </h2>
          <p className="mt-6 max-w-[480px] text-[16px] leading-[1.7] text-[#9b979e]">
            Build strong foundations in AI, Agentic Systems, Robotics, Digital Twins, IoT, Blockchain,
            AR/VR/MR, Semiconductors and Photonics.
          </p>
        </div>
        <p className="self-end max-w-[420px] text-[15px] leading-[1.7] text-[#8f8a94] lg:text-right">
          Students learn not only how emerging technologies work, but how to apply them to real-world
          problems.
        </p>
      </div>

      <ul
        className="mt-14 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-10 lg:mt-16 lg:grid-cols-3 lg:gap-x-12"
        data-campus-reveal
      >
        {technologies.map((tech, index) => (
          <li key={tech} className="group border-t border-[#2c2932] py-6 lg:py-8">
            <span className="text-[11px] tracking-[0.14em] text-[#c4b5fd]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="mt-3 text-[22px] tracking-[-0.04em] text-[#f7f6f3] transition-colors duration-200 group-hover:text-[#c4b5fd] sm:text-[24px] lg:text-[26px]">
              {tech}
            </p>
          </li>
        ))}
      </ul>
    </CampusSection>
  )
}
