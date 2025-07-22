import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/maa-durgakali',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/maa-durgakali/',
  trailingSlash: true,
};

export default nextConfig;
