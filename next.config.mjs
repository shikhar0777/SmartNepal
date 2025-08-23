/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // ✅ IMPORTANT for Amplify SSR/API

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
