import { notFound } from 'next/navigation'
import { ContentPage, pageContent } from '@/components/agenticx-site'

export function generateStaticParams() {
  return Object.keys(pageContent).map((slug) => ({ slug: slug.split('/') }))
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const key = slug.join('/')
  const content = pageContent[key]
  if (!content) notFound()
  return <ContentPage eyebrow={key.replaceAll('/', ' · ').toUpperCase()} {...content} />
}
