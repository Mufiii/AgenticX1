/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/research/agentic-brain', destination: '/products/agentic-brain', permanent: false },
      { source: '/research/ai-digital-twin', destination: '/products/ai-digital-twin', permanent: false },
      { source: '/research/photonic-brain', destination: '/products/photonic-brain', permanent: false },
      { source: '/services/agentic-brain', destination: '/products/agentic-brain', permanent: false },
      { source: '/products/personalized-agents', destination: '/services/personalized-agents', permanent: false },
      { source: '/products/agentic-enterprises', destination: '/services/agentic-enterprises', permanent: false },
      { source: '/products/polymathground-startups', destination: '/services/polymathground-startups', permanent: false },
      { source: '/products/qaq-passport', destination: '/services/qaq-passport', permanent: false },
    ]
  },
  async rewrites() {
    return [
      { source: '/product', destination: '/products' },
      { source: '/product/:path*', destination: '/products/:path*' },
    ]
  },
}

export default nextConfig
