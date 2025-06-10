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
    // Set platform to 'node' for server-side bundles
    if (isServer) {
      config.platform = 'node';
    }

    // Handle Node.js built-ins
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
        "async_hooks": isServer ? require.resolve('async_hooks') : false,
      }
    };

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