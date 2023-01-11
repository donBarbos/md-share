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
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    })
    return config
  },
})

module.exports = withBundleAnalyzer(nextConfig)
