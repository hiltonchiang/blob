/** @type {import('next').NextConfig} */
const output = process.env.EXPORT ? 'export' : undefined
const basePath = process.env.BASE_PATH || undefined

import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output,
  basePath,
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
};

export default withMDX(config);
