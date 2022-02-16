/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Directories eslint will lint
  eslint: {
    dirs: ['pages', 'components', 'lib', '__tests__'],
  },
  // Standalone version is used in Docker. Note: this doesn't support any features which require a server.
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;
