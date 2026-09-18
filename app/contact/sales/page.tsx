import { SalesPage } from '@/components/contact/SalesPage'
import { SiteShell } from '@/components/site-shell'

export const metadata = {
  title: 'Talk to Sales | AgenticX',
  description:
    'Tell us about your organization and what you want to build. We’ll connect you with the right AgenticX team.',
}

export default function Page() {
  return (
    <SiteShell>
      <SalesPage />
    </SiteShell>
  )
}
