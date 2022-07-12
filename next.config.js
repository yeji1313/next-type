const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'styles')],
    prependData: `@import "variables/index.scss";`,
  },
  images: {
    domains: ['localhost:3000'],
  },
};

module.exports = nextConfig;
