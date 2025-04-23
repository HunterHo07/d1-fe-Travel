import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Configure basePath for GitHub Pages
  basePath: '/d1-fe-Travel',
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
