/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['example.com'],
    minimumCacheTTL: 60,
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
