import { CampusMotion } from '@/components/campus/campus-motion'
import CampusHero from '@/components/campus/campus-hero'
import { CampusPathway } from '@/components/campus/campus-pathway'
import { DeepTechLeadership } from '@/components/campus/deeptech-leadership'
import { MultidisciplinaryLearning } from '@/components/campus/multidisciplinary-learning'
import { InnovationStudios } from '@/components/campus/innovation-studios'
import { RealWorldProjects } from '@/components/campus/real-world-projects'
import { StartupPathway } from '@/components/campus/startup-pathway'
import { AgenticLearning } from '@/components/campus/agentic-learning'
import { TransformationJourney } from '@/components/campus/transformation-journey'
import { BeyondCertificates } from '@/components/campus/beyond-certificates'
import { CampusEcosystem } from '@/components/campus/campus-ecosystem'
import { CampusCTA } from '@/components/campus/campus-cta'
import { SiteShell } from '@/components/site-shell'

export const metadata = {
  title: 'Campus — From AI Learner to DeepTech Innovator | AgenticX',
  description:
    'We transform students from AI learners into DeepTech innovators through AI leadership, multidisciplinary learning, hands-on innovation and real-world projects.',
}

export default function CampusPage() {
  return (
    <SiteShell>
      <CampusMotion>
        <CampusHero />
        <CampusPathway />
        <DeepTechLeadership />
        {/* <MultidisciplinaryLearning /> */}
        <InnovationStudios />
        <RealWorldProjects />
        {/* <StartupPathway /> */}
        {/* <AgenticLearning /> */}
        {/* <TransformationJourney /> */}
        <BeyondCertificates />
        {/* <CampusEcosystem /> */}
        <CampusCTA />
      </CampusMotion>
    </SiteShell>
  )
}
