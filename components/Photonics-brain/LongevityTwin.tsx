import Image from 'next/image'
import {
  Activity,
  Brain,
  Leaf,
  Users,
} from 'lucide-react'

const dimensions = [
  {
    title: 'Physical',
    icon: Activity,
    color: 'blue',
    items: ['Fitness', 'Cardiovascular', 'Metabolic', 'Recovery'],
  },
  {
    title: 'Cognitive',
    icon: Brain,
    color: 'purple',
    items: ['Focus', 'Cognition', 'Performance', 'Cognitive load'],
  },
  {
    title: 'Lifestyle',
    icon: Leaf,
    color: 'green',
    items: ['Sleep', 'Nutrition', 'Activity', 'Environment'],
  },
  {
    title: 'Psychological & Social',
    icon: Users,
    color: 'orange',
    items: ['Stress', 'Mental wellbeing', 'Purpose', 'Social wellbeing'],
  },
]

export function LongevityTwin() {
  return (
    <section className="relative overflow-hidden bg-white text-[#101936]">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute left-1/2 top-40 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#6366f1]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-4xl text-center">

          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#6d5dfc]" />

            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#4f46a5]">
              The Longevity Twin
            </span>

            <span className="h-px w-12 bg-[#6d5dfc]" />
          </div>

          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.05em] mb-3">
            Understand the Whole Human,
            <br />

            <span className="bg-gradient-to-r from-[#1677ff] via-[#5b5bea] to-[#c23de8] bg-clip-text text-transparent">
              Not Just One Health Metric.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-7 text-[#52607a]">
            Introduce the multidimensional Longevity Profile.
          </p>
        </div>


        {/* ================= IMAGE ================= */}
        <div className="relative mx-auto  max-w-[1000px]">
          <div className="relative aspect-[16/7] w-full">
            <Image
              src="/images/LongevityTwin.png"
              alt="Longevity Twin"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>


      </div>
    </section>
  )
}