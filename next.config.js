import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {},
  webpack: (config, { isServer, nextRuntime }) => {
    if (isServer && nextRuntime === 'edge') {
      // Configure for Edge Runtime - exclude Node.js built-ins
      config.resolve.fallback = {
        ...config.resolve.fallback,
        "async_hooks": false,
        "fs": false,
        "net": false,
        "tls": false,
        "crypto": false,
        "stream": false,
        "util": false,
        "buffer": false,
        "events": false,
      };
    }
    return config;
  },
  // Remove static export as it's not compatible with dynamic routes
  // output: 'export',
};

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default nextConfig; 