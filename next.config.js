const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/* eslint @typescript-eslint/no-var-requires: "off" */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: false,
  },
  env: {
    APP_URL: process.env.APP_URL,
    API_BASE_URL: process.env.API_BASE_URL,
    API_KEY: process.env.API_KEY,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    })
    return config
  },
})

module.exports = withBundleAnalyzer(nextConfig)
