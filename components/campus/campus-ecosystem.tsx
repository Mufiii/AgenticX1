'use client'

import { useState } from 'react'
import { CampusSection } from '@/components/campus/campus-ui'

const options = ['School', 'College', 'University', 'Innovation Centre'] as const

export function CampusEcosystem() {
  const [selected, setSelected] = useState<(typeof options)[number]>('University')

  return (
    <CampusSection>
      <div className="max-w-[680px]" data-campus-reveal>
        <h2 className="text-[clamp(2.25rem,4.8vw,4.375rem)] font-normal leading-[1.05] tracking-[-0.06em]">
          Built for the Next Generation of <em className="not-italic text-[#c4b5fd]">Innovators</em>
        </h2>
        <p className="mt-6 max-w-[480px] text-[16px] leading-[1.7] text-[#9b979e]">
          Bring the AgenticX Campus Transformation ecosystem to your:
        </p>
      </div>

      <div className="mt-12 lg:mt-14" data-campus-reveal>
        <div
          role="tablist"
          aria-label="Campus environments"
          className="grid grid-cols-2 gap-px bg-[#2c2932] lg:grid-cols-4"
        >
          {options.map((option) => {
            const isActive = option === selected
            const tabId = `campus-env-${option.toLowerCase().replace(/\s+/g, '-')}`
            return (
              <button
                key={option}
                type="button"
                role="tab"
                id={tabId}
                aria-selected={isActive}
                aria-controls="campus-env-panel"
                className={`min-h-[72px] bg-[#0b0a0f] px-4 py-5 text-left text-[16px] tracking-[-0.03em] transition-colors duration-200 sm:px-5 sm:text-[18px] ${
                  isActive ? 'text-white' : 'text-[#8f8a94] hover:text-[#f7f6f3]'
                }`}
                onClick={() => setSelected(option)}
              >
                <span className={`mb-3 block h-px w-7 ${isActive ? 'bg-[#6D35F5]' : 'bg-[#2c2932]'}`} />
                {option}
              </button>
            )
          })}
        </div>
        <div
          id="campus-env-panel"
          role="tabpanel"
          aria-labelledby={`campus-env-${selected.toLowerCase().replace(/\s+/g, '-')}`}
          className="border border-t-0 border-[#2c2932] px-5 py-8 sm:px-8 sm:py-10"
        >
          <p className="text-[18px] leading-[1.65] tracking-[-0.02em] text-[#f7f6f3] sm:text-[20px]">
            Bring the AgenticX Campus Transformation ecosystem to your {selected}.
          </p>
        </div>
      </div>
    </CampusSection>
  )
}
