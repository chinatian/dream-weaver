/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Configure for edge compatibility
  experimental: {
    webpackBuildWorker: false,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't attempt to import node-specific modules on the client side
      config.resolve.fallback = {
        ...config.resolve.fallback,
        "async_hooks": false,
        "fs": false,
        "net": false,
        "tls": false,
      };
    }
    return config;
  },
};

// Handle specific environment requirements
if (process.env.NEXT_RUNTIME === "edge") {
  nextConfig.experimental = {
    ...nextConfig.experimental,
    // Ensure edge runtime specific settings
    isrMemoryCacheSize: 0,
    serverActions: true,
  };
}

export default nextConfig; 