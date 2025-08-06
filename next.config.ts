import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/fleet',
        destination: '/',
      },
    ];
  },
};

export default nextConfig;
