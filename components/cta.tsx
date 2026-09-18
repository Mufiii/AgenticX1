import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function CTA({ label = 'Secure your place in the AI economy' }: { label?: string }) {
  return (
    <Link href="/company/contact" className="button-primary">
      {label} <ArrowUpRight size={16} />
    </Link>
  )
}
