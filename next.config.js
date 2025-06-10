import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable Edge Runtime for all routes
  experimental: {
    runtime: 'edge',
    serverActions: true,
  },
  // Disable image optimization since Cloudflare Pages doesn't support it
  images: {
    unoptimized: true,
  }
};

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default nextConfig; 