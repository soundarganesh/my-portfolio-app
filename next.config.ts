import type { NextConfig } from 'next';
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === "development", // Disable in dev to avoid aggressive caching issues during dev
  workboxOptions: {
    disableDevLogs: true,
  },
});

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
};

export default withPWA(nextConfig);
