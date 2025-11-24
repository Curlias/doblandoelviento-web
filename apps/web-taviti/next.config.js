/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  images: {
    domains: [],
  },
};

module.exports = nextConfig;
