/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
  buildExcludes: [/chunks\/.*$/],
  maximumFileSizeToCacheInBytes: 3000000,
})({
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      "@radix-ui/react-slot",
      "class-variance-authority",
    ],
  },
  images: {
    unoptimized: true,
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: ["@svgr/webpack"],
    });

    if (process.env.NODE_ENV === "development") {
      config.cache = {
        type: "filesystem",
        buildDependencies: {
          config: [__filename],
        },
      };
    }

    return config;
  },
});

module.exports = nextConfig;
