/** @type {import("next").NextConfig} */
const output = process.env.EXPORT ? 'export' : undefined
const basePath = process.env.BASE_PATH || undefined

const nextConfig = {
  output,
  basePath,
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
