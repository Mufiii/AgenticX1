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
      { source: '/products/personalized-agents', destination: '/services/personalized-agents', permanent: false },
      { source: '/products/agentic-enterprises', destination: '/services/agentic-enterprises', permanent: false },
      { source: '/products/polymathground-startups', destination: '/services/polymathground-startups', permanent: false },
      { source: '/products/qaq-passport', destination: '/services/qaq-passport', permanent: false },
    ]
  },
}

export default nextConfig
