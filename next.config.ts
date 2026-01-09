import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn-icons-png.flaticon.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.pexels.com', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.brandfetch.io', pathname: '/**' },
      { protocol: 'https', hostname: 'i.postimg.cc', pathname: '/**' },
    ],
  },

  compress: true,
  poweredByHeader: false,
} satisfies NextConfig;

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
