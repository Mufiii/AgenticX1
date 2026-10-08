import { notFound } from 'next/navigation'
import { ContentPage } from '@/components/content-page'
import { pageContent } from '@/lib/page-content'

const dedicatedPages = new Set([
  'solutions/campus',
  'solutions/corporate',
  'solutions/community',
  'services/personalized-agents',
  'services/agentic-enterprises',
  'polymathground',
  'services/polymathground-startups',
  'services/qaq-passport',
  'events',
  'marketplace',
  'use-cases',
  'company',
  'company/about',
  'contact',
  'contact/sales',
  'career',
])

export function generateStaticParams() {
  return Object.keys(pageContent)
    .filter((slug) => !dedicatedPages.has(slug))
    .map((slug) => ({ slug: slug.split('/') }))
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const key = slug.join('/')
  if (dedicatedPages.has(key)) notFound()
  const content = pageContent[key]
  if (!content) notFound()
  return <ContentPage eyebrow={key.replaceAll('/', ' · ').toUpperCase()} {...content} />
}
