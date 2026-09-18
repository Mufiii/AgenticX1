import { CareerPage } from '@/components/career/CareerPage'
import { SiteShell } from '@/components/site-shell'

export const metadata = {
  title: 'Career | AgenticX',
  description:
    "We're building the future of human-centered intelligence. While we don't have any open positions at the moment, we're always interested in connecting with talented people who share our vision.",
}

export default function Page() {
  return (
    <SiteShell>
      <CareerPage />
    </SiteShell>
  )
}
