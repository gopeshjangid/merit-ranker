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
    ],
  },
  // Remove React import requirement for Next.js 15
  compiler: {
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
