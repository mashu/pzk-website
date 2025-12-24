/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Dla GitHub Pages - zmień na nazwę repozytorium
  basePath: process.env.NODE_ENV === 'production' ? '/pzk-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/pzk-website/' : '',
};

module.exports = nextConfig;
