import { AtmosphericBackground } from '@/components/atmospheric-background'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-root">
      <AtmosphericBackground />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
