/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // postcssの設定
  postcssLoaderOptions: {
    postcssOptions: {
      config: './postcss.config.js',
    },
  },
}

module.exports = nextConfig
