/** @type {import("next").NextConfig} */
const output = process.env.EXPORT ? 'export' : undefined
const basePath = process.env.BASE_PATH || undefined

const nextConfig = {
  output,
  basePath,
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "public.blob.vercel-storage.com",
      },
    ],
  },
};

module.exports = nextConfig;
