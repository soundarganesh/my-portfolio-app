import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {},
  /* config options here */
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     issuer: /\.[jt]sx?$/, // ensures it only applies to JS/TS files
  //     use: ['@svgr/webpack'],
  //   })
  //   return config
  // },
}

export default nextConfig
