import { ContentPage } from '@/components/content-page'
import { pageContent } from '@/lib/page-content'

const content = pageContent['services/polymathground-startups']

export const metadata = {
  title: 'PolymathGround Startups | AgenticX',
  description: content.intro,
}

export default function PolymathGroundStartupsPage() {
  return <ContentPage eyebrow="SERVICES · POLYMATHGROUND STARTUPS" {...content} />
}
