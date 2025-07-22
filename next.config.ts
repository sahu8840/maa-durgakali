import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = '/maa-durgakali';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: repo,
  assetPrefix: repo,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
