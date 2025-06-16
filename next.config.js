/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'images.unsplash.com',
      port: '',
      pathname: '/**'
    }, {
      protocol: 'https',
      hostname: 'source.unsplash.com',
      port: '',
      pathname: '/**'
    }, {
      protocol: 'https',
      hostname: 'github.com',
      port: '',
      pathname: '/**'
    }, {
      protocol: 'https',
      hostname: 'images.pexels.com',
      port: '',
      pathname: '/**'
    }, {
      protocol: 'https',
      hostname: '76czsvtte3.ufs.sh',
      port: '',
      pathname: '/**'
    }]
  }
};
module.exports = nextConfig;