import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable image optimization since Cloudflare Pages doesn't support it
  images: {
    unoptimized: true,
  },
  // Enable Edge Runtime globally
  experimental: {
    runtime: 'edge',
  },
  // Optimize for Cloudflare Pages
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        module: false,
        path: false,
      };
    }
    return config;
  },
};

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default nextConfig; 