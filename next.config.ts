import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable static export for development to allow dynamic routes
  // output: 'export',
  trailingSlash: false,

  // Image optimization
  images: {
    unoptimized: false, // Enable optimization for development
  },

  // Compression and optimization
  compress: true,

  // SEO and performance optimizations
  experimental: {
    optimizeCss: true,
  },

  // Headers for better caching and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=43200',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
