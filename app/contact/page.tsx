import { ContactPage } from '@/components/contact/ContactPage'
import { SiteShell } from '@/components/site-shell'

export const metadata = {
  title: 'Contact | AgenticX',
  description:
    "Tell us what you’re building, changing or exploring. We’ll connect you with the right people across AgenticX for transformation, partnerships, research and collaboration.",
}

export default function Page() {
  return (
    <SiteShell>
      <ContactPage />
    </SiteShell>
  )
}
