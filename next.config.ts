import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed 'output: export' to enable dynamic routing
  trailingSlash: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
