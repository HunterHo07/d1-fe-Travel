import type { NextConfig } from "next";

// Only use basePath in production (for GitHub Pages)
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: isProd ? 'export' : undefined,
  // Configure basePath for GitHub Pages only in production
  basePath: isProd ? '/d1-fe-Travel' : '',
  // Disable image optimization since GitHub Pages doesn't support it
  images: {
    unoptimized: true,
  },
  // Add trailing slashes to URLs
  trailingSlash: true,
  // Disable server-side features that aren't supported in static exports
  reactStrictMode: true,
};

export default nextConfig;
