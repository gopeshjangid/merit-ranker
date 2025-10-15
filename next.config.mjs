await import('./src/env.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.ufs.sh",
      },
      // Added additional remote patterns for images based on migration integration (e.g., from meritranker-web assets)
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  // Remove React import requirement for Next.js 15
  compiler: {
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
  // Enable SWC minification for better performance
  swcMinify: true,
};

export default nextConfig;
