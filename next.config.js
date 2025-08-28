/** @type {import('next').NextConfig} */
const nextConfig = {
  // No experimental appDir needed in Next.js 15
  images: {
    domains: ['image.tmdb.org'],
  },
}

module.exports = nextConfig