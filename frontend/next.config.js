/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['rb.gy']
  },
  // Directories eslint will lint
  eslint: {
    dirs: ['pages', 'components', 'lib', '__tests__', 'e2e'],
  },
  // Standalone version is used in Docker. Note: this doesn't support any features which require a server.
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;