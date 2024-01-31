/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
      },
      {
        hostname: 'dev.diogopassos.pt',
      },
      {
        hostname: 'diogopassos.pt',
      },
    ],
  },
};

module.exports = nextConfig;
