/** @type {import('next').NextConfig} */
const output = process.env.EXPORT ? 'export' : undefined
const basePath = process.env.BASE_PATH || undefined

import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const config = {
  output,
  reactStrictMode: true,
};

export default withMDX(config);
