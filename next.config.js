/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Dla GitHub Pages - zmień na nazwę repozytorium
  // basePath: '/pzk-website',
  // assetPrefix: '/pzk-website/',
};

module.exports = nextConfig;
